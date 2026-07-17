import { View, Text, StyleSheet } from 'react-native';
import { Baby, Utensils, Heart, ArrowRight, Soup } from 'lucide-react-native';
import { useLanguage } from '../contexts/LanguageContext';
import { PrimaryButton, Card, ScreenScroll, FadeInUp } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = { onStart: () => void };

export function IntroScreen({ onStart }: Props) {
  const { t, country } = useLanguage();
  const isKorea = country?.code === 'KR';

  return (
    <ScreenScroll style={styles.container}>
      <View style={styles.hero}>
        <FadeInUp delay={0}>
          <View style={styles.iconCircle}>
            <Baby size={48} color={colors.primary[500]} strokeWidth={1.5} />
          </View>
        </FadeInUp>
        <FadeInUp delay={80}>
          <Text style={styles.heading}>
            {t('intro.title1')}{'\n'}
            <Text style={styles.headingAccent}>{t('intro.title2')}</Text>
          </Text>
        </FadeInUp>
        <FadeInUp delay={160}>
          <Text style={styles.subtitle}>{t('intro.subtitle')}</Text>
        </FadeInUp>
        <View style={styles.cards}>
          <FadeInUp delay={240}>
            <Card style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: colors.primary[50] }]}>
                <Heart size={24} color={colors.primary[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('intro.guide')}</Text>
              <Text style={styles.featureDesc}>{t('intro.guideDesc')}</Text>
            </Card>
          </FadeInUp>
          <FadeInUp delay={320}>
            <Card style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: colors.secondary[50] }]}>
                <Utensils size={24} color={colors.secondary[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('intro.tools')}</Text>
              <Text style={styles.featureDesc}>{t('intro.toolsDesc')}</Text>
            </Card>
          </FadeInUp>
          <FadeInUp delay={400}>
            <Card style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: colors.accent[50] }]}>
                <Soup size={24} color={colors.accent[500]} strokeWidth={1.5} />
              </View>
              <Text style={styles.featureTitle}>{t('intro.custom')}</Text>
              <Text style={styles.featureDesc}>{t(isKorea ? 'intro.customDescKR' : 'intro.customDescEU')}</Text>
            </Card>
          </FadeInUp>
        </View>
        <FadeInUp delay={480}>
          <PrimaryButton label={t('intro.start')} onPress={onStart} icon={<ArrowRight size={20} color={colors.white} />} style={styles.startBtn} />
        </FadeInUp>
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', minHeight: '100%' },
  hero: { maxWidth: 640, width: '100%', alignItems: 'center' },
  iconCircle: { width: 96, height: 96, backgroundColor: colors.primary[100], borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.xl },
  heading: { fontSize: 32, fontWeight: '700', color: colors.neutral[800], textAlign: 'center', marginBottom: spacing.lg, lineHeight: 40 },
  headingAccent: { color: colors.primary[500] },
  subtitle: { fontSize: 17, color: colors.neutral[500], textAlign: 'center', marginBottom: spacing.xxl, lineHeight: 26 },
  cards: { width: '100%', gap: spacing.lg, marginBottom: spacing.xxl },
  featureCard: { width: '100%' },
  featureIcon: { width: 48, height: 48, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  featureTitle: { fontWeight: '600', color: colors.neutral[800], marginBottom: spacing.sm, fontSize: 16 },
  featureDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 22 },
  startBtn: { paddingHorizontal: 40, paddingVertical: spacing.lg },
});
