import {
  Utensils, Soup, Shirt, Blend, Package, Armchair, CookingPot, Salad,
  Grid3x3, Sandwich, Hand, Carrot, Circle, Leaf, Apple, Cherry, Citrus,
  Beef, Bird, Fish, Egg, Square, Wheat, Trees, Snowflake, GlassWater,
  Scissors, Beaker, Weight, Filter, Slice, BookOpen, type LucideIcon,
} from 'lucide-react-native';

const iconMap: Record<string, LucideIcon> = {
  Utensils, Soup, Shirt, Blend, Package, Armchair, CookingPot, Salad,
  Grid3x3, Sandwich, Hand, Carrot, Circle, Leaf, Apple, Cherry, Citrus,
  Beef, Bird, Fish, Egg, Square, Wheat, Trees, Snowflake, GlassWater,
  Scissors, Beaker, Weight, Filter, Slice, BookOpen,
};

export function getIcon(name: string | null): LucideIcon {
  if (!name) return Circle;
  return iconMap[name] ?? Circle;
}
