import { useState, useCallback, useMemo, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './components/Header';
import { IntroScreen } from './components/IntroScreen';
import { GuideScreen } from './components/GuideScreen';
import { ToolsScreen } from './components/ToolsScreen';
import { FoodTypeScreen } from './components/FoodTypeScreen';
import { IngredientsScreen } from './components/IngredientsScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { MealPlanScreen } from './components/MealPlanScreen';
import { AllergyScreen } from './components/AllergyScreen';
import { BooksAndArticlesScreen } from './components/BooksAndArticlesScreen';
import { SubscriptionScreen } from './components/SubscriptionScreen';
import { ScreenTransition } from './components/ui/primitives';
import { useAppData } from './hooks/useAppData';
import { useAppNavigation } from './hooks/useAppNavigation';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { getRegionalFoodTypes, isValidFoodTypeForCountry } from './lib/foodTypeRegion';
import { isVegetarianFoodTypeId, sanitizeSelectedIngredientIds } from './lib/vegetarianIngredients';
import { colors, spacing, radius } from './theme';
import type { GuideAnswer } from './types';

function AppContent() {
  const { t, isSubscribed, country } = useLanguage();
  const { questions, tools, ingredients, loading, error } = useAppData();
  const regionalFoodTypes = useMemo(() => getRegionalFoodTypes(country?.code), [country?.code]);
  const { step, direction, navigate } = useAppNavigation('intro');
  const [guideAnswers, setGuideAnswers] = useState<GuideAnswer[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedFoodType, setSelectedFoodType] = useState<string | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (selectedFoodType && !isValidFoodTypeForCountry(selectedFoodType, country?.code)) {
      setSelectedFoodType(null);
    }
  }, [country?.code, selectedFoodType]);

  useEffect(() => {
    if (!selectedFoodType || !isVegetarianFoodTypeId(selectedFoodType)) return;
    setSelectedIngredients((prev) => sanitizeSelectedIngredientIds(prev, ingredients, true));
  }, [selectedFoodType, ingredients]);

  const handleGuideComplete = useCallback((answers: GuideAnswer[]) => {
    setGuideAnswers(answers);
    navigate('tools');
  }, [navigate]);

  const handleToggleTool = useCallback((toolId: string) => {
    setSelectedTools((prev) =>
      prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]
    );
  }, []);

  const handleToggleIngredient = useCallback((ingredientId: string) => {
    setSelectedIngredients((prev) => {
      const next = prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId];
      return selectedFoodType && isVegetarianFoodTypeId(selectedFoodType)
        ? sanitizeSelectedIngredientIds(next, ingredients, true)
        : next;
    });
  }, [ingredients, selectedFoodType]);

  const handleRestart = useCallback(() => {
    setGuideAnswers([]);
    setSelectedTools([]);
    setSelectedFoodType(null);
    setSelectedIngredients([]);
    navigate('intro');
  }, [navigate]);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary[500]} />
        <Text style={styles.loadingText}>{t('common.loading')}</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centered}>
        <View style={styles.errorIcon}>
          <Text style={styles.errorIconText}>!</Text>
        </View>
        <Text style={styles.errorTitle}>{t('common.error')}</Text>
        <Text style={styles.errorMessage}>{error}</Text>
      </SafeAreaView>
    );
  }

  const renderScreen = () => {
    switch (step) {
      case 'intro':
        return <IntroScreen onStart={() => navigate('guide')} />;
      case 'guide':
        return (
          <GuideScreen
            questions={questions}
            onComplete={handleGuideComplete}
            onBack={() => navigate('intro')}
          />
        );
      case 'tools':
        return (
          <ToolsScreen
            tools={tools}
            guideAnswers={guideAnswers}
            selectedTools={selectedTools}
            onToggleTool={handleToggleTool}
            onComplete={() => navigate('foodType')}
            onBack={() => navigate('guide')}
          />
        );
      case 'foodType':
        return (
          <FoodTypeScreen
            foodTypes={regionalFoodTypes}
            selectedFoodType={selectedFoodType}
            onSelect={setSelectedFoodType}
            onComplete={() => navigate('ingredients')}
            onBack={() => navigate('tools')}
          />
        );
      case 'ingredients':
        return (
          <IngredientsScreen
            ingredients={ingredients}
            foodTypes={regionalFoodTypes}
            selectedFoodType={selectedFoodType}
            selectedIngredients={selectedIngredients}
            onToggle={handleToggleIngredient}
            onComplete={() => navigate('summary')}
            onBack={() => navigate('foodType')}
          />
        );
      case 'summary':
        return (
          <SummaryScreen
            guideAnswers={guideAnswers}
            questions={questions}
            tools={tools}
            foodTypes={regionalFoodTypes}
            ingredients={ingredients}
            selectedTools={selectedTools}
            selectedFoodType={selectedFoodType}
            selectedIngredients={selectedIngredients}
            onRestart={handleRestart}
            onGoToPlan={() => navigate(isSubscribed ? 'plan' : 'subscription')}
            onGoToAllergy={() => navigate('allergy')}
            onGoToBooks={() => navigate('books')}
          />
        );
      case 'subscription':
        return (
          <SubscriptionScreen
            onBack={() => navigate('summary')}
            onSubscribed={() => navigate('plan')}
          />
        );
      case 'plan':
        return (
          <MealPlanScreen
            ingredients={ingredients}
            foodTypes={regionalFoodTypes}
            selectedFoodType={selectedFoodType}
            selectedIngredients={selectedIngredients}
            onBack={() => navigate('summary')}
          />
        );
      case 'allergy':
        return (
          <AllergyScreen
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            onBack={() => navigate('summary')}
          />
        );
      case 'books':
        return (
          <BooksAndArticlesScreen
            onBack={() => navigate('summary')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
      <Header currentStep={step} />

      <View style={styles.main}>
        <ScreenTransition screenKey={step} direction={direction}>
          {renderScreen()}
        </ScreenTransition>
      </View>

      <Text style={styles.footer}>{t('app.footer')}</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.neutral[50] },
  main: { flex: 1, overflow: 'hidden' },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.neutral[50],
    paddingHorizontal: spacing.lg,
  },
  loadingText: { marginTop: spacing.lg, color: colors.neutral[500], fontWeight: '600' },
  errorIcon: {
    width: 64,
    height: 64,
    backgroundColor: colors.error[50],
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  errorIconText: { fontSize: 24, fontWeight: '700', color: colors.error[500] },
  errorTitle: { fontSize: 20, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.sm },
  errorMessage: { color: colors.neutral[500], textAlign: 'center' },
  footer: {
    paddingVertical: spacing.lg,
    textAlign: 'center',
    fontSize: 11,
    color: colors.neutral[400],
  },
});
