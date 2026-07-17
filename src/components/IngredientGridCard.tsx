import { type ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check, Sparkles } from 'lucide-react-native';
import type { Ingredient } from '../types';
import { getIcon } from '../lib/icons';
import { PressableScale } from './ui/primitives';
import { colors, radius } from '../theme';

export const ingredientGridStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  gridSlot: {
    width: '31%',
    aspectRatio: 1,
  },
  cardShell: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFE0B2',
    padding: 12,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardSelected: {
    borderColor: colors.primary[400],
    borderWidth: 2,
  },
  cardStarter: {
    backgroundColor: 'rgba(255,251,235,0.6)',
    borderColor: '#FFE0B2',
  },
  cardBody: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  selectedDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: radius.full,
    backgroundColor: colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  starterDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: radius.full,
    backgroundColor: colors.amber[400],
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meta: { alignSelf: 'stretch', paddingRight: 20 },
  name: {
    fontWeight: '700',
    color: colors.neutral[800],
    fontSize: 13,
    lineHeight: 17,
    marginBottom: 2,
  },
  month: { fontSize: 12, fontWeight: '600' },
});

type IngredientGridCardProps = {
  ingredient: Ingredient;
  name: string;
  monthSuffix: string;
  isSelected: boolean;
  isStarter: boolean;
  iconColors: { bg: string; text: string };
  onPress: () => void;
};

export function IngredientGrid({ children }: { children: ReactNode }) {
  return <View style={ingredientGridStyles.grid}>{children}</View>;
}

export function IngredientGridCard({
  ingredient,
  name,
  monthSuffix,
  isSelected,
  isStarter,
  iconColors,
  onPress,
}: IngredientGridCardProps) {
  const Icon = getIcon(ingredient.icon_name);

  return (
    <View style={ingredientGridStyles.gridSlot}>
      <PressableScale onPress={onPress} scaleDown={0.97} accessibilityRole="button">
        <View
          style={[
            ingredientGridStyles.cardShell,
            isSelected && ingredientGridStyles.cardSelected,
            isStarter && !isSelected && ingredientGridStyles.cardStarter,
          ]}
        >
          {isSelected && (
            <View style={ingredientGridStyles.selectedDot}>
              <Check size={12} color={colors.white} strokeWidth={3} />
            </View>
          )}
          {isStarter && !isSelected && (
            <View style={ingredientGridStyles.starterDot}>
              <Sparkles size={10} color={colors.white} strokeWidth={2.5} />
            </View>
          )}
          <View style={ingredientGridStyles.cardBody}>
            <View style={[ingredientGridStyles.icon, { backgroundColor: iconColors.bg }]}>
              <Icon size={22} color={iconColors.text} strokeWidth={1.5} />
            </View>
            <View style={ingredientGridStyles.meta}>
              <Text style={ingredientGridStyles.name} numberOfLines={2}>
                {name}
              </Text>
              <Text style={[ingredientGridStyles.month, { color: iconColors.text }]}>
                {ingredient.recommended_month}
                {monthSuffix}
              </Text>
            </View>
          </View>
        </View>
      </PressableScale>
    </View>
  );
}
