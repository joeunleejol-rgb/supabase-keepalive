import { useMemo } from 'react';
import { BookOpen, ArrowLeft, ExternalLink, FileText, Award } from 'lucide-react-native';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';
import { getRecommendedBooks, getRecommendedArticles, type RecommendedBookEntry } from '../data/recommendedData';
import { pickLocalizedCopy } from '../lib/recommendedContent';
import { openBookProductLink, openExternalLink } from '../lib/storeLinking';
import { SecondaryButton, PressableCard, ScreenScroll } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = { onBack: () => void };

export function BooksAndArticlesScreen({ onBack }: Props) {
  const { lang, country, t } = useLanguage();
  const marketCode = country?.code;

  const books = useMemo(() => getRecommendedBooks(marketCode), [marketCode]);
  const articles = useMemo(() => getRecommendedArticles(marketCode), [marketCode]);

  const handleOpenBook = async (book: RecommendedBookEntry) => {
    try {
      await openBookProductLink(book.productUrl, marketCode, book.kyoboSaleCmdtId);
    } catch (error) {
      console.error('[BooksAndArticles] Book link open failed:', book.id, book.productUrl, error);
    }
  };

  const handleOpenArticle = async (url: string) => {
    try {
      await openExternalLink(url);
    } catch (error) {
      console.error('[BooksAndArticles] Article link open failed:', url, error);
    }
  };

  return (
    <ScreenScroll style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <BookOpen size={16} color={colors.accent[500]} />
          <Text style={styles.badgeText}>{t('books.title')}</Text>
        </View>
        <Text style={styles.title}>{t('books.title')}</Text>
        <Text style={styles.subtitle}>{t('books.subtitle')}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Award size={20} color={colors.accent[500]} />
          <Text style={styles.sectionTitle}>{t('books.topBooks')}</Text>
        </View>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
          renderItem={({ item: book }) => (
            <PressableCard onPress={() => handleOpenBook(book)} style={styles.bookCard}>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>{book.rank}</Text>
              </View>
              <View style={[styles.coverBox, { backgroundColor: book.coverColor ?? colors.neutral[50] }]}>
                <BookOpen size={24} color={colors.neutral[400]} strokeWidth={1.5} />
              </View>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle} numberOfLines={2}>
                  {pickLocalizedCopy(lang, book.title)}
                </Text>
                <Text style={styles.bookAuthor}>
                  {t('books.by')} {pickLocalizedCopy(lang, book.author)}
                </Text>
                <Text style={styles.bookDesc} numberOfLines={2}>
                  {pickLocalizedCopy(lang, book.description)}
                </Text>
              </View>
              <View style={styles.linkIcon}>
                <ExternalLink size={16} color={colors.neutral[400]} />
              </View>
            </PressableCard>
          )}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FileText size={20} color={colors.sky[500]} />
          <Text style={styles.sectionTitle}>{t('books.articles')}</Text>
        </View>
        <FlatList
          data={articles}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item: article }) => (
            <PressableCard
              onPress={() => handleOpenArticle(article.link)}
              style={{ marginBottom: spacing.md }}
            >
              <View style={styles.articleRow}>
                <View style={styles.articleIcon}>
                  <FileText size={20} color={colors.sky[500]} strokeWidth={1.5} />
                </View>
                <View style={styles.articleInfo}>
                  <Text style={styles.articleTitle} numberOfLines={2}>
                    {pickLocalizedCopy(lang, article.title)}
                  </Text>
                  <Text style={styles.articleDesc} numberOfLines={2}>
                    {pickLocalizedCopy(lang, article.description)}
                  </Text>
                  <View style={styles.articleMeta}>
                    <Text style={styles.articleSource}>
                      {pickLocalizedCopy(lang, article.source)}
                    </Text>
                    <ExternalLink size={12} color={colors.neutral[300]} />
                  </View>
                </View>
              </View>
            </PressableCard>
          )}
        />
      </View>

      <SecondaryButton
        label={t('books.back')}
        onPress={onBack}
        icon={<ArrowLeft size={16} color={colors.neutral[700]} />}
        style={styles.backBtn}
      />
    </ScreenScroll>
  );
}

/** @deprecated Use BooksAndArticlesScreen */
export const BooksScreen = BooksAndArticlesScreen;

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  header: { marginBottom: spacing.xl },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.accent[50],
    borderRadius: radius.full,
    marginBottom: spacing.lg,
  },
  badgeText: { fontSize: 13, fontWeight: '700', color: colors.accent[600] },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24 },
  section: { marginBottom: spacing.xxl },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800] },
  bookCard: { flexDirection: 'row', gap: spacing.lg, alignItems: 'center' },
  rankBox: {
    width: 40,
    height: 40,
    borderRadius: radius.lg,
    backgroundColor: colors.accent[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankText: { color: colors.white, fontWeight: '700', fontSize: 14 },
  coverBox: {
    width: 64,
    height: 80,
    borderRadius: radius.md,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookInfo: { flex: 1 },
  bookTitle: { fontWeight: '600', color: colors.neutral[800], marginBottom: 4, fontSize: 15 },
  bookAuthor: { fontSize: 12, color: colors.neutral[400], marginBottom: spacing.sm },
  bookDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  linkIcon: {
    width: 32,
    height: 32,
    backgroundColor: colors.neutral[50],
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleRow: { flexDirection: 'row', gap: spacing.md },
  articleIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.sky[50],
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleInfo: { flex: 1 },
  articleTitle: { fontWeight: '600', color: colors.neutral[800], marginBottom: 4, fontSize: 15 },
  articleDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20, marginBottom: spacing.sm },
  articleMeta: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  articleSource: { fontSize: 12, color: colors.neutral[400] },
  backBtn: { alignSelf: 'flex-start' },
});
