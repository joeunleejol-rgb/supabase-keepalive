import { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'expo-image';
import {
  ClipboardList, ArrowLeft, Plus, Trash2, Check, AlertTriangle, AlertCircle,
  Camera, Paperclip, X, Image as ImageIcon,
} from 'lucide-react-native';
import { supabase } from '../lib/supabase';
import type { Ingredient, AllergyTest } from '../types';
import { getIcon } from '../lib/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { loc } from '../lib/i18n';
import {
  launchCamera,
  launchImageLibrary,
  requestCameraPermission,
  requestMediaLibraryPermission,
} from '../lib/imagePicker';
import { PrimaryButton, SecondaryButton, Card, PressableCard, ScreenScroll, AppModal, AppTextInput, PressableScale } from './ui/primitives';
import { colors, spacing, radius } from '../theme';

type Props = {
  ingredients: Ingredient[];
  selectedIngredients: string[];
  onBack: () => void;
};

type PhotoAsset = { uri: string; mimeType?: string; fileName?: string };

export function AllergyScreen({ ingredients, selectedIngredients, onBack }: Props) {
  const { t, lang, session } = useLanguage();
  const sessionToken = session?.user?.id ?? 'babyfood-session';
  const [records, setRecords] = useState<AllergyTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoAsset, setPhotoAsset] = useState<PhotoAsset | null>(null);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    ingredientId: '',
    testDate: new Date().toISOString().slice(0, 10),
    reaction: 'none' as 'none' | 'mild' | 'severe',
    notes: '',
  });

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('allergy_tests')
      .select('*')
      .eq('session_token', sessionToken)
      .order('test_date', { ascending: false });
    if (!error && data) setRecords(data as AllergyTest[]);
    setLoading(false);
  }, [sessionToken]);

  useEffect(() => { fetchRecords(); }, [fetchRecords]);

  const setPhotoFromResult = (result: Awaited<ReturnType<typeof launchCamera>>) => {
    if (result.canceled || !result.assets[0]) return;
    const asset = result.assets[0];
    setPhotoAsset({
      uri: asset.uri,
      mimeType: asset.mimeType ?? 'image/jpeg',
      fileName: asset.fileName ?? `photo-${Date.now()}.jpg`,
    });
    setPhotoPreview(asset.uri);
  };

  const pickFromCamera = async () => {
    const permission = await requestCameraPermission();
    if (!permission.granted) return;
    setPhotoFromResult(await launchCamera());
  };

  const pickFromLibrary = async () => {
    const permission = await requestMediaLibraryPermission();
    if (!permission.granted) return;
    setPhotoFromResult(await launchImageLibrary());
  };

  const handleRemovePhoto = () => {
    setPhotoAsset(null);
    setPhotoPreview(null);
  };

  const uploadPhoto = async (): Promise<string | null> => {
    if (!photoAsset || !session?.user?.id) return null;
    const fileExt = photoAsset.fileName?.split('.').pop() ?? 'jpg';
    const fileName = `${session.user.id}/${Date.now()}.${fileExt}`;
    const response = await fetch(photoAsset.uri);
    const blob = await response.blob();
    const { error } = await supabase.storage.from('allergy-photos').upload(fileName, blob, {
      contentType: photoAsset.mimeType ?? 'image/jpeg',
    });
    if (error) return null;
    const { data } = supabase.storage.from('allergy-photos').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!formData.ingredientId) return;
    const ingredient = ingredients.find((ing) => ing.id === formData.ingredientId);
    if (!ingredient) return;

    let photoUrl: string | null = null;
    if (photoAsset) photoUrl = await uploadPhoto();

    const { error } = await supabase.from('allergy_tests').insert({
      session_token: sessionToken,
      ingredient_id: formData.ingredientId,
      ingredient_name: loc(lang, ingredient.name, ingredient.name_en, ingredient.name_de, ingredient.name_fr, ingredient.name_it),
      test_date: formData.testDate,
      reaction: formData.reaction,
      notes: formData.notes || null,
      photo_url: photoUrl,
    });

    if (!error) {
      setFormData({ ingredientId: '', testDate: new Date().toISOString().slice(0, 10), reaction: 'none', notes: '' });
      setPhotoAsset(null);
      setPhotoPreview(null);
      setShowForm(false);
      fetchRecords();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('allergy_tests').delete().eq('id', id);
    if (!error) setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  const reactionConfig = {
    none: { label: t('allergy.noneLabel'), icon: Check, bg: colors.secondary[50], text: colors.secondary[600], border: colors.secondary[500] },
    mild: { label: t('allergy.mildLabel'), icon: AlertTriangle, bg: colors.warning[50], text: colors.warning[600], border: colors.warning[500] },
    severe: { label: t('allergy.severeLabel'), icon: AlertCircle, bg: colors.error[50], text: colors.error[600], border: colors.error[500] },
  } as const;

  const availableIngredients = ingredients.filter((ing) =>
    selectedIngredients.includes(ing.id) || records.every((r) => r.ingredient_id !== ing.id)
  );
  const monthSuffix = lang === 'de' ? 'Mo+' : lang === 'fr' ? 'mois+' : lang === 'it' ? 'mes+' : 'mo+';

  return (
    <>
      <ScreenScroll style={styles.container}>
        <View style={styles.badge}><ClipboardList size={16} color={colors.rose[500]} /><Text style={styles.badgeText}>{t('allergy.title')}</Text></View>
        <Text style={styles.title}>{t('allergy.title')}</Text>
        <Text style={styles.subtitle}>{t('allergy.subtitle')}</Text>

        {!showForm ? (
          <PressableCard onPress={() => setShowForm(true)} style={styles.addCard}>
            <Plus size={20} color={colors.primary[600]} /><Text style={styles.addText}>{t('allergy.add')}</Text>
          </PressableCard>
        ) : (
          <Card style={styles.formCard}>
            <Text style={styles.fieldLabel}>{t('allergy.ingredient')}</Text>
            <View style={styles.pickerWrap}>
              <Picker selectedValue={formData.ingredientId} onValueChange={(v) => setFormData((prev) => ({ ...prev, ingredientId: v }))}>
                <Picker.Item label="--" value="" />
                {availableIngredients.map((ing) => (
                  <Picker.Item key={ing.id} label={`${loc(lang, ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it)} (${ing.recommended_month}${monthSuffix})`} value={ing.id} />
                ))}
              </Picker>
            </View>
            <Text style={styles.fieldLabel}>{t('allergy.date')}</Text>
            <AppTextInput value={formData.testDate} onChangeText={(v) => setFormData((prev) => ({ ...prev, testDate: v }))} placeholder="YYYY-MM-DD" />
            <Text style={styles.fieldLabel}>{t('allergy.reaction')}</Text>
            <View style={styles.reactionRow}>
              {(['none', 'mild', 'severe'] as const).map((reaction) => {
                const config = reactionConfig[reaction];
                const Icon = config.icon;
                const isSelected = formData.reaction === reaction;
                return (
                  <View key={reaction} style={styles.reactionSlot}>
                    <PressableScale
                      onPress={() => setFormData((prev) => ({ ...prev, reaction }))}
                      scaleDown={0.95}
                      accessibilityRole="button"
                    >
                      <View style={[styles.reactionBtn, isSelected && { backgroundColor: config.bg, borderColor: config.border }]}>
                        <Icon size={20} color={isSelected ? config.text : colors.neutral[400]} strokeWidth={2} />
                        <Text style={[styles.reactionLabel, isSelected && { color: config.text }]}>{config.label}</Text>
                      </View>
                    </PressableScale>
                  </View>
                );
              })}
            </View>
            <Text style={styles.fieldLabel}>{t('allergy.photo')}</Text>
            {photoPreview ? (
              <View style={styles.previewWrap}>
                <Image source={{ uri: photoPreview }} style={styles.preview} contentFit="cover" />
                <Pressable onPress={handleRemovePhoto} style={styles.previewRemove}><X size={16} color={colors.white} /></Pressable>
                <Text style={styles.previewHint}>{t('allergy.photoUploaded')}</Text>
              </View>
            ) : (
              <View style={styles.photoRow}>
                <View style={styles.photoSlot}>
                  <PressableScale onPress={pickFromCamera} scaleDown={0.95} accessibilityRole="button">
                    <View style={styles.photoBtn}>
                      <Camera size={24} color={colors.primary[500]} strokeWidth={1.5} />
                      <Text style={styles.photoBtnText}>{t('allergy.takePhoto')}</Text>
                    </View>
                  </PressableScale>
                </View>
                <View style={styles.photoSlot}>
                  <PressableScale onPress={pickFromLibrary} scaleDown={0.95} accessibilityRole="button">
                    <View style={styles.photoBtn}>
                      <Paperclip size={24} color={colors.primary[500]} strokeWidth={1.5} />
                      <Text style={styles.photoBtnText}>{t('allergy.attachPhoto')}</Text>
                    </View>
                  </PressableScale>
                </View>
              </View>
            )}
            <Text style={styles.fieldLabel}>{t('allergy.notes')}</Text>
            <AppTextInput value={formData.notes} onChangeText={(v) => setFormData((prev) => ({ ...prev, notes: v }))} placeholder={t('allergy.notesPlaceholder')} multiline numberOfLines={3} style={styles.notesInput} />
            <View style={styles.formActions}>
              <SecondaryButton label={t('common.back')} onPress={() => { setShowForm(false); handleRemovePhoto(); }} style={{ flex: 1 }} />
              <PrimaryButton label={t('allergy.save')} onPress={handleSave} disabled={!formData.ingredientId} icon={<Check size={16} color={colors.white} />} style={{ flex: 1 }} />
            </View>
          </Card>
        )}

        <Text style={styles.historyTitle}>{t('allergy.history')}</Text>
        {loading ? (
          <View style={styles.loadingWrap}><ActivityIndicator size="large" color={colors.primary[500]} /></View>
        ) : records.length === 0 ? (
          <Card style={styles.emptyCard}><ClipboardList size={24} color={colors.neutral[300]} strokeWidth={1.5} /><Text style={styles.emptyText}>{t('allergy.empty')}</Text></Card>
        ) : (
          records.map((record) => {
            const config = reactionConfig[record.reaction];
            const Icon = config.icon;
            const ingredient = ingredients.find((ing) => ing.id === record.ingredient_id);
            const IngIcon = getIcon(ingredient?.icon_name ?? null);
            return (
              <Card key={record.id} style={styles.recordCard}>
                <View style={styles.recordRow}>
                  <View style={[styles.recordIcon, { backgroundColor: config.bg }]}><IngIcon size={20} color={config.text} strokeWidth={1.5} /></View>
                  <View style={styles.recordInfo}>
                    <View style={styles.recordHeader}>
                      <Text style={styles.recordName}>{record.ingredient_name}</Text>
                      <View style={[styles.reactionPill, { backgroundColor: config.bg }]}><Icon size={12} color={config.text} /><Text style={[styles.reactionPillText, { color: config.text }]}>{config.label}</Text></View>
                    </View>
                    <Text style={styles.recordDate}>{record.test_date}</Text>
                    {record.photo_url && (
                      <Pressable onPress={() => setViewPhoto(record.photo_url)} style={styles.viewPhotoBtn}>
                        <ImageIcon size={12} color={colors.primary[500]} /><Text style={styles.viewPhotoText}>{t('allergy.viewPhoto')}</Text>
                      </Pressable>
                    )}
                    {record.notes && <Text style={styles.recordNotes}>{record.notes}</Text>}
                  </View>
                  <Pressable onPress={() => handleDelete(record.id)} style={styles.deleteBtn}><Trash2 size={16} color={colors.neutral[300]} /></Pressable>
                </View>
              </Card>
            );
          })
        )}
        <SecondaryButton label={t('allergy.back')} onPress={onBack} icon={<ArrowLeft size={16} color={colors.neutral[700]} />} style={styles.backBtn} />
      </ScreenScroll>
      <AppModal visible={!!viewPhoto} onClose={() => setViewPhoto(null)}>
        <View style={styles.photoModal}>
          <Pressable onPress={() => setViewPhoto(null)} style={styles.photoModalClose}><X size={16} color={colors.white} /></Pressable>
          {viewPhoto && <Image source={{ uri: viewPhoto }} style={styles.photoModalImage} contentFit="contain" />}
        </View>
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: 768, alignSelf: 'center', width: '100%' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, alignSelf: 'flex-start', paddingHorizontal: spacing.md, paddingVertical: spacing.xs, backgroundColor: colors.rose[50], borderRadius: radius.full, marginBottom: spacing.lg },
  badgeText: { fontSize: 13, fontWeight: '700', color: colors.rose[600] },
  title: { fontSize: 28, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.md },
  subtitle: { fontSize: 16, color: colors.neutral[500], lineHeight: 24, marginBottom: spacing.xl },
  addCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, marginBottom: spacing.lg },
  addText: { fontWeight: '700', color: colors.primary[600], fontSize: 16 },
  formCard: { marginBottom: spacing.lg },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: colors.neutral[700], marginBottom: spacing.sm, marginTop: spacing.md },
  pickerWrap: { borderWidth: 1, borderColor: colors.neutral[200], borderRadius: radius.lg, backgroundColor: colors.neutral[50], overflow: 'hidden' },
  reactionRow: { flexDirection: 'row', width: '100%', gap: 10 },
  reactionSlot: { flex: 1 },
  reactionBtn: {
    width: '100%',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.neutral[100],
    backgroundColor: colors.white,
  },
  reactionLabel: { fontSize: 11, fontWeight: '700', color: colors.neutral[400], textAlign: 'center' },
  photoRow: { flexDirection: 'row', width: '100%', gap: 12 },
  photoSlot: { flex: 1 },
  photoBtn: {
    width: '100%',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    backgroundColor: colors.neutral[50],
    borderWidth: 2,
    borderColor: colors.neutral[100],
    borderRadius: radius.lg,
  },
  photoBtnText: { fontSize: 12, fontWeight: '700', color: colors.neutral[600], textAlign: 'center' },
  previewWrap: { position: 'relative' },
  preview: { width: '100%', height: 192, borderRadius: radius.lg },
  previewRemove: { position: 'absolute', top: spacing.sm, right: spacing.sm, width: 32, height: 32, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: radius.full, alignItems: 'center', justifyContent: 'center' },
  previewHint: { fontSize: 12, color: colors.neutral[500], marginTop: 4 },
  notesInput: { minHeight: 80, textAlignVertical: 'top' },
  formActions: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.lg },
  historyTitle: { fontSize: 18, fontWeight: '700', color: colors.neutral[800], marginBottom: spacing.lg },
  loadingWrap: { alignItems: 'center', paddingVertical: spacing.xxl },
  emptyCard: { alignItems: 'center', paddingVertical: spacing.xxl, marginBottom: spacing.lg },
  emptyText: { fontSize: 14, color: colors.neutral[400], marginTop: spacing.md },
  recordCard: { marginBottom: spacing.md },
  recordRow: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' },
  recordIcon: { width: 40, height: 40, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  recordInfo: { flex: 1 },
  recordHeader: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm, marginBottom: 4 },
  recordName: { fontWeight: '600', color: colors.neutral[800] },
  reactionPill: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: radius.full },
  reactionPillText: { fontSize: 11, fontWeight: '700' },
  recordDate: { fontSize: 12, color: colors.neutral[400] },
  viewPhotoBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: spacing.sm },
  viewPhotoText: { fontSize: 12, color: colors.primary[500] },
  recordNotes: { fontSize: 14, color: colors.neutral[500], marginTop: 4 },
  deleteBtn: { padding: spacing.sm },
  backBtn: { marginTop: spacing.xl, alignSelf: 'flex-start' },
  photoModal: { padding: spacing.lg },
  photoModalClose: { position: 'absolute', top: spacing.lg, right: spacing.lg, width: 32, height: 32, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  photoModalImage: { width: '100%', height: 400, borderRadius: radius.lg },
});
