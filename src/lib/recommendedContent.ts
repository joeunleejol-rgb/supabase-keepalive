import type { LocalizedCopy } from '../data/recommendedData';
import { loc, type Language } from './i18n';

export function pickLocalizedCopy(lang: Language, copy: LocalizedCopy): string {
  return loc(lang, copy.ko ?? copy.en, copy.en, copy.de ?? null, copy.fr ?? null, copy.it ?? null);
}
