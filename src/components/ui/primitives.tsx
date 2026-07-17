import { useEffect, useRef, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Animated,
  Modal,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors, radius, spacing } from '../../theme';
import { PressableScale, SPRING_GENTLE, useAnimatedProgress } from './motion';

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({ label, onPress, disabled, loading, icon, style }: ButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled || loading}
      scaleDown={0.94}
      style={[styles.primaryBtn, (disabled || loading) && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <>
          {icon}
          <Text style={styles.primaryBtnText}>{label}</Text>
        </>
      )}
    </PressableScale>
  );
}

export function SecondaryButton({ label, onPress, disabled, icon, style }: ButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled}
      scaleDown={0.96}
      style={[styles.secondaryBtn, disabled && styles.disabled, style]}
    >
      {icon}
      <Text style={styles.secondaryBtnText}>{label}</Text>
    </PressableScale>
  );
}

export function Card({ children, style, selected }: { children: ReactNode; style?: StyleProp<ViewStyle>; selected?: boolean }) {
  return <View style={[styles.card, selected && styles.cardSelected, style]}>{children}</View>;
}

type PressableCardProps = {
  onPress?: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  disabled?: boolean;
};

export function PressableCard({ onPress, children, style, selected, disabled }: PressableCardProps) {
  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled || !onPress}
      scaleDown={0.97}
      accessibilityRole={onPress ? 'button' : undefined}
      style={[styles.card, selected && styles.cardSelected, style]}
    >
      {children}
    </PressableScale>
  );
}

export function ScreenScroll({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return (
    <ScrollView style={styles.screenScroll} contentContainerStyle={[styles.screenContent, style]} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function SectionBadge({ label, bg, textColor, icon }: { label: string; bg: string; textColor: string; icon?: ReactNode }) {
  return (
    <View style={[styles.sectionBadge, { backgroundColor: bg }]}>
      {icon}
      <Text style={[styles.sectionBadgeText, { color: textColor }]}>{label}</Text>
    </View>
  );
}

export function AppModal({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: ReactNode }) {
  const translateY = useRef(new Animated.Value(48)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      translateY.setValue(48);
      opacity.setValue(0);
      Animated.parallel([
        Animated.spring(translateY, { toValue: 0, useNativeDriver: true, ...SPRING_GENTLE }),
        Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
      ]).start();
    }
  }, [visible, translateY, opacity]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={styles.modalBackdrop} onPress={onClose} accessibilityRole="button" />
        <Animated.View style={[styles.modalContent, { opacity, transform: [{ translateY }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}

export function AppTextInput(props: TextInputProps) {
  return <TextInput {...props} placeholderTextColor={colors.neutral[400]} style={[styles.input, props.style]} />;
}

export function ProgressBar({ percent, color = colors.primary[500] }: { percent: number; color?: string }) {
  const animatedWidth = useAnimatedProgress(percent);
  return (
    <View style={styles.progressTrack}>
      <Animated.View style={[styles.progressFill, { width: animatedWidth, backgroundColor: color }]} />
    </View>
  );
}

export { PressableScale, FadeInUp, ScreenTransition } from './motion';

const styles = StyleSheet.create({
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary[500],
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
  },
  primaryBtnText: { color: colors.white, fontWeight: '700', fontSize: 16, flexShrink: 1, textAlign: 'center' },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.neutral[200],
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
  },
  secondaryBtnText: { color: colors.neutral[700], fontWeight: '700', fontSize: 16, flexShrink: 1, textAlign: 'center' },
  disabled: { opacity: 0.5 },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.neutral[100],
    padding: spacing.lg,
  },
  cardSelected: { borderColor: colors.primary[400], borderWidth: 2 },
  screenScroll: { flex: 1 },
  screenContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    paddingBottom: spacing.xxl * 2,
  },
  sectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    marginBottom: spacing.lg,
  },
  sectionBadgeText: { fontSize: 13, fontWeight: '700' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
    zIndex: 1,
  },
  input: {
    backgroundColor: colors.neutral[50],
    borderWidth: 1,
    borderColor: colors.neutral[200],
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    color: colors.neutral[800],
    fontSize: 16,
  },
  progressTrack: {
    height: 8,
    backgroundColor: colors.neutral[100],
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: radius.full },
});
