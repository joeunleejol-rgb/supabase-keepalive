import { useEffect, useRef, type ReactNode } from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
  type AccessibilityRole,
} from 'react-native';

export const SPRING_SNAPPY = { speed: 18, bounciness: 6 } as const;
export const SPRING_BOUNCY = { speed: 14, bounciness: 10 } as const;
export const SPRING_GENTLE = { speed: 12, bounciness: 4 } as const;

type PressableScaleProps = {
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  scaleDown?: number;
  accessibilityRole?: AccessibilityRole;
};

export function PressableScale({
  onPress,
  disabled,
  style,
  children,
  scaleDown = 0.96,
  accessibilityRole = 'button',
}: PressableScaleProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const animate = (toValue: number) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
      ...(toValue < 1 ? SPRING_SNAPPY : SPRING_BOUNCY),
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole={accessibilityRole}
      onPressIn={() => {
        if (!disabled) animate(scaleDown);
      }}
      onPressOut={() => animate(1)}
    >
      <Animated.View style={[style, disabled && styles.disabled, { transform: [{ scale }] }]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

type ScreenTransitionProps = {
  screenKey: string;
  direction: 'forward' | 'back';
  children: ReactNode;
};

export function ScreenTransition({ screenKey, direction, children }: ScreenTransitionProps) {
  const slide = useRef(new Animated.Value(direction === 'forward' ? 32 : -32)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    slide.setValue(direction === 'forward' ? 32 : -32);
    opacity.setValue(0);
    Animated.parallel([
      Animated.spring(slide, {
        toValue: 0,
        useNativeDriver: true,
        ...SPRING_GENTLE,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 260,
        useNativeDriver: true,
      }),
    ]).start();
  }, [screenKey, direction, slide, opacity]);

  return (
    <Animated.View style={[styles.screen, { opacity, transform: [{ translateX: slide }] }]}>
      {children}
    </Animated.View>
  );
}

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  screenKey?: string | number;
};

export function FadeInUp({ children, delay = 0, style, screenKey }: FadeInUpProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(18);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 360,
        delay,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        delay,
        useNativeDriver: true,
        ...SPRING_GENTLE,
      }),
    ]).start();
  }, [screenKey, delay, opacity, translateY]);

  return (
    <Animated.View style={[style, { opacity, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}

export function useAnimatedProgress(targetPercent: number) {
  const width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(width, {
      toValue: Math.min(100, Math.max(0, targetPercent)),
      useNativeDriver: false,
      ...SPRING_GENTLE,
    }).start();
  }, [targetPercent, width]);

  return width.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  disabled: { opacity: 0.5 },
});
