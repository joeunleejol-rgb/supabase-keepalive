import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import type { Language } from '../lib/i18n';
import { t as translate, type Country, countries } from '../lib/i18n';

type LanguageContextValue = {
  lang: Language;
  country: Country | null;
  setCountry: (country: Country) => void;
  setLang: (lang: Language) => void;
  t: (key: Parameters<typeof translate>[1]) => string;
  session: Session | null;
  isAuthed: boolean;
  isSubscribed: boolean;
  babyName: string | null;
  babyAge: number | null;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, babyName: string, babyAge: number) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  subscribe: (plan: 'monthly' | 'yearly') => Promise<{ error: string | null }>;
  refreshSubscription: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState<Country | null>(null);
  const [lang, setLangState] = useState<Language>('ko');
  const [session, setSession] = useState<Session | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [babyName, setBabyName] = useState<string | null>(null);
  const [babyAge, setBabyAge] = useState<number | null>(null);

  // IP 기반 국가 자동 감지
  useEffect(() => {
    async function detectCountry() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code as string;
        const matched = countries.find((c) => c.code === countryCode);
        if (matched) {
          setCountryState(matched);
          setLangState(matched.languages[0]);
          return;
        }
      } catch {
        // IP 감지 실패 - 무시
      }
      // 기본값: 한국
      setCountryState(countries[0]);
      setLangState('ko');
    }
    detectCountry();
  }, []);

  // 세션 및 구독 상태 로드
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // 구독 및 아기 정보 로드
  const refreshSubscription = useCallback(async () => {
    if (!session?.user?.id) {
      setIsSubscribed(false);
      setBabyName(null);
      setBabyAge(null);
      return;
    }

    try {
      const { data: subData } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('status', 'active')
        .maybeSingle();

      setIsSubscribed(!!subData);

      const { data: babyData } = await supabase
        .from('baby_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .maybeSingle();

      if (babyData) {
        setBabyName(babyData.baby_name);
        setBabyAge(babyData.baby_age_months);
      }
    } catch {
      // 무시
    }
  }, [session]);

  useEffect(() => {
    refreshSubscription();
  }, [refreshSubscription]);

  const setCountry = useCallback((c: Country) => {
    setCountryState(c);
    // 국가 변경 시 해당 국가의 기본 언어로 초기화
    setLangState(c.languages[0]);
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  }, []);

  const signUp = useCallback(async (email: string, password: string, name: string, age: number) => {
    const trimmedName = name.trim();
    const ageMonths = Number.isFinite(age) ? Math.trunc(age) : 0;

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    if (!data.user) return { error: '회원가입에 실패했습니다.' };

    const { error: profileError } = await supabase.from('baby_profiles').upsert(
      {
        user_id: data.user.id,
        baby_name: trimmedName,
        baby_age_months: ageMonths,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    );

    if (profileError) return { error: profileError.message };

    setBabyName(trimmedName);
    setBabyAge(ageMonths);

    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setIsSubscribed(false);
    setBabyName(null);
    setBabyAge(null);
  }, []);

  const subscribe = useCallback(async (plan: 'monthly' | 'yearly') => {
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const expiresAt = new Date();
    if (plan === 'monthly') {
      expiresAt.setMonth(expiresAt.getMonth() + 1);
    } else {
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    }

    const { error } = await supabase.from('subscriptions').insert({
      user_id: session.user.id,
      plan,
      status: 'active',
      started_at: new Date().toISOString(),
      expires_at: expiresAt.toISOString(),
    });

    if (!error) {
      setIsSubscribed(true);
    }

    return { error: error?.message ?? null };
  }, [session]);

  const value: LanguageContextValue = {
    lang,
    country,
    setCountry,
    setLang,
    t: (key) => translate(lang, key),
    session,
    isAuthed: !!session,
    isSubscribed,
    babyName,
    babyAge,
    signIn,
    signUp,
    signOut,
    subscribe,
    refreshSubscription,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export { countries };
export type { Country };
