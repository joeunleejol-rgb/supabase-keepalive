import { Linking, Platform } from 'react-native';

const KYOBO_SALE_CMDT_PATTERN = /\/detail\/(S\d+)/i;

export function extractKyoboSaleCmdtId(url: string): string | null {
  const match = url.match(KYOBO_SALE_CMDT_PATTERN);
  return match?.[1] ?? null;
}

/** Canonical Kyobo product web URL — primary fallback for Linking */
export function normalizeKyoboWebUrl(webUrl: string, saleCmdtId?: string): string {
  const cmdtId = saleCmdtId ?? extractKyoboSaleCmdtId(webUrl);
  if (cmdtId) {
    return `https://product.kyobobook.co.kr/detail/${cmdtId}`;
  }
  return webUrl
    .replace(/products\.kyobobook\.co\.kr/i, 'product.kyobobook.co.kr')
    .trim();
}

function buildKyoboAppUrls(saleCmdtId: string): string[] {
  const deepLinks = [
    `kyobobook://open/goods/detail?saleCmdtid=${saleCmdtId}`,
    `kyobobook://product/detail?saleCmdtid=${saleCmdtId}`,
  ];

  if (Platform.OS === 'android') {
    const digits = saleCmdtId.replace(/^S0+/, '') || saleCmdtId.replace(/^S/, '');
    deepLinks.push(
      `intent://product.kyobobook.co.kr/detail/${saleCmdtId}#Intent;scheme=https;package=kr.co.kyobobook.mod;end`,
      `intent://mobile.kyobobook.co.kr/goods/detail/${digits}#Intent;scheme=https;package=kr.co.kyobobook.mod;end`,
    );
  }

  return deepLinks;
}

async function openWebUrl(url: string): Promise<boolean> {
  try {
    await Linking.openURL(url);
    return true;
  } catch (error) {
    console.error('[KyoboLink] Web openURL failed:', url, error);
    return false;
  }
}

/**
 * Opens Kyobo product: try app deep link when installed, then always fall back to
 * the canonical product.kyobobook.co.kr web URL from book data.
 */
export async function openKyoboProductLink(webUrl: string, saleCmdtId?: string): Promise<void> {
  const canonicalWebUrl = normalizeKyoboWebUrl(webUrl, saleCmdtId);
  const cmdtId = saleCmdtId ?? extractKyoboSaleCmdtId(canonicalWebUrl);

  if (cmdtId) {
    for (const appUrl of buildKyoboAppUrls(cmdtId)) {
      try {
        const canOpen = await Linking.canOpenURL(appUrl);
        if (!canOpen) continue;
        await Linking.openURL(appUrl);
        return;
      } catch (error) {
        console.error('[KyoboLink] App deep link failed, falling back to web:', appUrl, error);
      }
    }
  }

  const opened = await openWebUrl(canonicalWebUrl);
  if (opened) return;

  if (webUrl !== canonicalWebUrl) {
    await openWebUrl(webUrl);
  }
}
