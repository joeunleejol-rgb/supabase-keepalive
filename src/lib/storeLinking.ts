import { Linking } from 'react-native';
import { openAmazonProductLink, extractAmazonDomain } from './amazonLinking';
import { openKyoboProductLink, extractKyoboSaleCmdtId, normalizeKyoboWebUrl } from './kyoboLinking';

/** Route book clicks: Kyobo for KR, Amazon for EU markets. */
export async function openBookProductLink(
  webUrl: string,
  marketCode?: string | null,
  kyoboSaleCmdtId?: string,
): Promise<void> {
  try {
    if (marketCode === 'KR' || extractKyoboSaleCmdtId(webUrl)) {
      await openKyoboProductLink(webUrl, kyoboSaleCmdtId);
      return;
    }
    await openAmazonProductLink(webUrl);
  } catch (error) {
    console.error('[StoreLink] openBookProductLink failed:', webUrl, error);
    if (marketCode === 'KR' || extractKyoboSaleCmdtId(webUrl)) {
      await Linking.openURL(normalizeKyoboWebUrl(webUrl, kyoboSaleCmdtId)).catch((fallbackError) => {
        console.error('[StoreLink] Kyobo web emergency fallback failed:', fallbackError);
      });
      return;
    }
    await Linking.openURL(webUrl).catch((fallbackError) => {
      console.error('[StoreLink] Web emergency fallback failed:', fallbackError);
    });
  }
}

/** Route article and generic external links. */
export async function openExternalLink(url: string): Promise<void> {
  try {
    if (extractAmazonDomain(url)) {
      await openAmazonProductLink(url);
      return;
    }
    if (extractKyoboSaleCmdtId(url)) {
      await openKyoboProductLink(url);
      return;
    }
    await Linking.openURL(url);
  } catch (error) {
    console.error('[StoreLink] openExternalLink failed:', url, error);
    await Linking.openURL(url).catch((fallbackError) => {
      console.error('[StoreLink] External link emergency fallback failed:', fallbackError);
    });
  }
}
