import { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { CreditCard, Check, ArrowLeft, Crown, Sparkles, Calendar } from 'lucide-react-native';
import { useLanguage } from '../contexts/LanguageContext';
import { PrimaryButton, SecondaryButton, PressableCard, ScreenScroll, SectionBadge } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = { onBack: () => void; onSubscribed: () => void };

export function SubscriptionScreen({ onBack, onSubscribed }: Props) {
  const { t, isSubscribed, subscribe } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    setLoading(true);
    setError(null);
    const { error: subError } = await subscribe(selectedPlan);
    setLoading(false);
    if (subError) setError(subError);
    else onSubscribed();
  };

  if (isSubscribed) {
    return (
      <ScreenScroll style={styles.subscribedContainer}>
        <View style={styles.subscribedHero}>
          <View style={styles.crownCircle}><Crown size={40} color={colors.white} strokeWidth={1.5} /></View>
          <Text style={styles.subscribedTitle}>{t('sub.subscribed')}</Text>
          <Text style={styles.subscribedDesc}>{t('sub.active')}</Text>
          <PrimaryButton label={t('summary.viewPlan')} onPress={onSubscribed} icon={<Calendar size={16} color={colors.white} />} />
        </View>
      </ScreenScroll>
    );
  }

  return (
    <ScreenScroll style={styles.container}>
      <SectionBadge label={t('sub.title')} bg={colors.primary[50]} textColor={colors.primary[600]} icon={<Crown size={16} color={colors.primary[500]} />} />
      <Text style={styles.title}>{t('sub.title')}</Text>
      <Text style={styles.subtitle}>{t('sub.subtitle')}</Text>
      <View style={styles.plans}>
        <PressableCard onPress={() => setSelectedPlan('monthly')} selected={selectedPlan === 'monthly'} style={styles.planCard}>
          {selectedPlan === 'monthly' && <View style={styles.checkBadge}><Check size={14} color={colors.white} strokeWidth={3} /></View>}
          <View style={[styles.planIcon, { backgroundColor: colors.primary[50] }]}><Calendar size={24} color={colors.primary[500]} strokeWidth={1.5} /></View>
          <Text style={styles.planTitle}>{t('sub.monthly')}</Text>
          <Text style={[styles.planPrice, { color: colors.primary[600] }]}>{t('sub.monthlyPrice')}</Text>
          <Text style={styles.planDesc}>{t('sub.monthlyDesc')}</Text>
        </PressableCard>
        <PressableCard onPress={() => setSelectedPlan('yearly')} selected={selectedPlan === 'yearly'} style={styles.planCard}>
          {selectedPlan === 'yearly' && <View style={[styles.checkBadge, { backgroundColor: colors.accent[500] }]}><Check size={14} color={colors.white} strokeWidth={3} /></View>}
          <View style={styles.discountBadge}><Sparkles size={12} color={colors.accent[600]} /><Text style={styles.discountText}>17% OFF</Text></View>
          <View style={[styles.planIcon, { backgroundColor: colors.accent[50] }]}><Crown size={24} color={colors.accent[500]} strokeWidth={1.5} /></View>
          <Text style={styles.planTitle}>{t('sub.yearly')}</Text>
          <Text style={[styles.planPrice, { color: colors.accent[600] }]}>{t('sub.yearlyPrice')}</Text>
          <Text style={styles.planDesc}>{t('sub.yearlyDesc')}</Text>
        </PressableCard>
      </View>
      {error && <View style={styles.errorBox}><Text style={styles.errorText}>{error}</Text></View>}
      <View style={styles.actions}>
        <SecondaryButton label={t('sub.back')} onPress={onBack} icon={<ArrowLeft size={16} color={colors.neutral[700]} />} />
        <PrimaryButton label={t('sub.subscribe')} onPress={handleSubscribe} disabled={!selectedPlan || loading} loading={loading} icon={!loading ? <CreditCard size={16} color={colors.white} /> : undefined} />
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 640, alignSelf: 'center', width: '100%' },
  subscribedContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  subscribedHero: { alignItems: 'center', paddingVertical: spacing.xxl },
  crownCircle: { width: 80, height: 80, borderRadius: radius.full, backgroundColor: colors.primary[500], alignItems: 'center', justifyContent: 'center', marginBottom: spacing.xl },
  subscribedTitle: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subscribedDesc: { fontSize: 16, color: colors.neutral[500], marginBottom: spacing.xl },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.xl },
  plans: { gap: spacing.lg, marginBottom: spacing.xl },
  planCard: { position: 'relative' },
  checkBadge: { position: 'absolute', top: spacing.lg, right: spacing.lg, width: 24, height: 24, borderRadius: radius.full, backgroundColor: colors.primary[500], alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  discountBadge: { position: 'absolute', top: spacing.md, right: 48, flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colors.accent[50], paddingHorizontal: spacing.sm, paddingVertical: 4, borderRadius: radius.full },
  discountText: { fontSize: 11, fontWeight: '700', color: colors.accent[600] },
  planIcon: { width: 48, height: 48, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  planTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800], marginBottom: 4 },
  planPrice: { fontSize: 28, fontWeight: '700', marginBottom: spacing.sm },
  planDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 22 },
  errorBox: { padding: spacing.md, backgroundColor: colors.error[50], borderRadius: radius.lg, marginBottom: spacing.lg },
  errorText: { fontSize: 14, color: colors.error[600] },
  actions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.lg },
});
