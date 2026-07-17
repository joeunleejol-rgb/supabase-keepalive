import { useState, useMemo, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { Calendar, ArrowLeft, RefreshCw, Sun, Cloud, Moon, Coffee, Baby, ArrowRight, Carrot } from 'lucide-react-native';
import type { Ingredient, FoodType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { loc, formatPlanDay } from '../lib/i18n';
import { generateMealPlan, type DayPlan, type StageType, type PlanType } from '../lib/mealPlanGenerator';
import {
  getVegetarianVisibleIngredients,
  isVegetarianFoodType,
  sanitizeSelectedIngredientIds,
} from '../lib/vegetarianIngredients';
import { Card, PrimaryButton, SecondaryButton, ScreenScroll, SectionBadge } from './ui/primitives';
import { IngredientGrid, IngredientGridCard } from './IngredientGridCard';
import { colors, spacing, radius } from '../theme';

type Props = {
  ingredients: Ingredient[];
  foodTypes: FoodType[];
  selectedFoodType: string | null;
  selectedIngredients: string[];
  onBack: () => void;
};

const categoryConfig = {
  grain:     { label: { ko: '곡류',   en: 'Grains',      de: 'Getreide',   fr: 'Céréales',   it: 'Cereali'  }, color: 'amber'   },
  vegetable: { label: { ko: '채소',   en: 'Vegetables',  de: 'Gemüse',     fr: 'Légumes',    it: 'Verdure'  }, color: 'green'   },
  fruit:     { label: { ko: '과일',   en: 'Fruits',      de: 'Obst',       fr: 'Fruits',     it: 'Frutta'   }, color: 'rose'    },
  protein:   { label: { ko: '단백질', en: 'Protein',     de: 'Eiweiß',     fr: 'Protéines',  it: 'Proteine' }, color: 'sky'     },
  etc:       { label: { ko: '기타',   en: 'Other',       de: 'Sonstiges',  fr: 'Autres',     it: 'Altro'    }, color: 'neutral' },
} as const;

const colorThemes: Record<string, { bg: string; text: string; border: string }> = {
  amber:   { bg: colors.amber[50],   text: colors.amber[600],   border: colors.amber[100] },
  green:   { bg: colors.green[50],   text: colors.green[600],   border: colors.green[100] },
  rose:    { bg: colors.rose[50],    text: colors.rose[600],    border: colors.rose[100] },
  sky:     { bg: colors.sky[50],     text: colors.sky[600],     border: colors.sky[100] },
  neutral: { bg: colors.neutral[50], text: colors.neutral[600], border: colors.neutral[200] },
};


export function MealPlanScreen({ ingredients, foodTypes, selectedFoodType, selectedIngredients, onBack }: Props) {
  const { t, lang } = useLanguage();
  const [stageType, setStageType] = useState<StageType | null>(null);
  const [planType, setPlanType] = useState<PlanType | null>(null);
  const [step, setStep] = useState<'stage' | 'type' | 'ingredients' | 'plan'>('stage');
  const [plan, setPlan] = useState<DayPlan[]>([]);

  const selectedFoodTypeObj = foodTypes.find((ft) => ft.id === selectedFoodType);
  const isVegetarianPlan = isVegetarianFoodType(selectedFoodTypeObj);

  const planIngredients = useMemo(
    () => getVegetarianVisibleIngredients(ingredients, isVegetarianPlan),
    [ingredients, isVegetarianPlan],
  );

  const initialSafeIds = useMemo(
    () => sanitizeSelectedIngredientIds(selectedIngredients, ingredients, isVegetarianPlan),
    [selectedIngredients, ingredients, isVegetarianPlan],
  );

  const [localSelectedIds, setLocalSelectedIds] = useState<string[]>(initialSafeIds);

  useEffect(() => {
    setLocalSelectedIds((prev) => sanitizeSelectedIngredientIds(prev, ingredients, isVegetarianPlan));
  }, [isVegetarianPlan, ingredients]);

  const nextStage = (s: StageType): StageType =>
    s === 'early' ? 'mid' : s === 'mid' ? 'late' : 'toddler';

  const generatePlan = (idsToUse: string[]) => {
    if (!stageType || !planType) return;
    const safeIds = sanitizeSelectedIngredientIds(idsToUse, ingredients, isVegetarianPlan);
    setPlan(
      generateMealPlan({
        stageType,
        planType,
        ingredients: planIngredients,
        selectedIngredientIds: safeIds,
        foodType: selectedFoodTypeObj,
        lang,
      }),
    );
    setStep('plan');
  };

  const handleGoToIngredients = () => {
    setLocalSelectedIds(sanitizeSelectedIngredientIds(selectedIngredients, ingredients, isVegetarianPlan));
    setStep('ingredients');
  };

  const toggleIngredient = (id: string) => {
    setLocalSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const stageConfig: Record<StageType, { labelKey: 'plan.early' | 'plan.mid' | 'plan.late' | 'plan.toddler'; descKey: 'plan.earlyDesc' | 'plan.midDesc' | 'plan.lateDesc' | 'plan.toddlerDesc'; badge: string; iconBg: string; iconColor: string }> = {
    early:   { labelKey: 'plan.early',   descKey: 'plan.earlyDesc',   badge: lang === 'ko' ? '초기'   : lang === 'de' ? 'Früh'      : lang === 'fr' ? 'Début'  : lang === 'it' ? 'Inizio'      : 'Early',   iconBg: colors.amber[50],     iconColor: colors.amber[600]     },
    mid:     { labelKey: 'plan.mid',     descKey: 'plan.midDesc',     badge: lang === 'ko' ? '중기'   : lang === 'de' ? 'Mittel'    : lang === 'fr' ? 'Milieu' : lang === 'it' ? 'Intermedio'  : 'Mid',     iconBg: colors.primary[50],   iconColor: colors.primary[600]   },
    late:    { labelKey: 'plan.late',    descKey: 'plan.lateDesc',    badge: lang === 'ko' ? '후기'   : lang === 'de' ? 'Spät'      : lang === 'fr' ? 'Avancé' : lang === 'it' ? 'Avanzato'    : 'Late',    iconBg: colors.secondary[50], iconColor: colors.secondary[600] },
    toddler: { labelKey: 'plan.toddler', descKey: 'plan.toddlerDesc', badge: lang === 'ko' ? '유아식' : lang === 'de' ? 'Kleinkind' : lang === 'fr' ? 'Enfant' : lang === 'it' ? 'Bambino'     : 'Toddler', iconBg: colors.emerald[50],   iconColor: colors.emerald[600]   },
  };

  const stageBadgeStyles: Record<StageType, { bg: string; text: string }> = {
    early:   { bg: colors.amber[100],     text: colors.amber[700]     },
    mid:     { bg: colors.primary[100],   text: colors.primary[700]   },
    late:    { bg: colors.secondary[100], text: colors.secondary[700] },
    toddler: { bg: colors.emerald[100],   text: colors.emerald[700]   },
  };

  const grouped = useMemo(() => {
    return planIngredients.reduce((acc, ing) => {
      if (!acc[ing.category]) acc[ing.category] = [];
      acc[ing.category].push(ing);
      return acc;
    }, {} as Record<string, Ingredient[]>);
  }, [planIngredients]);

  const categoryOrder = ['grain', 'vegetable', 'fruit', 'protein', 'etc'] as const;
  const stepIndex = ['stage', 'type', 'ingredients'].indexOf(step);

  const monthSuffix = lang === 'ko' ? '개월+' : lang === 'de' ? 'Mo+' : lang === 'fr' ? 'mois+' : lang === 'it' ? 'mes+' : 'mo+';
  const selectedCountLabel = lang === 'ko' ? '개 선택됨' : lang === 'de' ? 'ausgewählt' : lang === 'fr' ? 'sélectionnés' : lang === 'it' ? 'selezionati' : 'selected';
  const ingredientsCountLabel = lang === 'ko' ? '개 재료' : lang === 'de' ? 'Zutaten' : lang === 'fr' ? 'aliments' : lang === 'it' ? 'alimenti' : 'ingredients';
  const clearAllLabel = lang === 'ko' ? '전체 해제' : lang === 'de' ? 'Alle abwählen' : lang === 'fr' ? 'Tout déselectionner' : lang === 'it' ? 'Deseleziona tutto' : 'Clear all';
  const { width: windowWidth } = useWindowDimensions();
  const generateLabel = t('plan.generate');
  const stackGenerateBtn = generateLabel.length > 12 || windowWidth < 360;

  return (
    <View style={styles.root}>
      <ScreenScroll style={[styles.container, step === 'ingredients' && { paddingBottom: stackGenerateBtn ? 170 : 140 }]}>
        <View style={styles.header}>
          <SectionBadge
            label={t('plan.title')}
            bg={colors.primary[50]}
            textColor={colors.primary[600]}
            icon={<Calendar size={16} color={colors.primary[500]} />}
          />
          <Text style={styles.title}>{t('plan.title')}</Text>
          <Text style={styles.subtitle}>{t('plan.subtitle')}</Text>
        </View>

        {step !== 'plan' && (
          <View style={styles.stepIndicator}>
            {(['stage', 'type', 'ingredients'] as const).map((s, i) => (
              <View key={s} style={styles.stepItem}>
                <View style={[
                  styles.stepDot,
                  step === s && styles.stepDotActive,
                  stepIndex > i && styles.stepDotDone,
                ]}>
                  <Text style={[
                    styles.stepDotText,
                    step === s && styles.stepDotTextActive,
                    stepIndex > i && styles.stepDotTextDone,
                  ]}>{i + 1}</Text>
                </View>
                {i < 2 && (
                  <View style={[styles.stepLine, stepIndex > i && styles.stepLineDone]} />
                )}
              </View>
            ))}
          </View>
        )}

        {step === 'stage' && (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{t('plan.stage')}</Text>
              <Text style={styles.sectionDesc}>{t('plan.stageDesc')}</Text>
            </View>
            <View style={styles.stageGrid}>
              {(['early', 'mid', 'late', 'toddler'] as StageType[]).map((s) => {
                const cfg = stageConfig[s];
                const isSelected = stageType === s;
                return (
                  <Pressable key={s} onPress={() => setStageType(s)} style={styles.stageGridItem}>
                    <Card selected={isSelected} style={styles.stageCard}>
                      <View style={[styles.stageIconBox, { backgroundColor: cfg.iconBg }]}>
                        <Baby size={20} color={cfg.iconColor} strokeWidth={1.5} />
                      </View>
                      <Text style={styles.stageCardTitle}>{t(cfg.labelKey)}</Text>
                      <Text style={styles.stageCardDesc}>{t(cfg.descKey)}</Text>
                    </Card>
                  </Pressable>
                );
              })}
            </View>
            <View style={styles.navRow}>
              <SecondaryButton
                label={t('plan.back')}
                onPress={onBack}
                icon={<ArrowLeft size={16} color={colors.neutral[700]} />}
                style={styles.navBtn}
              />
              <PrimaryButton
                label={t('common.next')}
                onPress={() => setStep('type')}
                disabled={!stageType}
                icon={<ArrowRight size={16} color={colors.white} />}
                style={styles.navBtn}
              />
            </View>
          </>
        )}

        {step === 'type' && (
          <>
            <View style={styles.typeGrid}>
              <Pressable onPress={() => setPlanType('weekly')} style={styles.typeGridItem}>
                <Card selected={planType === 'weekly'} style={styles.typeCard}>
                  <View style={[styles.typeIconBox, { backgroundColor: colors.primary[50] }]}>
                    <Calendar size={24} color={colors.primary[500]} strokeWidth={1.5} />
                  </View>
                  <Text style={styles.typeCardTitle}>{t('plan.weekly')}</Text>
                  <Text style={styles.typeCardDesc}>{t('plan.weeklyDesc')}</Text>
                </Card>
              </Pressable>
              <Pressable onPress={() => setPlanType('monthly')} style={styles.typeGridItem}>
                <Card selected={planType === 'monthly'} style={styles.typeCard}>
                  <View style={[styles.typeIconBox, { backgroundColor: colors.accent[50] }]}>
                    <Calendar size={24} color={colors.accent[500]} strokeWidth={1.5} />
                  </View>
                  <Text style={styles.typeCardTitle}>{t('plan.monthly')}</Text>
                  <Text style={styles.typeCardDesc}>{t('plan.monthlyDesc')}</Text>
                </Card>
              </Pressable>
            </View>
            {stageType && planType === 'monthly' && stageType !== 'late' && stageType !== 'toddler' && (
              <View style={styles.transitionNotice}>
                <Text style={styles.transitionNoticeText}>
                  {lang === 'ko'
                    ? `30일 계획 중 전반 15일은 ${stageConfig[stageType].badge} 재료로, 후반 15일은 ${stageConfig[nextStage(stageType)].badge} 재료로 자동 구성됩니다.`
                    : lang === 'de'
                    ? `Die ersten 15 Tage verwenden ${stageConfig[stageType].badge}-Zutaten; die letzten 15 Tage wechseln automatisch zu ${stageConfig[nextStage(stageType)].badge}-Zutaten.`
                    : lang === 'fr'
                    ? `Les 15 premiers jours utilisent des aliments "${stageConfig[stageType].badge}" ; les 15 derniers jours passent automatiquement aux aliments "${stageConfig[nextStage(stageType)].badge}".`
                    : lang === 'it'
                    ? `I primi 15 giorni usano alimenti "${stageConfig[stageType].badge}"; gli ultimi 15 giorni passano automaticamente agli alimenti "${stageConfig[nextStage(stageType)].badge}".`
                    : `The first 15 days use ${stageConfig[stageType].badge.toLowerCase()}-stage ingredients; the last 15 days automatically transition to ${stageConfig[nextStage(stageType)].badge.toLowerCase()}-stage ingredients.`}
                </Text>
              </View>
            )}
            <View style={styles.navRow}>
              <SecondaryButton
                label={t('plan.back')}
                onPress={() => setStep('stage')}
                icon={<ArrowLeft size={16} color={colors.neutral[700]} />}
                style={styles.navBtn}
              />
              <PrimaryButton
                label={t('common.next')}
                onPress={handleGoToIngredients}
                disabled={!planType}
                icon={<ArrowRight size={16} color={colors.white} />}
                style={styles.navBtn}
              />
            </View>
          </>
        )}

        {step === 'ingredients' && (
          <>
            <View style={styles.ingredientsHeader}>
              <View style={styles.ingredientsHeaderRow}>
                <Text style={styles.sectionTitle}>{t('plan.reviewIngredients')}</Text>
                <Text style={styles.selectedCount}>
                  {localSelectedIds.length} {selectedCountLabel}
                </Text>
              </View>
              <Text style={styles.sectionDesc}>{t('plan.reviewIngredientsDesc')}</Text>
            </View>

            <View style={styles.categoryList}>
              {categoryOrder.map((cat) => {
                const catIngs = grouped[cat];
                if (!catIngs || catIngs.length === 0) return null;
                const config = categoryConfig[cat];
                const theme = colorThemes[config.color];
                return (
                  <View key={cat} style={styles.categorySection}>
                    <View style={styles.categoryHeader}>
                      <Text style={styles.categoryTitle}>{(config.label as Record<string, string>)[lang] ?? config.label.en}</Text>
                      <View style={[styles.categoryBadge, { backgroundColor: theme.bg }]}>
                        <Text style={[styles.categoryBadgeText, { color: theme.text }]}>
                          {catIngs.filter((i) => localSelectedIds.includes(i.id)).length}/{catIngs.length}
                        </Text>
                      </View>
                    </View>
                    <IngredientGrid>
                      {catIngs.map((ing) => {
                        const isSelected = localSelectedIds.includes(ing.id);
                        const ingTheme = colorThemes[ing.color_theme ?? config.color] ?? theme;
                        return (
                          <IngredientGridCard
                            key={ing.id}
                            ingredient={ing}
                            name={loc(lang as Parameters<typeof loc>[0], ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it)}
                            monthSuffix={monthSuffix}
                            isSelected={isSelected}
                            isStarter={!!ing.is_starter_recommended}
                            iconColors={ingTheme}
                            onPress={() => toggleIngredient(ing.id)}
                          />
                        );
                      })}
                    </IngredientGrid>
                  </View>
                );
              })}
            </View>
          </>
        )}

        {step === 'plan' && (
          <>
            <View style={styles.planHeader}>
              <View style={styles.planHeaderBadges}>
                {stageType && (
                  <View style={[styles.stagePill, { backgroundColor: stageBadgeStyles[stageType].bg }]}>
                    <Text style={[styles.stagePillText, { color: stageBadgeStyles[stageType].text }]}>
                      {stageConfig[stageType].badge}
                    </Text>
                  </View>
                )}
                <View style={[styles.planDurationPill, { backgroundColor: colors.primary[50] }]}>
                  <Calendar size={16} color={colors.primary[500]} />
                  <Text style={[styles.planDurationPillText, { color: colors.primary[600] }]}>
                    {planType === 'weekly' ? t('plan.weekly') : t('plan.monthly')}
                  </Text>
                </View>
                <Text style={styles.planIngredientCount}>
                  {localSelectedIds.length} {ingredientsCountLabel}
                </Text>
              </View>
              <SecondaryButton
                label={t('plan.regenerate')}
                onPress={() => generatePlan(localSelectedIds)}
                icon={<RefreshCw size={16} color={colors.neutral[700]} />}
                style={styles.regenerateBtn}
              />
            </View>

            <View style={styles.planList}>
              {plan.map((day) => (
                <View key={day.day}>
                  {day.isTransition && (
                    <View style={[styles.transitionBanner, { backgroundColor: stageBadgeStyles[day.stage].bg }]}>
                      <ArrowRight size={16} color={stageBadgeStyles[day.stage].text} />
                      <Text style={[styles.transitionBannerText, { color: stageBadgeStyles[day.stage].text }]}>
                        {t('plan.stageTransition')}: {t(stageConfig[day.stage].labelKey)}
                      </Text>
                    </View>
                  )}
                  <Card>
                    <View style={styles.dayHeader}>
                      <View style={[styles.dayNumberBox, { backgroundColor: stageBadgeStyles[day.stage].bg }]}>
                        <Text style={[styles.dayNumber, { color: stageBadgeStyles[day.stage].text }]}>{day.day}</Text>
                      </View>
                      <Text style={styles.dayLabel}>{formatPlanDay(lang, day.day)}</Text>
                      <View style={[styles.stagePill, styles.stagePillAuto, { backgroundColor: stageBadgeStyles[day.stage].bg }]}>
                        <Text style={[styles.stagePillText, { color: stageBadgeStyles[day.stage].text }]}>
                          {stageConfig[day.stage].badge}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.mealGrid}>
                        <View style={[styles.mealSlot, { backgroundColor: colors.amber[50] }]}>
                          <Sun size={16} color={colors.amber[500]} />
                          <View style={styles.mealSlotContent}>
                            <Text style={[styles.mealSlotLabel, { color: colors.amber[600] }]}>{t('plan.morning')}</Text>
                            <Text style={styles.mealSlotValue}>{day.morning}</Text>
                          </View>
                        </View>
                        <View style={[styles.mealSlot, { backgroundColor: day.afternoon ? colors.sky[50] : colors.neutral[50] }]}>
                          <Cloud size={16} color={day.afternoon ? colors.sky[500] : colors.neutral[300]} />
                          <View style={styles.mealSlotContent}>
                            <Text style={[styles.mealSlotLabel, { color: day.afternoon ? colors.sky[600] : colors.neutral[400] }]}>{t('plan.afternoon')}</Text>
                            <Text style={styles.mealSlotValueMuted}>{day.afternoon || '—'}</Text>
                          </View>
                        </View>
                        <View style={[styles.mealSlot, { backgroundColor: day.evening ? colors.emerald[50] : colors.neutral[50] }]}>
                          <Moon size={16} color={day.evening ? colors.emerald[600] : colors.neutral[300]} />
                          <View style={styles.mealSlotContent}>
                            <Text style={[styles.mealSlotLabel, { color: day.evening ? colors.emerald[700] : colors.neutral[400] }]}>{t('plan.evening')}</Text>
                            <Text style={styles.mealSlotValueMuted}>{day.evening || '—'}</Text>
                          </View>
                        </View>
                        <View style={[styles.mealSlot, { backgroundColor: colors.secondary[50] }]}>
                          <Coffee size={16} color={colors.secondary[500]} />
                          <View style={styles.mealSlotContent}>
                            <Text style={[styles.mealSlotLabel, { color: colors.secondary[600] }]}>{t('plan.snack')}</Text>
                            <Text style={styles.mealSlotValue}>{day.snack}</Text>
                          </View>
                        </View>
                      </View>
                  </Card>
                </View>
              ))}
            </View>

            <View style={styles.navRow}>
              <SecondaryButton
                label={t('plan.back')}
                onPress={() => setStep('ingredients')}
                icon={<ArrowLeft size={16} color={colors.neutral[700]} />}
                style={styles.navBtn}
              />
            </View>
          </>
        )}
      </ScreenScroll>

      {step === 'ingredients' && (
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarInner}>
            <View style={styles.bottomBarContent}>
              <View style={styles.bottomBarTopRow}>
                <View style={styles.bottomBarLeft}>
              <SecondaryButton
                label={t('plan.back')}
                onPress={() => setStep('type')}
                icon={<ArrowLeft size={16} color={colors.neutral[700]} />}
                style={styles.bottomBarBackBtn}
              />
              <Pressable onPress={() => setLocalSelectedIds([])} style={styles.clearAllPressable}>
                <Text style={styles.clearAllText}>{clearAllLabel}</Text>
              </Pressable>
                </View>
                {!stackGenerateBtn && (
                  <View style={styles.generateBtnInlineWrap}>
                    <PrimaryButton
                      label={generateLabel}
                      onPress={() => generatePlan(localSelectedIds)}
                      icon={<Carrot size={16} color={colors.white} />}
                      style={styles.generateBtnInline}
                    />
                  </View>
                )}
              </View>
              {stackGenerateBtn && (
                <View style={styles.generateBtnFullWrap}>
                  <PrimaryButton
                    label={generateLabel}
                    onPress={() => generatePlan(localSelectedIds)}
                    icon={<Carrot size={16} color={colors.white} />}
                    style={styles.generateBtnFull}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  header: { marginBottom: spacing.xl },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24 },
  stepIndicator: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xl },
  stepItem: { flexDirection: 'row', alignItems: 'center' },
  stepDot: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.neutral[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: { backgroundColor: colors.primary[500] },
  stepDotDone: { backgroundColor: colors.primary[100] },
  stepDotText: { fontSize: 12, fontWeight: '700', color: colors.neutral[400] },
  stepDotTextActive: { color: colors.white },
  stepDotTextDone: { color: colors.primary[600] },
  stepLine: { width: 32, height: 2, borderRadius: radius.full, backgroundColor: colors.neutral[200], marginHorizontal: spacing.sm },
  stepLineDone: { backgroundColor: colors.primary[300] ?? colors.primary[200] },
  sectionHeader: { marginBottom: spacing.md },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[700], marginBottom: spacing.xs },
  sectionDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  stageGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.lg, marginBottom: spacing.xl },
  stageGridItem: { width: '47%' },
  stageCard: { padding: spacing.lg },
  stageIconBox: { width: 40, height: 40, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  stageCardTitle: { fontSize: 14, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.xs },
  stageCardDesc: { fontSize: 12, color: colors.neutral[500], lineHeight: 18 },
  navRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.lg, marginTop: spacing.lg },
  navBtn: { flex: 1 },
  typeGrid: { gap: spacing.lg, marginBottom: spacing.xl },
  typeGridItem: { width: '100%' },
  typeCard: { padding: spacing.xl },
  typeIconBox: { width: 48, height: 48, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  typeCardTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.xs },
  typeCardDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  transitionNotice: {
    padding: spacing.lg,
    backgroundColor: colors.primary[50],
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.primary[100],
    marginBottom: spacing.lg,
  },
  transitionNoticeText: { fontSize: 14, color: colors.primary[700], lineHeight: 20 },
  ingredientsHeader: { marginBottom: spacing.lg },
  ingredientsHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.xs },
  selectedCount: { fontSize: 14, fontWeight: '600', color: colors.primary[600] },
  categoryList: { gap: spacing.xl },
  categorySection: { marginBottom: spacing.sm },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  categoryTitle: { fontSize: 16, fontWeight: '700', color: colors.neutral[700] },
  categoryBadge: { paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: radius.full },
  categoryBadgeText: { fontSize: 12, fontWeight: '600' },
  bottomBar: {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.lg,
    right: spacing.lg,
  },
  bottomBarInner: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.neutral[200],
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  bottomBarContent: { width: '100%', gap: 10 },
  bottomBarTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  bottomBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flexShrink: 1,
    flex: 1,
    minWidth: 0,
  },
  bottomBarBackBtn: { flexShrink: 0 },
  clearAllPressable: { flexShrink: 1, minWidth: 0 },
  clearAllText: {
    fontSize: 12,
    color: colors.neutral[400],
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'center',
  },
  generateBtnInlineWrap: { flexShrink: 0, maxWidth: '48%' },
  generateBtnInline: { flexShrink: 0 },
  generateBtnFullWrap: { width: '100%', alignSelf: 'stretch' },
  generateBtnFull: { width: '100%', alignSelf: 'stretch' },
  planHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.lg, gap: spacing.md },
  planHeaderBadges: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm },
  stagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  planDurationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  planDurationPillText: { fontSize: 12, fontWeight: '600' },
  stagePillAuto: { marginLeft: 'auto' },
  stagePillText: { fontSize: 12, fontWeight: '600' },
  planIngredientCount: { fontSize: 12, color: colors.neutral[400], alignSelf: 'center' },
  regenerateBtn: { flexShrink: 0, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  planList: { gap: spacing.md },
  transitionBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
  },
  transitionBannerText: { fontSize: 14, fontWeight: '600', flex: 1 },
  dayHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  dayNumberBox: { width: 40, height: 40, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  dayNumber: { fontSize: 14, fontWeight: '700' },
  dayLabel: { fontWeight: '600', color: colors.neutral[700], flex: 1 },
  mealGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginLeft: spacing.xxl + spacing.sm },
  mealSlot: { width: '47%', flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm, padding: spacing.sm, borderRadius: radius.lg },
  mealSlotContent: { flex: 1 },
  mealSlotLabel: { fontSize: 12, fontWeight: '600', marginBottom: 2 },
  mealSlotValue: { fontSize: 12, color: colors.neutral[700] },
  mealSlotValueMuted: { fontSize: 12, color: colors.neutral[600] },
});
