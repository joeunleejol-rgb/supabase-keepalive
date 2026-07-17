import { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ArrowRight, ArrowLeft, Carrot, Info, Sparkles } from 'lucide-react-native';
import type { Ingredient, FoodType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { loc } from '../lib/i18n';
import { getVegetarianVisibleIngredients, isVegetarianFoodType, sanitizeSelectedIngredientIds } from '../lib/vegetarianIngredients';
import { PrimaryButton, SecondaryButton, ScreenScroll, SectionBadge } from './ui/primitives';
import { IngredientGrid, IngredientGridCard } from './IngredientGridCard';
import { colors, spacing, radius } from '../theme';

type Props = {
  ingredients: Ingredient[];
  foodTypes: FoodType[];
  selectedFoodType: string | null;
  selectedIngredients: string[];
  onToggle: (ingredientId: string) => void;
  onComplete: () => void;
  onBack: () => void;
};

const categoryConfig = {
  grain: { label: { ko: '곡류', en: 'Grains', de: 'Getreide', fr: 'Céréales', it: 'Cereali' }, color: 'amber' },
  vegetable: { label: { ko: '채소', en: 'Vegetables', de: 'Gemüse', fr: 'Légumes', it: 'Verdure' }, color: 'green' },
  fruit: { label: { ko: '과일', en: 'Fruits', de: 'Obst', fr: 'Fruits', it: 'Frutta' }, color: 'rose' },
  protein: { label: { ko: '단백질', en: 'Protein', de: 'Eiweiß', fr: 'Protéines', it: 'Proteine' }, color: 'sky' },
  etc: { label: { ko: '기타', en: 'Other', de: 'Sonstiges', fr: 'Autres', it: 'Altro' }, color: 'neutral' },
} as const;

type ColorKey = 'amber' | 'green' | 'rose' | 'sky' | 'neutral';
const colorMap: Record<ColorKey, { bg: string; text: string; border: string }> = {
  amber: { bg: colors.amber[50], text: colors.amber[600], border: colors.amber[100] },
  green: { bg: colors.green[50], text: colors.green[600], border: colors.green[100] },
  rose: { bg: colors.rose[50], text: colors.rose[600], border: colors.rose[100] },
  sky: { bg: colors.sky[50], text: colors.sky[600], border: colors.sky[100] },
  neutral: { bg: colors.neutral[50], text: colors.neutral[600], border: colors.neutral[200] },
};

export function IngredientsScreen({
  ingredients,
  foodTypes,
  selectedFoodType,
  selectedIngredients,
  onToggle,
  onComplete,
  onBack,
}: Props) {
  const { lang, country, t } = useLanguage();
  const selectedFoodTypeObj = foodTypes.find((ft) => ft.id === selectedFoodType);
  const isVegetarianPlan = isVegetarianFoodType(selectedFoodTypeObj);

  const visibleIngredients = useMemo(
    () => getVegetarianVisibleIngredients(ingredients, isVegetarianPlan),
    [ingredients, isVegetarianPlan],
  );

  const safeSelectedCount = useMemo(
    () => sanitizeSelectedIngredientIds(selectedIngredients, ingredients, isVegetarianPlan).length,
    [selectedIngredients, ingredients, isVegetarianPlan],
  );

  const grouped = visibleIngredients.reduce((acc, ing) => {
    if (!acc[ing.category]) acc[ing.category] = [];
    acc[ing.category].push(ing);
    return acc;
  }, {} as Record<string, Ingredient[]>);
  Object.keys(grouped).forEach((cat) => grouped[cat].sort((a, b) => a.recommended_month - b.recommended_month));
  const categoryOrder: (keyof typeof categoryConfig)[] = country?.code === 'DE' || country?.code === 'FR'
    ? ['vegetable', 'grain', 'protein', 'fruit', 'etc'] : ['grain', 'vegetable', 'fruit', 'protein', 'etc'];
  const getIngredientName = (ing: Ingredient) => loc(lang, ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it);
  const monthSuffix = lang === 'ko' ? '개월+' : lang === 'de' ? 'Mo+' : lang === 'fr' ? 'mois+' : lang === 'it' ? 'mes+' : 'mo+';
  const getCatLabel = (cat: keyof typeof categoryConfig) => (categoryConfig[cat].label as Record<string, string>)[lang] ?? categoryConfig[cat].label.en;
  const getColors = (key: string) => colorMap[(key as ColorKey)] ?? colorMap.neutral;

  return (
    <ScreenScroll style={styles.container}>
      <SectionBadge label={t('nav.ingredients')} bg={colors.secondary[50]} textColor={colors.secondary[600]} icon={<Carrot size={16} color={colors.secondary[500]} />} />
      <Text style={styles.title}>{t('ingredients.title')}</Text>
      <Text style={styles.subtitle}>{t('ingredients.subtitle')}</Text>
      <View style={styles.tipBoxSky}><Info size={16} color={colors.sky[500]} /><Text style={styles.tipSky}>{t('ingredients.allergyTip')}</Text></View>
      <View style={styles.tipBoxAmber}><Sparkles size={16} color={colors.amber[500]} /><Text style={styles.tipAmber}>{t('ingredients.starterTip')}</Text></View>
      {categoryOrder.map((cat) => {
        const catIngredients = grouped[cat];
        if (!catIngredients?.length) return null;
        const config = categoryConfig[cat];
        const colors_ = getColors(config.color);
        return (
          <View key={cat} style={styles.category}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{getCatLabel(cat)}</Text>
              <View style={[styles.countBadge, { backgroundColor: colors_.bg }]}><Text style={[styles.countBadgeText, { color: colors_.text }]}>{catIngredients.length}</Text></View>
            </View>
            <IngredientGrid>
              {catIngredients.map((ing) => {
                const isSelected = selectedIngredients.includes(ing.id);
                const ingColors = getColors(ing.color_theme ?? config.color);
                return (
                  <IngredientGridCard
                    key={ing.id}
                    ingredient={ing}
                    name={getIngredientName(ing)}
                    monthSuffix={monthSuffix}
                    isSelected={isSelected}
                    isStarter={!!ing.is_starter_recommended}
                    iconColors={ingColors}
                    onPress={() => onToggle(ing.id)}
                  />
                );
              })}
            </IngredientGrid>
          </View>
        );
      })}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.actionsScroll}
        contentContainerStyle={styles.actionsScrollContent}
      >
        <View style={styles.actionsItem}>
          <SecondaryButton label={t('common.back')} onPress={onBack} icon={<ArrowLeft size={16} color={colors.neutral[700]} />} style={styles.actionBtn} />
        </View>
        {safeSelectedCount > 0 && (
          <Text style={[styles.selectedCount, styles.actionsItem]}>{safeSelectedCount} {t('ingredients.selected')}</Text>
        )}
        <View style={styles.actionsItem}>
          <PrimaryButton label={t('ingredients.result')} onPress={onComplete} icon={<ArrowRight size={16} color={colors.white} />} style={styles.actionBtn} />
        </View>
      </ScrollView>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.lg },
  tipBoxSky: { flexDirection: 'row', gap: spacing.sm, padding: spacing.md, backgroundColor: colors.sky[50], borderRadius: radius.lg, marginBottom: spacing.md, alignItems: 'flex-start' },
  tipSky: { flex: 1, fontSize: 12, color: colors.sky[600], lineHeight: 18 },
  tipBoxAmber: { flexDirection: 'row', gap: spacing.sm, padding: spacing.md, backgroundColor: colors.amber[50], borderRadius: radius.lg, marginBottom: spacing.xl, alignItems: 'flex-start' },
  tipAmber: { flex: 1, fontSize: 12, color: colors.amber[700], lineHeight: 18 },
  category: { marginBottom: spacing.xl },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.lg },
  categoryTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800] },
  countBadge: { paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: radius.full },
  countBadgeText: { fontSize: 11, fontWeight: '600' },
  actionsScroll: { marginHorizontal: -spacing.lg, marginTop: spacing.lg },
  actionsScrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  actionsItem: { flexShrink: 0 },
  actionBtn: { flexShrink: 0 },
  selectedCount: { fontSize: 14, color: colors.neutral[500], fontWeight: '600' },
});
