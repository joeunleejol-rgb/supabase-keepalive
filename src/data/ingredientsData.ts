import { PLANT_PROTEIN_INGREDIENT_IDS } from './constants';
import type { Ingredient } from '../types';
import defaultIngredients from './defaultIngredients.json';

/** Plant-based protein ingredients merged into Supabase catalog for vegetarian meal plans */
export const PLANT_PROTEIN_INGREDIENTS: Ingredient[] = [
  {
    id: PLANT_PROTEIN_INGREDIENT_IDS[0],
    name: '완두콩',
    name_en: 'Peas',
    name_de: 'Erbsen',
    name_fr: 'Pois',
    name_it: 'Piselli',
    category: 'protein',
    description: '부드럽게 으깬 완두콩은 초기 단백질 공급원으로 좋습니다.',
    description_en: 'Soft mashed peas are a gentle early protein source.',
    recommended_month: 7,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 101,
    is_starter_recommended: true,
  },
  {
    id: PLANT_PROTEIN_INGREDIENT_IDS[1],
    name: '렌틸콩',
    name_en: 'Lentils',
    name_de: 'Linsen',
    name_fr: 'Lentilles',
    name_it: 'Lenticchie',
    category: 'protein',
    description: '잘 익힌 렌틸콩은 철분과 단백질을 함께 보충해 줍니다.',
    description_en: 'Well-cooked lentils provide iron and plant protein together.',
    recommended_month: 8,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 102,
    is_starter_recommended: true,
  },
  {
    id: PLANT_PROTEIN_INGREDIENT_IDS[2],
    name: '파바빈',
    name_en: 'Fava beans',
    name_de: 'Ackerbohnen',
    name_fr: 'Fèves',
    name_it: 'Fave',
    category: 'protein',
    description: '껍질을 제거하고 충분히 익힌 파바빈은 중기 이후 단백질원으로 적합합니다.',
    description_en: 'Peeled, thoroughly cooked fava beans suit mid-stage plant protein.',
    recommended_month: 9,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 103,
    is_starter_recommended: false,
  },
  {
    id: PLANT_PROTEIN_INGREDIENT_IDS[3],
    name: '병아리콩',
    name_en: 'Chickpeas',
    name_de: 'Kichererbsen',
    name_fr: 'Pois chiches',
    name_it: 'Ceci',
    category: 'protein',
    description: '으깬 병아리콩은 죽·퓨레에 넣기 좋은 식물성 단백질입니다.',
    description_en: 'Mashed chickpeas work well in porridge and purées.',
    recommended_month: 8,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 104,
    is_starter_recommended: true,
  },
  {
    id: PLANT_PROTEIN_INGREDIENT_IDS[4],
    name: '템페',
    name_en: 'Tempeh',
    name_de: 'Tempeh',
    name_fr: 'Tempeh',
    name_it: 'Tempeh',
    category: 'protein',
    description: '잘 익힌 템페는 발효 대두로 소화에 도움이 되는 단백질원입니다.',
    description_en: 'Well-cooked tempeh is fermented soy — a digestible protein source.',
    recommended_month: 10,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 105,
    is_starter_recommended: false,
  },
];

function normalizeName(value: string | null | undefined): string {
  return (value ?? '').trim().toLowerCase();
}

/** Merge local plant proteins into remote Supabase ingredients (skip duplicates by id or name) */
export function mergePlantProteinIngredients(remote: Ingredient[]): Ingredient[] {
  const merged = [...remote];
  for (const local of PLANT_PROTEIN_INGREDIENTS) {
    const exists = merged.some(
      (ing) =>
        ing.id === local.id ||
        normalizeName(ing.name) === normalizeName(local.name) ||
        normalizeName(ing.name_en) === normalizeName(local.name_en),
    );
    if (!exists) merged.push(local);
  }
  return merged;
}

export const DEFAULT_INGREDIENTS = defaultIngredients as Ingredient[];

export function resolveIngredients(remote: Ingredient[] | null | undefined): Ingredient[] {
  const base = remote && remote.length > 0 ? remote : DEFAULT_INGREDIENTS;
  return mergePlantProteinIngredients(base);
}
