import { useFonts } from 'expo-font';
import {
  NotoSansKR_400Regular,
  NotoSansKR_700Bold,
} from '@expo-google-fonts/noto-sans-kr';

export function useBrandFonts() {
  const [loaded, error] = useFonts({
    NotoSansKR_400Regular,
    NotoSansKR_700Bold,
  });

  return { loaded: loaded && !error, error };
}
