import { Linking, Platform } from 'react-native';

const AMAZON_ASIN_PATTERN = /\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i;

export type AmazonDomain = 'de' | 'fr' | 'it' | 'com';

export function extractAmazonAsin(url: string): string | null {
  const match = url.match(AMAZON_ASIN_PATTERN);
  return match?.[1] ?? null;
}

export function extractAmazonDomain(url: string): AmazonDomain | null {
  if (/amazon\.de/i.test(url)) return 'de';
  if (/amazon\.fr/i.test(url)) return 'fr';
  if (/amazon\.it/i.test(url)) return 'it';
  if (/amazon\.com/i.test(url)) return 'com';
  return null;
}

function buildAmazonAppUrls(domain: AmazonDomain, asin: string): string[] {
  const host = `www.amazon.${domain}`;

  if (Platform.OS === 'ios') {
    return [
      `com.amazon.mobile.shopping://${host}/dp/${asin}`,
      `amazon://${host}/dp/${asin}`,
    ];
  }

  if (Platform.OS === 'android') {
    return [
      `com.amazon.mobile.shopping.web://amazon.${domain}/dp/${asin}`,
      `intent://www.amazon.${domain}/dp/${asin}#Intent;scheme=https;package=com.amazon.mShop.android.shopping;end`,
    ];
  }

  return [];
}

async function tryOpenUrl(url: string): Promise<boolean> {
  try {
    const supported = await Linking.canOpenURL(url);
    if (!supported) return false;
    await Linking.openURL(url);
    return true;
  } catch {
    return false;
  }
}

/** Opens Amazon product in the native app when installed, otherwise falls back to the web URL. */
export async function openAmazonProductLink(webUrl: string): Promise<void> {
  const domain = extractAmazonDomain(webUrl);
  const asin = extractAmazonAsin(webUrl);

  if (domain && asin) {
    for (const appUrl of buildAmazonAppUrls(domain, asin)) {
      const opened = await tryOpenUrl(appUrl);
      if (opened) return;
    }
  }

  await Linking.openURL(webUrl);
}
