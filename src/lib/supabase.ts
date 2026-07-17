import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

const extra = Constants.expoConfig?.extra ?? Constants.manifest?.extra ?? {};

const supabaseUrl =
  (extra.supabaseUrl as string | undefined) ??
  (typeof process !== 'undefined' ? process.env.EXPO_PUBLIC_SUPABASE_URL : undefined) ??
  '';

const supabaseAnonKey =
  (extra.supabaseAnonKey as string | undefined) ??
  (typeof process !== 'undefined' ? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY : undefined) ??
  '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
