import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Check, ArrowRight, ArrowLeft, Soup, X, ListChecks, Lightbulb, ChevronRight } from 'lucide-react-native';
import type { FoodType } from '../types';
import { getIcon } from '../lib/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { loc } from '../lib/i18n';
import { PrimaryButton, SecondaryButton, PressableCard, ScreenScroll, SectionBadge, AppModal, PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

const MODAL_MAX_HEIGHT = Dimensions.get('window').height * 0.82;

type Props = {
  foodTypes: FoodType[];
  selectedFoodType: string | null;
  onSelect: (foodTypeId: string) => void;
  onComplete: () => void;
  onBack: () => void;
};

type ColorTheme = {
  bg: string; border: string; text: string; gradientStart: string; gradientEnd: string; badgeBg: string; badgeText: string;
};

const colorThemes: Record<string, ColorTheme> = {
  amber: { bg: colors.amber[50], border: colors.amber[100], text: colors.amber[600], gradientStart: colors.amber[400], gradientEnd: colors.primary[500], badgeBg: colors.amber[100], badgeText: colors.amber[700] },
  rose: { bg: colors.rose[50], border: colors.rose[100], text: colors.rose[600], gradientStart: '#fb7185', gradientEnd: '#ec4899', badgeBg: colors.rose[100], badgeText: colors.rose[600] },
  sky: { bg: colors.sky[50], border: colors.sky[100], text: colors.sky[600], gradientStart: '#38bdf8', gradientEnd: '#3b82f6', badgeBg: colors.sky[100], badgeText: colors.sky[600] },
  emerald: { bg: colors.emerald[50], border: colors.emerald[100], text: colors.emerald[600], gradientStart: colors.emerald[400], gradientEnd: colors.green[500], badgeBg: colors.emerald[100], badgeText: colors.emerald[700] },
};

export function FoodTypeScreen({ foodTypes, selectedFoodType, onSelect, onComplete, onBack }: Props) {
  const { t, lang, country } = useLanguage();
  const [detailType, setDetailType] = useState<FoodType | null>(null);
  const isKorea = country?.code === 'KR';

  return (
    <>
      <ScreenScroll style={styles.container}>
        <SectionBadge label={t('nav.type')} bg={colors.accent[50]} textColor={colors.accent[600]} icon={<Soup size={16} color={colors.accent[500]} />} />
        <Text style={styles.title}>{t('foodType.title')}</Text>
        <Text style={styles.subtitle}>{t(isKorea ? 'foodType.subtitleKR' : 'foodType.subtitleEU')}</Text>
        <View style={styles.grid}>
          {foodTypes.map((type) => {
            const Icon = getIcon(type.icon_name);
            const theme = colorThemes[type.color_theme ?? 'amber'] ?? colorThemes.amber;
            const isSelected = selectedFoodType === type.id;
            return (
              <PressableCard key={type.id} selected={isSelected} onPress={() => onSelect(type.id)} style={[styles.typeCard, isSelected && { borderColor: theme.text }]}>
                {isSelected && <View style={[styles.checkCircle, { backgroundColor: theme.gradientEnd }]}><Check size={14} color={colors.white} strokeWidth={3} /></View>}
                <View style={[styles.typeIcon, { backgroundColor: theme.bg }]}><Icon size={28} color={theme.text} strokeWidth={1.5} /></View>
                <Text style={styles.typeName}>{loc(lang, type.name, type.name_en, type.name_de, type.name_fr, type.name_it)}</Text>
                <Text style={styles.typeDesc} numberOfLines={3}>{loc(lang, type.description ?? '', type.description_en, type.description_de, type.description_fr, type.description_it)}</Text>
                <PressableScale onPress={() => setDetailType(type)} scaleDown={0.97} style={[styles.detailsBtn, { backgroundColor: theme.badgeBg }]}>
                  <Text style={[styles.detailsBtnText, { color: theme.badgeText }]}>{t('foodType.details')}</Text>
                  <ChevronRight size={12} color={theme.badgeText} />
                </PressableScale>
              </PressableCard>
            );
          })}
        </View>
        <View style={styles.actions}>
          <SecondaryButton label={t('common.back')} onPress={onBack} icon={<ArrowLeft size={16} color={colors.neutral[700]} />} />
          <PrimaryButton label={t('common.next')} onPress={onComplete} disabled={!selectedFoodType} icon={<ArrowRight size={16} color={colors.white} />} />
        </View>
      </ScreenScroll>

      <AppModal visible={!!detailType} onClose={() => setDetailType(null)}>
        {detailType ? (
          <View style={styles.modalShell}>
            <View style={[styles.modalHeader, { backgroundColor: (colorThemes[detailType.color_theme ?? 'amber'] ?? colorThemes.amber).gradientStart }]}>
              <Pressable onPress={() => setDetailType(null)} style={styles.modalClose}>
                <X size={16} color={colors.white} />
              </Pressable>
              <View style={styles.modalHeaderRow}>
                {(() => {
                  const Icon = getIcon(detailType.icon_name);
                  return (
                    <View style={styles.modalIconBox}>
                      <Icon size={32} color={colors.white} strokeWidth={1.5} />
                    </View>
                  );
                })()}
                <View style={styles.modalHeaderText}>
                  <Text style={styles.modalTitle}>{loc(lang, detailType.name, detailType.name_en, detailType.name_de, detailType.name_fr, detailType.name_it)}</Text>
                  <Text style={styles.modalSubtitle}>{loc(lang, detailType.description ?? '', detailType.description_en, detailType.description_de, detailType.description_fr, detailType.description_it)}</Text>
                </View>
              </View>
            </View>

            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={styles.modalScrollContent}
              showsVerticalScrollIndicator
              keyboardShouldPersistTaps="handled"
            >
              {(() => {
                const theme = colorThemes[detailType.color_theme ?? 'amber'] ?? colorThemes.amber;
                const steps = loc(lang, detailType.steps ?? '', detailType.steps_en, detailType.steps_de, detailType.steps_fr, detailType.steps_it);
                const tips = loc(lang, detailType.tips ?? '', detailType.tips_en, detailType.tips_de, detailType.tips_fr, detailType.tips_it);
                return (
                  <>
                    {!!steps && (
                      <View style={styles.modalSection}>
                        <View style={styles.sectionTitleRow}>
                          <View style={[styles.sectionIcon, { backgroundColor: theme.bg }]}>
                            <ListChecks size={14} color={theme.text} />
                          </View>
                          <Text style={styles.sectionTitle}>{t('foodType.stepsTitle')}</Text>
                        </View>
                        {steps.split('\n').filter(Boolean).map((step, i) => (
                          <View key={i} style={styles.stepRow}>
                            <View style={[styles.stepNum, { backgroundColor: theme.badgeBg }]}>
                              <Text style={[styles.stepNumText, { color: theme.badgeText }]}>{i + 1}</Text>
                            </View>
                            <Text style={styles.stepText}>{step.replace(/^\d+\.\s*/, '')}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                    {!!tips && (
                      <View style={styles.modalSection}>
                        <View style={styles.sectionTitleRow}>
                          <View style={[styles.sectionIcon, { backgroundColor: theme.bg }]}>
                            <Lightbulb size={14} color={theme.text} />
                          </View>
                          <Text style={styles.sectionTitle}>{t('foodType.tipsTitle')}</Text>
                        </View>
                        {tips.split('\n').filter(Boolean).map((tip, i) => (
                          <View key={i} style={[styles.tipItem, { backgroundColor: theme.bg }]}>
                            <Text style={styles.tipText}>{tip}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                    <Pressable
                      onPress={() => { onSelect(detailType.id); setDetailType(null); }}
                      style={[
                        styles.modalSelectBtn,
                        selectedFoodType === detailType.id
                          ? { backgroundColor: theme.bg, borderWidth: 2, borderColor: theme.border }
                          : { backgroundColor: theme.gradientEnd },
                      ]}
                    >
                      <Check size={20} color={selectedFoodType === detailType.id ? theme.text : colors.white} strokeWidth={2.5} />
                      <Text style={[styles.modalSelectText, { color: selectedFoodType === detailType.id ? theme.text : colors.white }]}>
                        {selectedFoodType === detailType.id ? t('foodType.selected') : t('foodType.selectThis')}
                      </Text>
                    </Pressable>
                  </>
                );
              })()}
            </ScrollView>
          </View>
        ) : null}
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.xl },
  grid: { gap: spacing.lg, marginBottom: spacing.xl },
  typeCard: { position: 'relative', overflow: 'hidden' },
  checkCircle: { position: 'absolute', top: spacing.lg, right: spacing.lg, width: 28, height: 28, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  typeIcon: { width: 56, height: 56, borderRadius: radius.xl, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  typeName: { fontSize: 20, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.sm, paddingRight: spacing.xxl },
  typeDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  detailsBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, alignSelf: 'flex-start', marginTop: spacing.lg, paddingHorizontal: spacing.md, paddingVertical: 6, borderRadius: radius.full },
  detailsBtnText: { fontSize: 12, fontWeight: '700' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.lg },
  modalShell: {
    width: '100%',
    height: MODAL_MAX_HEIGHT,
    maxHeight: MODAL_MAX_HEIGHT,
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  modalHeader: {
    padding: spacing.xl,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  },
  modalClose: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  modalHeaderRow: { flexDirection: 'row', gap: spacing.lg, alignItems: 'center' },
  modalIconBox: { width: 56, height: 56, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: radius.xl, alignItems: 'center', justifyContent: 'center' },
  modalHeaderText: { flex: 1, paddingRight: spacing.xxl },
  modalTitle: { fontSize: 20, fontWeight: '700', color: colors.white, marginBottom: 4 },
  modalSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 20 },
  modalScroll: {
    flex: 1,
  },
  modalScrollContent: {
    paddingBottom: 40,
  },
  modalSection: { padding: spacing.xl },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  sectionIcon: { width: 24, height: 24, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: colors.neutral[700] },
  stepRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.sm, alignItems: 'flex-start' },
  stepNum: { width: 20, height: 20, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  stepNumText: { fontSize: 11, fontWeight: '700' },
  stepText: { flex: 1, fontSize: 14, color: colors.neutral[700], lineHeight: 20 },
  tipItem: { padding: spacing.md, borderRadius: radius.lg, marginBottom: spacing.sm },
  tipText: { fontSize: 14, color: colors.neutral[700], lineHeight: 20 },
  modalSelectBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, marginHorizontal: spacing.xl, paddingVertical: spacing.md, borderRadius: radius.lg },
  modalSelectText: { fontWeight: '700', fontSize: 16 },
});
