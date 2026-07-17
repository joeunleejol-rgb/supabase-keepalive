import { useMemo, useState } from 'react';
import { View, Text, Pressable, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  Check, RotateCcw, Baby, Utensils, Soup, Carrot, Sparkles, Download,
  Calendar, ClipboardList, BookOpen, X, Mail, Lock, UserPlus, LogIn, LogOut, Crown,
} from 'lucide-react-native';
import { Image } from 'expo-image';
import type { GuideAnswer, Tool, FoodType, Ingredient } from '../types';
import { getIcon } from '../lib/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { loc } from '../lib/i18n';
import {
  getVegetarianVisibleIngredients,
  isVegetarianFoodType,
  sanitizeSelectedIngredientIds,
} from '../lib/vegetarianIngredients';
import { PrimaryButton, SecondaryButton, Card, PressableCard, ScreenScroll, AppModal, AppTextInput, ProgressBar, PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = {
  guideAnswers: GuideAnswer[];
  questions: { id: string; question: string; question_en?: string | null; question_de?: string | null; question_fr?: string | null; question_it?: string | null; category: string }[];
  tools: Tool[];
  foodTypes: FoodType[];
  ingredients: Ingredient[];
  selectedTools: string[];
  selectedFoodType: string | null;
  selectedIngredients: string[];
  onRestart: () => void;
  onGoToPlan: () => void;
  onGoToAllergy: () => void;
  onGoToBooks: () => void;
};

export function SummaryScreen(props: Props) {
  const {
    guideAnswers, questions, tools, foodTypes, ingredients,
    selectedTools, selectedFoodType, selectedIngredients,
    onRestart, onGoToPlan, onGoToAllergy, onGoToBooks,
  } = props;
  const { t, lang, isAuthed, isSubscribed, session, signUp, signIn, signOut } = useLanguage();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [babyName, setBabyName] = useState('');
  const [babyAge, setBabyAge] = useState<number | ''>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const readyCount = guideAnswers.filter((a) => a.answer).length;
  const readinessPercent = Math.round((readyCount / guideAnswers.length) * 100);
  const selectedToolObjects = tools.filter((tl) => selectedTools.includes(tl.id));
  const selectedFoodTypeObj = foodTypes.find((ft) => ft.id === selectedFoodType);
  const isVegetarianPlan = isVegetarianFoodType(selectedFoodTypeObj);

  const safeSelectedIngredientIds = useMemo(
    () => sanitizeSelectedIngredientIds(selectedIngredients, ingredients, isVegetarianPlan),
    [selectedIngredients, ingredients, isVegetarianPlan],
  );

  const selectedIngredientObjects = useMemo(() => {
    const visible = getVegetarianVisibleIngredients(ingredients, isVegetarianPlan);
    return visible.filter((ing) => safeSelectedIngredientIds.includes(ing.id));
  }, [ingredients, isVegetarianPlan, safeSelectedIngredientIds]);
  const reserveBadgeSlot = !isAuthed || !isSubscribed;

  const handlePrint = () => Alert.alert(t('summary.print'), t('summary.subtitle'));

  const handleAuth = async () => {
    setAuthError(null);
    if (!email.trim()) { setAuthError(t('auth.emptyEmail')); return; }
    if (!password.trim()) { setAuthError(t('auth.emptyPassword')); return; }
    if (authMode === 'signup' && !babyName.trim()) { setAuthError(t('auth.babyName')); return; }
    if (authMode === 'signup' && babyAge === '') { setAuthError(t('auth.babyAge')); return; }
    setAuthLoading(true);
    const { error } = authMode === 'signup'
      ? await signUp(email, password, babyName.trim(), Number(babyAge))
      : await signIn(email, password);
    setAuthLoading(false);
    if (error) setAuthError(error);
    else { setShowAuthModal(false); setEmail(''); setPassword(''); setBabyName(''); setBabyAge(''); setAuthError(null); }
  };

  const handleFeatureClick = (callback: () => void, requiresAuth: boolean, requiresSubscription = false) => {
    if (requiresAuth && !isAuthed) { setAuthMode('signup'); setShowAuthModal(true); }
    else if (requiresSubscription && !isSubscribed) callback();
    else callback();
  };

  const ageLabel = (age: number) => `${age}${lang === 'ko' ? '개월' : lang === 'de' ? ' Mo.' : lang === 'fr' ? ' mois' : lang === 'it' ? ' mesi' : ' months'}`;

  return (
    <>
      <ScreenScroll style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.heroIcon}><Sparkles size={40} color={colors.white} strokeWidth={1.5} /></View>
          <Text style={styles.heroTitle}>{t('summary.title')}</Text>
          <Text style={styles.heroSubtitle}>{t('summary.subtitle')}</Text>
        </View>
        <Card style={styles.section}>
          <View style={styles.sectionHeader}><View style={styles.sectionIconPrimary}><Baby size={20} color={colors.primary[500]} strokeWidth={1.5} /></View><Text style={styles.sectionTitle}>{t('summary.readiness')}</Text></View>
          <View style={styles.progressRow}><View style={{ flex: 1 }}><ProgressBar percent={readinessPercent} /></View><Text style={styles.percent}>{readinessPercent}%</Text></View>
          <Text style={styles.hint}>{readyCount}/{guideAnswers.length} {t('summary.readyCount')}</Text>
          {guideAnswers.map((answer) => {
            const question = questions.find((q) => q.id === answer.questionId);
            if (!question) return null;
            return (
              <View key={answer.questionId} style={styles.answerRow}>
                <View style={[styles.answerDot, answer.answer ? styles.answerDotYes : styles.answerDotNo]}><Check size={12} color={answer.answer ? colors.secondary[600] : colors.neutral[400]} strokeWidth={3} /></View>
                <Text style={[styles.answerText, !answer.answer && styles.answerTextNo]}>{loc(lang, question.question, question.question_en, question.question_de, question.question_fr, question.question_it)}</Text>
              </View>
            );
          })}
        </Card>
        <Card style={styles.section}>
          <View style={styles.sectionHeader}><View style={[styles.sectionIconPrimary, { backgroundColor: colors.secondary[50] }]}><Utensils size={20} color={colors.secondary[500]} strokeWidth={1.5} /></View><Text style={styles.sectionTitle}>{t('summary.tools')}</Text><Text style={styles.count}>{selectedToolObjects.length}</Text></View>
          {selectedToolObjects.length > 0 ? selectedToolObjects.map((tool) => {
            const Icon = getIcon(tool.icon_name);
            return (
              <View key={tool.id} style={styles.toolRow}>
                <View style={styles.toolThumb}>{tool.image_url ? <Image source={{ uri: tool.image_url }} style={styles.toolImage} contentFit="cover" /> : <Icon size={20} color={colors.neutral[400]} strokeWidth={1.5} />}</View>
                <Text style={styles.toolName}>{loc(lang, tool.name, tool.name_en, tool.name_de, tool.name_fr, tool.name_it)}</Text>
              </View>
            );
          }) : <Text style={styles.empty}>{t('summary.noTools')}</Text>}
        </Card>
        <Card style={styles.section}>
          <View style={styles.sectionHeader}><View style={[styles.sectionIconPrimary, { backgroundColor: colors.accent[50] }]}><Soup size={20} color={colors.accent[500]} strokeWidth={1.5} /></View><Text style={styles.sectionTitle}>{t('summary.foodType')}</Text></View>
          {selectedFoodTypeObj ? (
            <View style={styles.foodTypeBox}>
              <Text style={styles.foodTypeName}>{loc(lang, selectedFoodTypeObj.name, selectedFoodTypeObj.name_en, selectedFoodTypeObj.name_de, selectedFoodTypeObj.name_fr, selectedFoodTypeObj.name_it)}</Text>
              <Text style={styles.foodTypeDesc}>{loc(lang, selectedFoodTypeObj.description ?? '', selectedFoodTypeObj.description_en, selectedFoodTypeObj.description_de, selectedFoodTypeObj.description_fr, selectedFoodTypeObj.description_it)}</Text>
            </View>
          ) : <Text style={styles.empty}>{t('summary.noFoodType')}</Text>}
        </Card>
        <Card style={styles.section}>
          <View style={styles.sectionHeader}><View style={[styles.sectionIconPrimary, { backgroundColor: colors.rose[50] }]}><Carrot size={20} color={colors.rose[500]} strokeWidth={1.5} /></View><Text style={styles.sectionTitle}>{t('summary.ingredients')}</Text><Text style={styles.count}>{selectedIngredientObjects.length}</Text></View>
          {selectedIngredientObjects.length > 0 ? (
            <View style={styles.ingredientTags}>
              {selectedIngredientObjects.map((ing) => {
                const Icon = getIcon(ing.icon_name);
                return (
                  <View key={ing.id} style={styles.ingredientTag}>
                    <Icon size={16} color={colors.neutral[500]} strokeWidth={1.5} />
                    <Text style={styles.ingredientTagName}>{loc(lang, ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it)}</Text>
                    <Text style={styles.ingredientTagMonth}>{ing.recommended_month}mo+</Text>
                  </View>
                );
              })}
            </View>
          ) : <Text style={styles.empty}>{t('summary.noIngredients')}</Text>}
        </Card>
        {!isAuthed && (
          <Card style={styles.signupCard}>
            <View style={styles.signupRow}>
              <View style={styles.signupIcon}><UserPlus size={20} color={colors.primary[500]} strokeWidth={1.5} /></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.signupTitle}>{t('auth.signupCta')}</Text>
                <Text style={styles.signupDesc}>{t('auth.signupDesc')}</Text>
                <PressableScale
                  onPress={() => { setAuthMode('signup'); setShowAuthModal(true); }}
                  scaleDown={0.94}
                  accessibilityRole="button"
                  style={styles.signupBtn}
                >
                  <UserPlus size={16} color={colors.white} strokeWidth={2} />
                  <View style={styles.signupBtnSpacer} />
                  <Text style={styles.signupBtnText}>{t('auth.signup')}</Text>
                </PressableScale>
              </View>
            </View>
          </Card>
        )}
        {isAuthed && session && (
          <Card style={styles.sessionCard}>
            <View style={styles.sessionRow}><View style={styles.sessionIcon}><Check size={16} color={colors.secondary[600]} strokeWidth={2.5} /></View><Text style={styles.sessionText}>{t('auth.welcome')}, {session.user.email}</Text></View>
            <PressableScale onPress={() => signOut()} scaleDown={0.97} style={styles.signOutBtn}>
              <LogOut size={16} color={colors.neutral[400]} /><Text style={styles.signOutText}>{t('auth.signout')}</Text>
            </PressableScale>
          </Card>
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featureScroll}
          contentContainerStyle={styles.featureScrollContent}
        >
          <PressableCard onPress={() => handleFeatureClick(onGoToPlan, true, true)} style={[styles.featureCard, !isAuthed && { opacity: 0.9 }]}>
            <View style={styles.featureCardBody}>
              <View style={[styles.featureBadgeSlot, !reserveBadgeSlot && styles.featureBadgeSlotCollapsed]}>
                {!isAuthed && (
                  <View style={styles.lockBadge}>
                    <Lock size={12} color={colors.neutral[400]} />
                    <Text style={styles.lockText} numberOfLines={2} ellipsizeMode="tail">{t('summary.lockedFeature')}</Text>
                  </View>
                )}
                {isAuthed && !isSubscribed && (
                  <View style={styles.crownBadge}>
                    <Crown size={12} color={colors.accent[600]} />
                    <Text style={styles.crownText} numberOfLines={2} ellipsizeMode="tail">{t('sub.viewPlans')}</Text>
                  </View>
                )}
              </View>
              <View style={[styles.featureIcon, { backgroundColor: colors.primary[50] }]}>
                <Calendar size={20} color={colors.primary[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('summary.viewPlan')}</Text>
            </View>
          </PressableCard>
          <PressableCard onPress={() => handleFeatureClick(onGoToAllergy, true)} style={[styles.featureCard, !isAuthed && { opacity: 0.9 }]}>
            <View style={styles.featureCardBody}>
              <View style={[styles.featureBadgeSlot, !reserveBadgeSlot && styles.featureBadgeSlotCollapsed]}>
                {!isAuthed && (
                  <View style={styles.lockBadge}>
                    <Lock size={12} color={colors.neutral[400]} />
                    <Text style={styles.lockText} numberOfLines={2} ellipsizeMode="tail">{t('summary.lockedFeature')}</Text>
                  </View>
                )}
              </View>
              <View style={[styles.featureIcon, { backgroundColor: colors.rose[50] }]}>
                <ClipboardList size={20} color={colors.rose[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('summary.viewAllergy')}</Text>
            </View>
          </PressableCard>
          <PressableCard onPress={() => handleFeatureClick(onGoToBooks, false)} style={styles.featureCard}>
            <View style={styles.featureCardBody}>
              <View style={[styles.featureBadgeSlot, !reserveBadgeSlot && styles.featureBadgeSlotCollapsed]} />
              <View style={[styles.featureIcon, { backgroundColor: colors.accent[50] }]}>
                <BookOpen size={20} color={colors.accent[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('summary.viewBooks')}</Text>
            </View>
          </PressableCard>
        </ScrollView>
        <View style={styles.bottomActions}>
          <SecondaryButton label={t('summary.print')} onPress={handlePrint} icon={<Download size={16} color={colors.neutral[700]} />} style={styles.bottomActionBtn} />
          <PrimaryButton label={t('summary.restart')} onPress={onRestart} icon={<RotateCcw size={16} color={colors.white} />} style={styles.bottomActionBtn} />
        </View>
      </ScreenScroll>
      <AppModal visible={showAuthModal} onClose={() => setShowAuthModal(false)}>
        <ScrollView contentContainerStyle={styles.authModal}>
          <Pressable onPress={() => setShowAuthModal(false)} style={styles.modalClose}><X size={16} color={colors.neutral[500]} /></Pressable>
          <View style={styles.authIcon}>{authMode === 'signup' ? <UserPlus size={24} color={colors.primary[500]} /> : <LogIn size={24} color={colors.primary[500]} />}</View>
          <Text style={styles.authTitle}>{authMode === 'signup' ? t('auth.signupTitle') : t('auth.signin')}</Text>
          <Text style={styles.authSubtitle}>{t('auth.signupSubtitle')}</Text>
          <Text style={styles.fieldLabel}>{t('auth.email')}</Text>
          <View style={styles.inputWrap}><Mail size={16} color={colors.neutral[400]} style={styles.inputIcon} /><AppTextInput value={email} onChangeText={setEmail} placeholder="email@example.com" keyboardType="email-address" autoCapitalize="none" style={styles.inputWithIcon} /></View>
          <Text style={styles.fieldLabel}>{t('auth.password')}</Text>
          <View style={styles.inputWrap}><Lock size={16} color={colors.neutral[400]} style={styles.inputIcon} /><AppTextInput value={password} onChangeText={setPassword} placeholder="••••••••" secureTextEntry style={styles.inputWithIcon} /></View>
          {authError && <View style={styles.errorBox}><Text style={styles.errorText}>{authError}</Text></View>}
          {authMode === 'signup' && (
            <>
              <Text style={styles.fieldLabel}>{t('auth.babyName')}</Text>
              <View style={styles.inputWrap}><Baby size={16} color={colors.neutral[400]} style={styles.inputIcon} /><AppTextInput value={babyName} onChangeText={setBabyName} placeholder={t('auth.babyNamePlaceholder')} style={styles.inputWithIcon} /></View>
              <Text style={styles.fieldLabel}>{t('auth.babyAge')}</Text>
              <View style={styles.pickerWrap}>
                <Picker selectedValue={babyAge === '' ? '' : String(babyAge)} onValueChange={(v) => setBabyAge(v ? Number(v) : '')}>
                  <Picker.Item label={t('auth.selectAge')} value="" />
                  {Array.from({ length: 24 }, (_, i) => i + 4).map((age) => <Picker.Item key={age} label={ageLabel(age)} value={String(age)} />)}
                </Picker>
              </View>
            </>
          )}
          <PrimaryButton label={authMode === 'signup' ? t('auth.signup') : t('auth.signin')} onPress={handleAuth} loading={authLoading} icon={!authLoading ? (authMode === 'signup' ? <UserPlus size={16} color={colors.white} /> : <LogIn size={16} color={colors.white} />) : undefined} style={styles.authSubmit} />
          <Pressable onPress={() => { setAuthMode(authMode === 'signup' ? 'signin' : 'signup'); setAuthError(null); }} style={styles.authToggle}><Text style={styles.authToggleText}>{authMode === 'signup' ? t('auth.alreadyMember') : t('auth.signupCta')}</Text></Pressable>
        </ScrollView>
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  hero: { alignItems: 'center', marginBottom: spacing.xxl },
  heroIcon: { width: 80, height: 80, borderRadius: radius.full, backgroundColor: colors.primary[500], alignItems: 'center', justifyContent: 'center', marginBottom: spacing.xl },
  heroTitle: { fontSize: 32, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md, textAlign: 'center' },
  heroSubtitle: { fontSize: 16, color: colors.neutral[500], textAlign: 'center', lineHeight: 24 },
  section: { marginBottom: spacing.lg },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg },
  sectionIconPrimary: { width: 40, height: 40, backgroundColor: colors.primary[50], borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800], flex: 1 },
  count: { fontSize: 14, color: colors.neutral[400] },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, marginBottom: spacing.md },
  percent: { fontSize: 24, fontWeight: '700', color: colors.primary[600] },
  hint: { fontSize: 14, color: colors.neutral[500], marginBottom: spacing.lg },
  answerRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm, alignItems: 'flex-start' },
  answerDot: { width: 20, height: 20, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  answerDotYes: { backgroundColor: colors.secondary[100] },
  answerDotNo: { backgroundColor: colors.neutral[100] },
  answerText: { flex: 1, fontSize: 14, color: colors.neutral[700], lineHeight: 20 },
  answerTextNo: { color: colors.neutral[400] },
  toolRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, backgroundColor: colors.neutral[50], borderRadius: radius.lg, marginBottom: spacing.sm },
  toolThumb: { width: 40, height: 40, backgroundColor: colors.white, borderRadius: radius.md, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  toolImage: { width: '100%', height: '100%' },
  toolName: { flex: 1, fontSize: 14, fontWeight: '600', color: colors.neutral[700] },
  empty: { fontSize: 14, color: colors.neutral[400] },
  foodTypeBox: { padding: spacing.lg, backgroundColor: colors.accent[50], borderRadius: radius.lg, borderWidth: 1, borderColor: colors.accent[100] },
  foodTypeName: { fontWeight: '700', color: colors.neutral[800], marginBottom: 4 },
  foodTypeDesc: { fontSize: 14, color: colors.neutral[600], lineHeight: 20 },
  ingredientTags: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  ingredientTag: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, backgroundColor: colors.neutral[50], borderRadius: radius.full },
  ingredientTagName: { fontSize: 14, fontWeight: '600', color: colors.neutral[700] },
  ingredientTagMonth: { fontSize: 12, color: colors.neutral[400] },
  signupCard: { backgroundColor: colors.primary[50], borderColor: colors.primary[100], marginBottom: 20 },
  signupRow: { flexDirection: 'row', gap: spacing.md },
  signupIcon: { width: 40, height: 40, backgroundColor: colors.primary[100], borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  signupTitle: { fontWeight: '700', color: colors.neutral[800], marginBottom: 4 },
  signupDesc: { fontSize: 14, color: colors.neutral[600], lineHeight: 20, marginBottom: spacing.md },
  signupBtn: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: 20,
    backgroundColor: colors.primary[500],
    borderRadius: radius.lg,
  },
  signupBtnSpacer: { width: 10 },
  signupBtnText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  sessionCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  sessionRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flex: 1 },
  sessionIcon: { width: 32, height: 32, backgroundColor: colors.secondary[100], borderRadius: radius.full, alignItems: 'center', justifyContent: 'center' },
  sessionText: { fontSize: 14, color: colors.neutral[600], flex: 1 },
  signOutBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  signOutText: { fontSize: 14, color: colors.neutral[400] },
  featureScroll: { marginHorizontal: -spacing.lg, marginBottom: spacing.xl },
  featureScrollContent: { paddingHorizontal: spacing.lg, gap: 12, alignItems: 'stretch' },
  featureCard: {
    width: 128,
    borderRadius: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  featureCardBody: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  featureBadgeSlot: {
    width: '100%',
    height: 52,
    marginBottom: 8,
    justifyContent: 'flex-start',
  },
  featureBadgeSlotCollapsed: {
    height: 0,
    marginBottom: 0,
  },
  lockBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
    alignSelf: 'flex-start',
    maxWidth: '100%',
    backgroundColor: colors.neutral[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  lockText: { fontSize: 11, color: colors.neutral[400], flexShrink: 1, flexGrow: 1 },
  crownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
    alignSelf: 'flex-start',
    maxWidth: '100%',
    backgroundColor: colors.accent[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  crownText: { fontSize: 11, color: colors.accent[600], flexShrink: 1, flexGrow: 1 },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  featureTitle: { fontWeight: '600', color: colors.neutral[800], fontSize: 13, flexShrink: 1 },
  bottomActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: spacing.lg },
  bottomActionBtn: { flexGrow: 1, flexBasis: '45%', minWidth: '45%', alignSelf: 'stretch' },
  authModal: { padding: spacing.xl },
  modalClose: { position: 'absolute', top: spacing.lg, right: spacing.lg, width: 32, height: 32, backgroundColor: colors.neutral[50], borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  authIcon: { width: 48, height: 48, backgroundColor: colors.primary[50], borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  authTitle: { fontSize: 20, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.sm },
  authSubtitle: { fontSize: 14, color: colors.neutral[500], lineHeight: 20, marginBottom: spacing.xl },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: colors.neutral[700], marginBottom: 6 },
  inputWrap: { position: 'relative', marginBottom: spacing.md },
  inputIcon: { position: 'absolute', left: spacing.md, top: 14, zIndex: 1 },
  inputWithIcon: { paddingLeft: 40 },
  pickerWrap: { borderWidth: 1, borderColor: colors.neutral[200], borderRadius: radius.lg, backgroundColor: colors.neutral[50], marginBottom: spacing.md, overflow: 'hidden' },
  errorBox: { padding: spacing.md, backgroundColor: colors.error[50], borderRadius: radius.lg, marginBottom: spacing.md },
  errorText: { fontSize: 14, color: colors.error[600] },
  authSubmit: { marginTop: spacing.sm },
  authToggle: { alignItems: 'center', paddingTop: spacing.md },
  authToggleText: { fontSize: 14, color: colors.primary[500], fontWeight: '600' },
});
