import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check, X, Baby, User, ClipboardList, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react-native';
import type { GuideQuestion, GuideAnswer } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { loc } from '../lib/i18n';
import { getGuideBannerTipKey, resolveGuideQuestions } from '../data/questions';
import { ScreenScroll, ProgressBar, SectionBadge, FadeInUp, PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = {
  questions: GuideQuestion[];
  onComplete: (answers: GuideAnswer[]) => void;
  onBack: () => void;
};

type GuideAnswerButtonsProps = {
  yesLabel: string;
  noLabel: string;
  onYes: () => void;
  onNo: () => void;
};

/** All 9 guide steps share this single answer row — styles stay in sync everywhere. */
function GuideAnswerButtons({ yesLabel, noLabel, onYes, onNo }: GuideAnswerButtonsProps) {
  return (
    <View style={styles.answerRow}>
      <View style={styles.answerSlot}>
        <View style={styles.answerSlotInner}>
          <PressableScale onPress={onYes} scaleDown={0.94} accessibilityRole="button">
            <View style={styles.answerCard}>
              <View style={[styles.answerIcon, styles.yesIcon]}>
                <Check size={28} color={colors.secondary[600]} strokeWidth={2.5} />
              </View>
              <Text style={styles.answerLabel}>{yesLabel}</Text>
            </View>
          </PressableScale>
        </View>
      </View>
      <View style={styles.answerSlot}>
        <View style={styles.answerSlotInner}>
          <PressableScale onPress={onNo} scaleDown={0.94} accessibilityRole="button">
            <View style={styles.answerCard}>
              <View style={[styles.answerIcon, styles.noIcon]}>
                <X size={28} color={colors.primary[600]} strokeWidth={2.5} />
              </View>
              <Text style={styles.answerLabel}>{noLabel}</Text>
            </View>
          </PressableScale>
        </View>
      </View>
    </View>
  );
}

export function GuideScreen({ questions: questionsProp, onComplete, onBack }: Props) {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const questions = resolveGuideQuestions(questionsProp);

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: boolean) => {
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (isLast) {
        onComplete(Object.entries(newAnswers).map(([questionId, ans]) => ({ questionId, answer: ans })));
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 250);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    else onBack();
  };

  if (!question) return null;

  const categoryConfig = {
    baby_ready: { label: t('guide.babyReady'), icon: Baby, bg: colors.primary[50], text: colors.primary[500] },
    mom_ready: { label: t('guide.momReady'), icon: User, bg: colors.secondary[50], text: colors.secondary[500] },
    general: { label: t('guide.general'), icon: ClipboardList, bg: colors.accent[50], text: colors.accent[500] },
  } as const;
  const config = categoryConfig[question.category];
  const Icon = config.icon;
  const bannerTipKey = getGuideBannerTipKey(question);

  return (
    <ScreenScroll style={styles.container}>
      <View style={styles.progressHeader}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>{currentIndex + 1} / {questions.length}</Text>
          <SectionBadge label={config.label} bg={config.bg} textColor={config.text} icon={<Icon size={14} color={config.text} />} />
        </View>
        <ProgressBar percent={progress} />
      </View>
      <FadeInUp screenKey={currentIndex} style={styles.content}>
        <Text style={styles.question}>{loc(lang, question.question, question.question_en, question.question_de, question.question_fr, question.question_it)}</Text>
        {question.description && (
          <Text style={styles.description}>{loc(lang, question.description, question.description_en, question.description_de, question.description_fr, question.description_it)}</Text>
        )}
        {bannerTipKey && (
          <View style={styles.tipBox}>
            <Sparkles size={16} color={colors.secondary[500]} />
            <Text style={styles.tipText}>{t(bannerTipKey)}</Text>
          </View>
        )}
        <GuideAnswerButtons
          yesLabel={t('guide.yes')}
          noLabel={t('guide.no')}
          onYes={() => handleAnswer(true)}
          onNo={() => handleAnswer(false)}
        />
      </FadeInUp>
      <View style={styles.footer}>
        <PressableScale onPress={handlePrev} scaleDown={0.97} style={styles.backLink}>
          <ArrowLeft size={16} color={colors.neutral[400]} />
          <Text style={styles.backText}>{t('guide.prev')}</Text>
        </PressableScale>
        {isLast && (
          <View style={styles.lastHint}>
            <Text style={styles.lastHintText}>{t('guide.lastQuestion')}</Text>
            <ArrowRight size={16} color={colors.neutral[400]} />
          </View>
        )}
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 640, alignSelf: 'center', width: '100%' },
  progressHeader: { marginBottom: spacing.xl },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  progressText: { fontSize: 14, fontWeight: '600', color: colors.neutral[400] },
  content: { marginBottom: spacing.xxl },
  question: { fontSize: 24, fontWeight: '700', color: colors.neutral[800], lineHeight: 34, marginBottom: spacing.lg },
  description: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.lg },
  tipBox: { flexDirection: 'row', gap: spacing.sm, padding: spacing.md, backgroundColor: colors.secondary[50], borderRadius: radius.lg, marginBottom: spacing.xl, alignItems: 'flex-start' },
  tipText: { flex: 1, fontSize: 13, color: colors.secondary[700], lineHeight: 20 },
  answerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 20,
  },
  answerSlot: {
    width: '47%',
    alignSelf: 'stretch',
  },
  answerSlotInner: {
    flex: 1,
    width: '100%',
  },
  answerCard: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    minHeight: 144,
    paddingVertical: 28,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.neutral[100],
  },
  answerIcon: { width: 56, height: 56, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center' },
  yesIcon: { backgroundColor: colors.secondary[50] },
  noIcon: { backgroundColor: colors.primary[50] },
  answerLabel: {
    fontWeight: '700',
    color: colors.neutral[700],
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    minHeight: 44,
  },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backLink: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.sm },
  backText: { fontSize: 14, color: colors.neutral[400], fontWeight: '600' },
  lastHint: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  lastHintText: { fontSize: 13, color: colors.neutral[400] },
});
