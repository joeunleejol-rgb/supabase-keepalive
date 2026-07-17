import type { Ingredient, FoodType } from '../types';
import { MEAT_BANNED_KEYWORDS, PLANT_PROTEIN_INGREDIENT_IDS, VEGETARIAN_FOOD_TYPE_IDS } from '../data/constants';

const MEAT_KEYWORDS = new RegExp(
  MEAT_BANNED_KEYWORDS.map((kw) => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i',
);

export const PLANT_PROTEIN_KEYWORDS =
  /tofu|두부|bean|콩|lentil|렌틸|chickpea|병아리|fava|파바|broad.?bean|tempeh|템페|oat|귀리|hafer|avoine|avena|linsen|haricot|legume|legumi|pea|완두|avocado|아보카도|banana|바나나/i;

const PLANT_PROTEIN_ID_SET = new Set<string>(PLANT_PROTEIN_INGREDIENT_IDS);

export function ingredientText(ing: Ingredient): string {
  return [ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it].filter(Boolean).join(' ');
}

export function isVegetarianFoodTypeId(foodTypeId: string | null | undefined): boolean {
  if (!foodTypeId) return false;
  return (VEGETARIAN_FOOD_TYPE_IDS as readonly string[]).includes(foodTypeId);
}

export function isVegetarianFoodType(foodType: FoodType | undefined): boolean {
  if (!foodType) return false;
  if (isVegetarianFoodTypeId(foodType.id)) return true;
  const haystack = [
    foodType.id,
    foodType.name,
    foodType.name_en,
    foodType.name_de,
    foodType.name_fr,
    foodType.name_it,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return /vegan|vegetarian|채식|비건|bio.?veg|végétari|vegetar/i.test(haystack);
}

export function containsMeatOrFishText(text: string): boolean {
  if (!text || text === '—') return false;
  return MEAT_KEYWORDS.test(text);
}

export function isPlantProteinIngredient(ing: Ingredient): boolean {
  if (PLANT_PROTEIN_ID_SET.has(ing.id)) return true;
  return PLANT_PROTEIN_KEYWORDS.test(ingredientText(ing));
}

/** True for meat, fish, egg, dairy protein items that must be hidden on vegetarian plans */
export function isAnimalProteinIngredient(ing: Ingredient): boolean {
  if (containsMeatOrFishText(ingredientText(ing))) return true;
  if (ing.category !== 'protein') return false;
  return !isPlantProteinIngredient(ing);
}

export function filterIngredientsForVegetarianPlan(ingredients: Ingredient[]): Ingredient[] {
  return ingredients.filter((ing) => !isAnimalProteinIngredient(ing));
}

export function sanitizeSelectedIngredientIds(
  selectedIds: string[],
  allIngredients: Ingredient[],
  isVegetarian: boolean,
): string[] {
  if (!isVegetarian) return selectedIds;
  const allowed = new Set(filterIngredientsForVegetarianPlan(allIngredients).map((ing) => ing.id));
  return selectedIds.filter((id) => allowed.has(id));
}

export function prioritizePlantProteins(ingredients: Ingredient[]): Ingredient[] {
  return [...ingredients].sort((a, b) => {
    const aScore = a.category === 'protein' && isPlantProteinIngredient(a) ? 0 : 1;
    const bScore = b.category === 'protein' && isPlantProteinIngredient(b) ? 0 : 1;
    if (aScore !== bScore) return aScore - bScore;
    return a.sort_order - b.sort_order || a.recommended_month - b.recommended_month;
  });
}

export function getVegetarianVisibleIngredients(ingredients: Ingredient[], isVegetarian: boolean): Ingredient[] {
  const pool = isVegetarian ? filterIngredientsForVegetarianPlan(ingredients) : ingredients;
  return prioritizePlantProteins(pool);
}
