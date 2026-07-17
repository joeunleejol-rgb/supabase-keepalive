import { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Check, ArrowRight, ArrowLeft, ShoppingCart, X, ExternalLink, ShoppingBag } from 'lucide-react-native';
import { Image } from 'expo-image';
import * as ExpoLinking from 'expo-linking';
import type { Tool, GuideAnswer, ToolProductLink } from '../types';
import { getIcon } from '../lib/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { resolveToolProductLinks } from '../data/toolsCatalogData';
import { supabase } from '../lib/supabase';
import { loc } from '../lib/i18n';
import { PrimaryButton, SecondaryButton, Card, PressableCard, ScreenScroll, SectionBadge, AppModal, ProgressBar, PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = {
  tools: Tool[];
  guideAnswers: GuideAnswer[];
  selectedTools: string[];
  onToggleTool: (toolId: string) => void;
  onComplete: () => void;
  onBack: () => void;
};

export function ToolsScreen({ tools, guideAnswers, selectedTools, onToggleTool, onComplete, onBack }: Props) {
  const { t, country, lang } = useLanguage();
  const [popupTool, setPopupTool] = useState<Tool | null>(null);
  const [productLinks, setProductLinks] = useState<Record<string, ToolProductLink>>({});
  const countryCode = country?.code ?? 'KR';

  useEffect(() => {
    async function fetchProductLinks() {
      const { data, error } = await supabase.from('tool_product_links').select('*').eq('country_code', countryCode);
      const links = resolveToolProductLinks(error ? null : (data as ToolProductLink[]), countryCode);
      const map: Record<string, ToolProductLink> = {};
      links.forEach((link) => { map[link.tool_id] = link; });
      setProductLinks(map);
    }
    fetchProductLinks();
  }, [countryCode]);

  const readyCount = guideAnswers.filter((a) => a.answer).length;
  const totalCount = guideAnswers.length;
  const readinessPercent = Math.round((readyCount / totalCount) * 100);
  const grouped = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);
  const categoryConfig = {
    essential: { label: t('tools.essential'), badge: t('tools.essentialLabel'), badgeBg: colors.primary[100], badgeText: colors.primary[600] },
    recommended: { label: t('tools.recommended'), badge: t('tools.recommendedLabel'), badgeBg: colors.secondary[100], badgeText: colors.secondary[600] },
    optional: { label: t('tools.optional'), badge: t('tools.optionalLabel'), badgeBg: colors.accent[100], badgeText: colors.accent[600] },
  } as const;
  const categoryOrder: (keyof typeof categoryConfig)[] = ['essential', 'recommended', 'optional'];

  const getProductInfo = (tool: Tool) => {
    const link = productLinks[tool.id];
    if (link) return { name: link.product_name, url: link.product_link, store: link.store_name };
    const name = lang !== 'ko' && tool.product_name_en ? tool.product_name_en : tool.product_name;
    return { name, url: tool.product_link, store: countryCode === 'KR' ? 'Coupang' : countryCode === 'DE' ? 'Amazon.de' : countryCode === 'IT' ? 'Amazon.it' : countryCode === 'FR' ? 'Amazon.fr' : 'Amazon' };
  };

  const windowHeight = Dimensions.get('window').height;
  const modalMaxHeight = (windowHeight - spacing.lg * 2) * 0.85;

  return (
    <>
      <ScreenScroll style={styles.container}>
        <SectionBadge label={t('tools.title')} bg={colors.primary[50]} textColor={colors.primary[600]} icon={<ShoppingCart size={16} color={colors.primary[500]} />} />
        <Text style={styles.title}>{t('tools.title')}</Text>
        <Text style={styles.subtitle}>{t('tools.subtitle')}</Text>
        <Card style={styles.readinessCard}>
          <View style={styles.readinessHeader}>
            <Text style={styles.readinessLabel}>{t('tools.readinessScore')}</Text>
            <Text style={styles.readinessPercent}>{readinessPercent}%</Text>
          </View>
          <ProgressBar percent={readinessPercent} />
          <Text style={styles.readinessHint}>{readyCount}/{totalCount} {t('tools.readyCount')} · {readinessPercent >= 70 ? t('tools.readyHigh') : t('tools.readyLow')}</Text>
        </Card>
        {categoryOrder.map((cat) => {
          const catTools = grouped[cat];
          if (!catTools?.length) return null;
          const config = categoryConfig[cat];
          return (
            <View key={cat} style={styles.category}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{config.label}</Text>
                <View style={[styles.categoryBadge, { backgroundColor: config.badgeBg }]}>
                  <Text style={[styles.categoryBadgeText, { color: config.badgeText }]}>{config.badge}</Text>
                </View>
              </View>
              {catTools.map((tool) => {
                const Icon = getIcon(tool.icon_name);
                const isSelected = selectedTools.includes(tool.id);
                return (
                  <PressableCard key={tool.id} onPress={() => setPopupTool(tool)} selected={isSelected} style={styles.toolCard}>
                    {isSelected && <View style={styles.selectedBadge}><Check size={14} color={colors.white} strokeWidth={3} /></View>}
                    <View style={styles.toolRow}>
                      <View style={styles.toolImageBox}>
                        {tool.image_url ? <Image source={{ uri: tool.image_url }} style={styles.toolImage} contentFit="cover" /> : <Icon size={32} color={colors.neutral[400]} strokeWidth={1.5} />}
                      </View>
                      <View style={styles.toolInfo}>
                        <Text style={styles.toolName}>{loc(lang, tool.name, tool.name_en, tool.name_de, tool.name_fr, tool.name_it)}</Text>
                        <Text style={styles.toolDesc} numberOfLines={3}>{loc(lang, tool.description ?? '', tool.description_en, tool.description_de, tool.description_fr, tool.description_it)}</Text>
                      </View>
                    </View>
                  </PressableCard>
                );
              })}
            </View>
          );
        })}
        <View style={styles.actions}>
          <SecondaryButton label={t('common.back')} onPress={onBack} icon={<ArrowLeft size={16} color={colors.neutral[700]} />} />
          <View style={styles.actionsRight}>
            {selectedTools.length > 0 && <Text style={styles.selectedCount}>{selectedTools.length} {t('tools.selected')}</Text>}
            <PrimaryButton label={t('common.next')} onPress={onComplete} icon={<ArrowRight size={16} color={colors.white} />} />
          </View>
        </View>
      </ScreenScroll>
      <AppModal visible={!!popupTool} onClose={() => setPopupTool(null)}>
        {popupTool && (
          <View style={[styles.modalShell, { maxHeight: modalMaxHeight }]}>
            {/* 헤더 — ScrollView 밖 고정 */}
            <View style={styles.modalHeaderArea}>
              <Pressable onPress={() => setPopupTool(null)} style={styles.modalClose}>
                <X size={16} color={colors.neutral[500]} />
              </Pressable>
              <View style={styles.modalHeader}>
                <View style={styles.toolImageBox}>
                  {popupTool.image_url ? (
                    <Image source={{ uri: popupTool.image_url }} style={styles.toolImage} contentFit="cover" />
                  ) : (
                    (() => {
                      const Icon = getIcon(popupTool.icon_name);
                      return <Icon size={40} color={colors.neutral[400]} strokeWidth={1.5} />;
                    })()
                  )}
                </View>
                <View style={styles.modalHeaderText}>
                  <Text style={styles.modalTitle}>
                    {loc(lang, popupTool.name, popupTool.name_en, popupTool.name_de, popupTool.name_fr, popupTool.name_it)}
                  </Text>
                  <Text style={styles.modalDesc}>
                    {loc(lang, popupTool.description ?? '', popupTool.description_en, popupTool.description_de, popupTool.description_fr, popupTool.description_it)}
                  </Text>
                </View>
              </View>
            </View>

            <ScrollView
              style={styles.modalScrollArea}
              contentContainerStyle={styles.modalScrollContent}
              showsVerticalScrollIndicator
              keyboardShouldPersistTaps="handled"
              bounces={false}
            >
              {(popupTool.detail_description || popupTool.detail_description_en) && (
                <View style={[
                  styles.modalSection,
                  !getProductInfo(popupTool).name && styles.modalSectionLast,
                ]}>
                  <View style={styles.modalSectionTitle}>
                    <ShoppingBag size={16} color={colors.primary[500]} />
                    <Text style={styles.modalSectionTitleText}>{t('tools.popupDetail')}</Text>
                  </View>
                  <Text style={styles.modalSectionBody}>
                    {loc(lang, popupTool.detail_description ?? '', popupTool.detail_description_en, popupTool.detail_description_de, popupTool.detail_description_fr, popupTool.detail_description_it)}
                  </Text>
                </View>
              )}
              {(() => {
                const product = getProductInfo(popupTool);
                if (!product.name) return null;
                return (
                  <View style={[styles.modalSection, styles.modalSectionLast]}>
                    <View style={styles.modalSectionTitle}>
                      <ShoppingBag size={16} color={colors.accent[500]} />
                      <Text style={styles.modalSectionTitleText}>{t('tools.recommendedProduct')}</Text>
                    </View>
                    <View style={styles.productBox}>
                      <View style={styles.productIcon}>
                        <ShoppingBag size={24} color={colors.accent[500]} strokeWidth={1.5} />
                      </View>
                      <View style={styles.productInfo}>
                        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                        <Text style={styles.productStore}>{product.store} Bestseller</Text>
                      </View>
                      {product.url && (
                        <PressableScale onPress={() => ExpoLinking.openURL(product.url!)} scaleDown={0.96} style={styles.storeBtn}>
                          <Text style={styles.storeBtnText}>{t('tools.viewOnStore')}</Text>
                          <ExternalLink size={12} color={colors.white} />
                        </PressableScale>
                      )}
                    </View>
                  </View>
                );
              })()}
            </ScrollView>

            {/* 푸터 — ScrollView 바깥, 콘텐츠 바로 아래 */}
            <View style={styles.modalFooter}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[
                  styles.selectToolBtn,
                  selectedTools.includes(popupTool.id) && styles.selectToolBtnActive,
                ]}
                onPress={() => { onToggleTool(popupTool.id); setPopupTool(null); }}
              >
                {selectedTools.includes(popupTool.id) ? (
                  <>
                    <Check size={20} color={colors.primary[600]} strokeWidth={2.5} />
                    <Text style={styles.selectToolBtnTextActive}>{t('tools.selected_tool')}</Text>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} color={colors.white} strokeWidth={2} />
                    <Text style={styles.selectToolBtnText}>{t('tools.select')}</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.xl },
  readinessCard: { marginBottom: spacing.xl, backgroundColor: colors.primary[50], borderColor: colors.primary[100] },
  readinessHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  readinessLabel: { fontSize: 14, fontWeight: '600', color: colors.neutral[700] },
  readinessPercent: { fontSize: 24, fontWeight: '700', color: colors.primary[600] },
  readinessHint: { fontSize: 12, color: colors.neutral[500], marginTop: spacing.sm },
  category: { marginBottom: spacing.xl },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.lg },
  categoryTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800] },
  categoryBadge: { paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: radius.full },
  categoryBadgeText: { fontSize: 11, fontWeight: '700' },
  toolCard: { marginBottom: spacing.lg, position: 'relative' },
  selectedBadge: { position: 'absolute', top: spacing.lg, right: spacing.lg, width: 24, height: 24, borderRadius: radius.full, backgroundColor: colors.primary[500], alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  toolRow: { flexDirection: 'row', gap: spacing.lg },
  toolImageBox: { width: 64, height: 64, backgroundColor: colors.neutral[50], borderRadius: radius.lg, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  toolImage: { width: '100%', height: '100%' },
  toolInfo: { flex: 1 },
  toolName: { fontWeight: '600', color: colors.neutral[800], marginBottom: 4, paddingRight: spacing.xl },
  toolDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.lg, gap: spacing.lg },
  actionsRight: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  selectedCount: { fontSize: 14, color: colors.neutral[500], fontWeight: '600' },
  modalShell: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  modalHeaderArea: {
    flexShrink: 0,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.sm,
    position: 'relative',
  },
  modalScrollArea: {
    flexGrow: 0,
    flexShrink: 1,
    width: '100%',
  },
  modalScrollContent: {
    flexGrow: 0,
    paddingHorizontal: spacing.xl,
  },
  modalFooter: {
    flexShrink: 0,
    width: '100%',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.neutral[100],
    backgroundColor: colors.white,
  },
  selectToolBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: '#FF6F00',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    width: '100%',
    minHeight: 48,
  },
  selectToolBtnText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  selectToolBtnActive: {
    backgroundColor: colors.primary[50],
    borderWidth: 2,
    borderColor: colors.primary[200],
  },
  selectToolBtnTextActive: { color: colors.primary[600], fontWeight: '700', fontSize: 16 },
  modalClose: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 32,
    height: 32,
    backgroundColor: colors.neutral[50],
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  modalHeader: { flexDirection: 'row', gap: spacing.lg, paddingRight: spacing.xxl },
  modalHeaderText: { flex: 1 },
  modalTitle: { fontSize: 20, fontWeight: '700', color: colors.neutral[800], marginBottom: 4 },
  modalDesc: { fontSize: 14, color: colors.neutral[500], lineHeight: 20 },
  modalSection: { marginBottom: spacing.md },
  modalSectionLast: { marginBottom: 0 },
  modalSectionTitle: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: spacing.sm },
  modalSectionTitleText: { fontSize: 14, fontWeight: '700', color: colors.neutral[700] },
  modalSectionBody: { fontSize: 14, color: colors.neutral[600], lineHeight: 22 },
  productBox: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, backgroundColor: colors.accent[50], borderRadius: radius.lg, borderWidth: 1, borderColor: colors.accent[100] },
  productIcon: { width: 48, height: 48, backgroundColor: colors.white, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  productInfo: { flex: 1 },
  productName: { fontSize: 14, fontWeight: '600', color: colors.neutral[800] },
  productStore: { fontSize: 12, color: colors.neutral[400] },
  storeBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, backgroundColor: colors.primary[500], borderRadius: radius.md },
  storeBtnText: { fontSize: 12, fontWeight: '700', color: colors.white },
});
