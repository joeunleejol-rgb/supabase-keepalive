import { useState } from 'react';
import { View, Text, Pressable, Modal, ScrollView, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Rect } from 'react-native-svg';
import { Baby, ChevronDown, Check } from 'lucide-react-native';
import type { AppStep } from '../types';
import { useLanguage, countries } from '../contexts/LanguageContext';
import { languageNames, type Language } from '../lib/i18n';
import { PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = { currentStep: AppStep };

const langFlags: Record<Language, string> = {
  ko: '🇰🇷', en: '🌐', de: '🇩🇪', fr: '🇫🇷', it: '🇮🇹',
};

const HEADER_BG = 'rgba(255,255,255,0.95)';

export function Header({ currentStep }: Props) {
  const { t, lang, country, setCountry, setLang } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const showSteps = currentStep !== 'intro';
  const stepLabels: { step: AppStep; label: string }[] = [
    { step: 'guide', label: t('nav.guide') },
    { step: 'tools', label: t('nav.tools') },
    { step: 'foodType', label: t('nav.type') },
    { step: 'ingredients', label: t('nav.ingredients') },
    { step: 'summary', label: t('nav.summary') },
  ];
  const currentStepIndex = stepLabels.findIndex((s) => s.step === currentStep);
  const uiLang: 'ko' | 'en' = lang === 'ko' ? 'ko' : 'en';
  const currentLangName = languageNames[lang][uiLang];
  const availableLangs = country?.languages ?? ['ko', 'en'];

  return (
    <View style={styles.header}>
      <View style={styles.inner}>
        <View style={styles.row}>
          <View style={styles.brand}>
            <View style={styles.logoBox}>
              <Baby size={20} color={colors.primary[500]} strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t('app.title')}</Text>
          </View>
          <View style={styles.right}>
            {showSteps && currentStepIndex >= 0 && currentStepIndex < stepLabels.length && (
              <View style={styles.stepsScrollWrap}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.stepsScroll}
                  contentContainerStyle={styles.stepsScrollContent}
                >
                  {stepLabels.map((s, index) => {
                    const isActive = index === currentStepIndex;
                    const isCompleted = index < currentStepIndex;
                    return (
                      <View key={s.step} style={styles.stepItem}>
                        <View style={[styles.stepPill, isActive && styles.stepPillActive, isCompleted && !isActive && styles.stepPillCompleted]}>
                          <View style={[styles.stepNum, isActive && styles.stepNumActive, isCompleted && !isActive && styles.stepNumCompleted]}>
                            <Text style={[styles.stepNumText, isActive && styles.stepNumTextActive, isCompleted && !isActive && styles.stepNumTextCompleted]}>{index + 1}</Text>
                          </View>
                          <Text style={[styles.stepLabel, isActive && styles.stepLabelActive, isCompleted && !isActive && styles.stepLabelCompleted]}>{s.label}</Text>
                        </View>
                        {index < stepLabels.length - 1 && <View style={[styles.stepConnector, isCompleted && styles.stepConnectorDone]} />}
                      </View>
                    );
                  })}
                </ScrollView>
                <View style={styles.stepsFade} pointerEvents="none">
                  <Svg width="100%" height="100%" preserveAspectRatio="none">
                    <Defs>
                      <SvgLinearGradient id="headerStepsFade" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                        <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
                      </SvgLinearGradient>
                    </Defs>
                    <Rect x="0" y="0" width="100%" height="100%" fill="url(#headerStepsFade)" />
                  </Svg>
                </View>
              </View>
            )}
            <PressableScale onPress={() => setDropdownOpen(true)} scaleDown={0.97} style={styles.dropdownBtn}>
              <Text style={styles.flag}>{country?.flag ?? '🌐'}</Text>
              <Text style={styles.countryName} numberOfLines={1}>{country ? country.name[uiLang] : t('country.select')}</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.langName}>{currentLangName}</Text>
              <ChevronDown size={14} color={colors.neutral[400]} />
            </PressableScale>
          </View>
        </View>
      </View>
      <Modal visible={dropdownOpen} transparent animationType="fade" onRequestClose={() => setDropdownOpen(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setDropdownOpen(false)}>
          <Pressable style={styles.dropdown} onPress={() => {}}>
            <ScrollView>
              <Text style={styles.sectionLabel}>{uiLang === 'ko' ? '국가' : 'Country'}</Text>
              {countries.map((c) => (
                <PressableScale key={c.code} onPress={() => setCountry(c)} scaleDown={0.98} style={[styles.option, country?.code === c.code && styles.optionActive]}>
                  <Text style={styles.optionFlag}>{c.flag}</Text>
                  <Text style={[styles.optionText, country?.code === c.code && styles.optionTextActive]}>{c.name[uiLang]}</Text>
                  {country?.code === c.code && <Check size={14} color={colors.primary[500]} />}
                </PressableScale>
              ))}
              <View style={styles.divider} />
              <Text style={styles.sectionLabel}>{uiLang === 'ko' ? '언어' : 'Language'}</Text>
              {availableLangs.map((l) => (
                <PressableScale key={l} onPress={() => { setLang(l); setDropdownOpen(false); }} scaleDown={0.98} style={[styles.option, lang === l && styles.optionActive]}>
                  <Text style={styles.optionFlag}>{langFlags[l]}</Text>
                  <Text style={[styles.optionText, lang === l && styles.optionTextActive]}>{languageNames[l][uiLang]}</Text>
                  {lang === l && <Check size={14} color={colors.primary[500]} />}
                </PressableScale>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: HEADER_BG, borderBottomWidth: 1, borderBottomColor: colors.neutral[100], zIndex: 50 },
  inner: { paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm },
  brand: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flexShrink: 0 },
  logoBox: { width: 36, height: 36, backgroundColor: colors.primary[50], borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  title: { fontWeight: '700', color: colors.neutral[800], fontSize: 15 },
  right: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: spacing.sm, minWidth: 0 },
  stepsScrollWrap: { flex: 1, maxWidth: '55%', minWidth: 0, position: 'relative', overflow: 'hidden' },
  stepsScroll: { flexGrow: 0 },
  stepsScrollContent: { alignItems: 'center', paddingRight: 28 },
  stepsFade: { position: 'absolute', right: 0, top: 0, bottom: 0, width: 36 },
  stepItem: { flexDirection: 'row', alignItems: 'center', flexShrink: 0 },
  stepPill: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.full, backgroundColor: colors.neutral[50], flexShrink: 0 },
  stepPillActive: { backgroundColor: colors.primary[500] },
  stepPillCompleted: { backgroundColor: colors.primary[50] },
  stepNum: { width: 16, height: 16, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.neutral[200] },
  stepNumActive: { backgroundColor: 'rgba(255,255,255,0.2)' },
  stepNumCompleted: { backgroundColor: colors.primary[100] },
  stepNumText: { fontSize: 10, fontWeight: '700', color: colors.neutral[400] },
  stepNumTextActive: { color: colors.white },
  stepNumTextCompleted: { color: colors.primary[600] },
  stepLabel: { fontSize: 11, fontWeight: '600', color: colors.neutral[400] },
  stepLabelActive: { color: colors.white },
  stepLabelCompleted: { color: colors.primary[500] },
  stepConnector: { width: 12, height: 2, borderRadius: 1, backgroundColor: colors.neutral[200], marginHorizontal: 4 },
  stepConnectorDone: { backgroundColor: colors.primary[200] },
  dropdownBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, backgroundColor: colors.neutral[50], borderRadius: radius.lg, maxWidth: 180 },
  flag: { fontSize: 16 },
  countryName: { fontSize: 13, fontWeight: '600', color: colors.neutral[700], flexShrink: 1 },
  dot: { color: colors.neutral[300] },
  langName: { fontSize: 11, fontWeight: '700', color: colors.primary[600] },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-start', alignItems: 'flex-end', paddingTop: 60, paddingRight: spacing.lg },
  dropdown: { width: 256, backgroundColor: colors.white, borderRadius: radius.xl, paddingVertical: spacing.sm, shadowColor: colors.black, shadowOpacity: 0.15, shadowRadius: 12, elevation: 8, maxHeight: 400 },
  sectionLabel: { fontSize: 10, fontWeight: '700', color: colors.neutral[400], textTransform: 'uppercase', letterSpacing: 1, paddingHorizontal: spacing.md, marginBottom: spacing.sm, marginTop: spacing.sm },
  option: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, paddingVertical: spacing.sm, marginHorizontal: spacing.sm, borderRadius: radius.lg },
  optionActive: { backgroundColor: colors.primary[50] },
  optionFlag: { fontSize: 16 },
  optionText: { flex: 1, fontSize: 14, color: colors.neutral[600] },
  optionTextActive: { color: colors.primary[700], fontWeight: '700' },
  divider: { height: 1, backgroundColor: colors.neutral[100], marginVertical: spacing.sm, marginHorizontal: spacing.md },
});
