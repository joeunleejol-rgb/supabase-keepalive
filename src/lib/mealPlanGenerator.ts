import type { Ingredient, FoodType } from '../types';
import { FOOD_TYPE_IDS } from '../data/constants';
import { loc, type Language } from './i18n';
import {
  containsMeatOrFishText,
  isAnimalProteinIngredient,
  prioritizePlantProteins,
} from './vegetarianIngredients';

export { containsMeatOrFishText as containsMeatText, isVegetarianFoodType } from './vegetarianIngredients';

export type StageType = 'early' | 'mid' | 'late' | 'toddler';
export type MealSlot = 'morning' | 'afternoon' | 'evening' | 'snack';
export type PlanType = 'weekly' | 'monthly';
export type FoodTypeKind =
  | 'topping_cube'
  | 'blw'
  | 'vegan_vegetarian'
  | 'puree_mash'
  | 'bio_vegetarian'
  | 'porridge'
  | 'topping'
  | 'cube';

const FOOD_TYPE_KIND_BY_ID: Record<string, FoodTypeKind> = {
  [FOOD_TYPE_IDS.KR_TOPPING_CUBE]: 'topping_cube',
  [FOOD_TYPE_IDS.KR_BLW]: 'blw',
  [FOOD_TYPE_IDS.KR_VEGAN]: 'vegan_vegetarian',
  [FOOD_TYPE_IDS.EU_PUREE_MASH]: 'puree_mash',
  [FOOD_TYPE_IDS.EU_BLW]: 'blw',
  [FOOD_TYPE_IDS.EU_BIO_VEG]: 'bio_vegetarian',
};

function isVegetarianKind(kind: FoodTypeKind): boolean {
  return kind === 'vegan_vegetarian' || kind === 'bio_vegetarian';
}

function isMeatIngredient(ing: Ingredient): boolean {
  return isAnimalProteinIngredient(ing);
}

/** Synthetic plant-based staples — always available for vegetarian meal plans */
function createVeganStapleIngredients(): Ingredient[] {
  const base = {
    description: null,
    description_en: null,
    recommended_month: 6,
    icon_name: 'Leaf',
    color_theme: 'green',
    sort_order: 0,
    is_starter_recommended: false,
  };
  return [
    { ...base, id: 'vegan-tofu', name: '두부', name_en: 'Tofu', name_de: 'Tofu', name_fr: 'Tofu', name_it: 'Tofu', category: 'protein' as const },
    { ...base, id: 'vegan-oat', name: '오트밀', name_en: 'Oatmeal', name_de: 'Haferflocken', name_fr: 'Avoine', name_it: 'Avena', category: 'grain' as const },
    { ...base, id: 'vegan-lentil', name: '렌틸콩', name_en: 'Lentils', name_de: 'Linsen', name_fr: 'Lentilles', name_it: 'Lenticchie', category: 'protein' as const },
    { ...base, id: 'vegan-pea', name: '완두콩', name_en: 'Peas', name_de: 'Erbsen', name_fr: 'Pois', name_it: 'Piselli', category: 'vegetable' },
    { ...base, id: 'vegan-banana', name: '바나나', name_en: 'Banana', name_de: 'Banane', name_fr: 'Banane', name_it: 'Banana', category: 'fruit' },
    { ...base, id: 'vegan-avocado', name: '아보카도', name_en: 'Avocado', name_de: 'Avocado', name_fr: 'Avocat', name_it: 'Avocado', category: 'fruit' },
    { ...base, id: 'vegan-broccoli', name: '브로콜리', name_en: 'Broccoli', name_de: 'Brokkoli', name_fr: 'Brocoli', name_it: 'Broccoli', category: 'vegetable' },
    { ...base, id: 'vegan-carrot', name: '당근', name_en: 'Carrot', name_de: 'Karotte', name_fr: 'Carotte', name_it: 'Carota', category: 'vegetable' },
  ];
}

const VEGAN_STAPLES = createVeganStapleIngredients();

/** Pre-built vegetarian meal names — no user meat ingredients referenced */
const VEGAN_MEAL_TEMPLATES: Record<Language, Record<MealSlot, string[]>> = {
  ko: {
    morning: ['두부 채소 퓨레', '오트밀 바나나 매쉬', '완두콩 감자 퓨레', '렌틸콩 채소 미음', '아보카도 브로콜리 퓨레', '오트밀 사과 매쉬', '두부 당근 퓨레'],
    afternoon: ['두부 브로콜리 볶음', '렌틸콩 채소 수프', '오트밀 완두콩 죽', '두부 당근 미음', '완두콩 감자 매쉬', '아보카도 오트 볼', '렌틸콩 채소 죽'],
    evening: ['두부 채소 매쉬', '오트밀 바나나 퓨레', '완두콩 브로콜리 수프', '렌틸콩 당근 미음', '두부 아보카도 볼', '채소 오트 미음', '완두콩 감자 퓨레'],
    snack: ['바나나 퓨레', '아보카도 퓨레', '오트밀 바나나 간식', '완두콩 퓨레', '두부 핑거', '사과 오트 퓨레', '당근 스틱 & 두부 딥'],
  },
  en: {
    morning: ['tofu veggie purée', 'oatmeal banana mash', 'pea potato purée', 'lentil veggie porridge', 'avocado broccoli purée', 'oat apple mash', 'tofu carrot purée'],
    afternoon: ['tofu broccoli stir-fry', 'lentil veggie soup', 'oat pea porridge', 'tofu carrot mush', 'pea potato mash', 'avocado oat bowl', 'lentil veggie congee'],
    evening: ['tofu veggie mash', 'oatmeal banana purée', 'pea broccoli soup', 'lentil carrot porridge', 'tofu avocado bowl', 'veggie oat mush', 'pea potato purée'],
    snack: ['banana purée', 'avocado purée', 'oat banana snack', 'pea purée', 'tofu fingers', 'apple oat purée', 'carrot sticks & tofu dip'],
  },
  de: {
    morning: ['Tofu-Gemüse-Püree', 'Hafer-Bananen-Mus', 'Erbsen-Kartoffel-Brei', 'Linsen-Gemüsebrei', 'Avocado-Brokkoli-Püree', 'Hafer-Apfel-Mus', 'Tofu-Karotten-Brei'],
    afternoon: ['Tofu-Brokkoli-Pfanne', 'Linsen-Gemüsesuppe', 'Hafer-Erbsen-Brei', 'Tofu-Karotten-Brei', 'Erbsen-Kartoffel-Mus', 'Avocado-Hafer-Bowl', 'Linsen-Gemüsebrei'],
    evening: ['Tofu-Gemüse-Mus', 'Hafer-Bananen-Püree', 'Erbsen-Brokkoli-Suppe', 'Linsen-Karotten-Brei', 'Tofu-Avocado-Bowl', 'Gemüse-Hafer-Brei', 'Erbsen-Kartoffel-Püree'],
    snack: ['Bananen-Püree', 'Avocado-Püree', 'Hafer-Bananen-Snack', 'Erbsen-Püree', 'Tofu-Finger', 'Apfel-Hafer-Püree', 'Karottensticks & Tofu-Dip'],
  },
  fr: {
    morning: ['Purée tofu légumes', 'Mousse avoine banane', 'Purée pois pomme de terre', 'Bouillie lentilles légumes', 'Purée avocat brocoli', 'Mousse avoine pomme', 'Purée tofu carotte'],
    afternoon: ['Poêlée tofu brocoli', 'Soupe lentilles légumes', 'Bouillie avoine pois', 'Purée tofu carotte', 'Mousse pois pomme de terre', 'Bowl avocat avoine', 'Bouillie lentilles'],
    evening: ['Mousse tofu légumes', 'Purée avoine banane', 'Soupe pois brocoli', 'Bouillie lentilles carotte', 'Bowl tofu avocat', 'Bouillie avoine légumes', 'Purée pois pomme de terre'],
    snack: ['Purée banane', 'Purée avocat', 'Collation avoine banane', 'Purée pois', 'Bâtonnets tofu', 'Purée pomme avoine', 'Carottes & dip tofu'],
  },
  it: {
    morning: ['Purea tofu verdure', 'Passato avena banana', 'Purea piselli patate', 'Pappa lenticchie verdure', 'Purea avocado broccoli', 'Passato avena mela', 'Purea tofu carota'],
    afternoon: ['Tofu broccoli in padella', 'Zuppa lenticchie verdure', 'Pappa avena piselli', 'Purea tofu carota', 'Passato piselli patate', 'Bowl avocado avena', 'Pappa lenticchie'],
    evening: ['Passato tofu verdure', 'Purea avena banana', 'Zuppa piselli broccoli', 'Pappa lenticchie carota', 'Bowl tofu avocado', 'Pappa avena verdure', 'Purea piselli patate'],
    snack: ['Purea banana', 'Purea avocado', 'Merenda avena banana', 'Purea piselli', 'Bastoncini tofu', 'Purea mela avena', 'Carote & dip tofu'],
  },
};

function buildVegetarianMeal(slot: MealSlot, dayIndex: number, lang: Language): string {
  const templates = VEGAN_MEAL_TEMPLATES[lang] ?? VEGAN_MEAL_TEMPLATES.en;
  const options = templates[slot];
  return options[dayIndex % options.length];
}

function filterIngredientsForKind(ingredients: Ingredient[], kind: FoodTypeKind): Ingredient[] {
  if (!isVegetarianKind(kind)) return ingredients;

  const safeUser = ingredients.filter((ing) => !isMeatIngredient(ing));
  const safeOnly = safeUser.filter((ing) => !containsMeatOrFishText(
    [ing.name, ing.name_en, ing.name_de, ing.name_fr, ing.name_it].filter(Boolean).join(' '),
  ));

  const merged: Ingredient[] = [...safeOnly];
  for (const staple of VEGAN_STAPLES) {
    if (!merged.some((ing) => ing.id === staple.id)) merged.push(staple);
  }
  return prioritizePlantProteins(merged);
}

function pickSafeIngredient(pool: Ingredient[], index: number): Ingredient {
  const safe = pool.filter((ing) => !isMeatIngredient(ing));
  const source = safe.length > 0 ? safe : VEGAN_STAPLES;
  return source[index % source.length];
}

export type DayPlan = {
  day: number;
  stage: StageType;
  morning: string;
  afternoon: string;
  evening: string;
  snack: string;
  isTransition?: boolean;
};

const MEAL_SLOTS: MealSlot[] = ['morning', 'afternoon', 'evening', 'snack'];

function getIngredientsByStage(ingredients: Ingredient[], stage: StageType): Ingredient[] {
  const maxMonth = stage === 'early' ? 5 : stage === 'mid' ? 8 : 12;
  const filtered = ingredients.filter((ing) => ing.recommended_month <= maxMonth);
  return filtered.length > 0 ? filtered : ingredients.slice(0, 4);
}

export function getFoodTypeKind(foodType: FoodType | undefined): FoodTypeKind {
  if (!foodType) return 'porridge';
  const byId = FOOD_TYPE_KIND_BY_ID[foodType.id];
  if (byId) return byId;

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

  if (/blw|baby.?led|자기주도|finger.?food|fingerfood|autoguid|selbst/i.test(haystack)) return 'blw';
  if (/vegan|vegetarian|채식|비건|bio.?veg|végétari|vegetar/i.test(haystack)) {
    return /bio/i.test(haystack) ? 'bio_vegetarian' : 'vegan_vegetarian';
  }
  if (/puree|purée|mash|퓌레|매쉬|püree|mus|velouté|passato/i.test(haystack)) return 'puree_mash';
  if (/topping.*cube|cube.*topping|토핑.*큐브|큐브.*토핑/i.test(haystack)) return 'topping_cube';
  if (/cube|큐브|würfel|wuerfel|cubo|dice/i.test(haystack)) return 'cube';
  if (/topping|토핑|belag|garniture|condiment/i.test(haystack)) return 'topping';
  return 'porridge';
}

export function shouldFillMealSlot(stage: StageType, kind: FoodTypeKind, slot: MealSlot): boolean {
  if (isVegetarianKind(kind)) return true;
  if (stage === 'early') return slot === 'morning' || slot === 'snack';
  if (stage === 'mid') return slot !== 'evening';
  return true;
}

function buildMealName(
  ing1: Ingredient,
  ing2: Ingredient | undefined,
  foodType: FoodType | undefined,
  stage: StageType,
  slot: MealSlot,
  lang: Language,
): string {
  const kind = getFoodTypeKind(foodType);
  const n1 = loc(lang, ing1.name, ing1.name_en, ing1.name_de, ing1.name_fr, ing1.name_it);
  const n2 = ing2 ? loc(lang, ing2.name, ing2.name_en, ing2.name_de, ing2.name_fr, ing2.name_it) : null;

  if (kind === 'topping_cube') {
    if (slot === 'morning' || stage === 'early') {
      if (lang === 'ko') return n2 ? `${n1} ${n2} 큐브 미음` : `${n1} 큐브 미음`;
      if (lang === 'de') return n2 ? `${n1}-${n2}-Würfelbrei` : `${n1}-Würfelbrei`;
      if (lang === 'fr') return n2 ? `Bouillie ${n1} & ${n2} (cubes)` : `Bouillie ${n1} (cubes)`;
      if (lang === 'it') return n2 ? `Pappa ${n1} & ${n2} (cubetti)` : `Pappa ${n1} (cubetti)`;
      return n2 ? `${n1} & ${n2} cube porridge` : `${n1} cube porridge`;
    }
    if (slot === 'snack') {
      if (lang === 'ko') return `${n1} 큐브 간식`;
      if (lang === 'de') return `${n1}-Würfel-Snack`;
      if (lang === 'fr') return `Collation cubes ${n1}`;
      if (lang === 'it') return `Merenda cubetti ${n1}`;
      return `${n1} cube snack`;
    }
    if (lang === 'ko') return n2 ? `${n1} ${n2} 토핑밥` : `${n1} 큐브 토핑`;
    if (lang === 'de') return n2 ? `${n1} mit ${n2}-Topping` : `${n1} mit Würfel-Topping`;
    if (lang === 'fr') return n2 ? `${n1} avec topping ${n2}` : `${n1} avec cubes`;
    if (lang === 'it') return n2 ? `${n1} con topping ${n2}` : `${n1} con cubetti`;
    return n2 ? `${n1} with ${n2} cube topping` : `${n1} cube topping`;
  }

  if (kind === 'puree_mash') {
    if (stage === 'early' || slot === 'morning') {
      if (lang === 'ko') return `${n1} 퓌레`;
      if (lang === 'de') return `${n1}-Püree`;
      if (lang === 'fr') return `Purée de ${n1}`;
      if (lang === 'it') return `Purea di ${n1}`;
      return `${n1} purée`;
    }
    if (slot === 'snack') {
      if (lang === 'ko') return `${n1} 과일 퓌레`;
      if (lang === 'de') return `${n1}-Fruchtpüree`;
      if (lang === 'fr') return `Compote ${n1}`;
      if (lang === 'it') return `Composta di ${n1}`;
      return `${n1} fruit purée`;
    }
    if (lang === 'ko') return n2 ? `${n1} ${n2} 매쉬 수프` : `${n1} 채소 매쉬`;
    if (lang === 'de') return n2 ? `${n1}-${n2}-Gemüsesuppe` : `${n1}-Gemüse-Mus`;
    if (lang === 'fr') return n2 ? `Velouté ${n1} & ${n2}` : `Purée ${n1}`;
    if (lang === 'it') return n2 ? `Vellutata ${n1} & ${n2}` : `Passato ${n1}`;
    return n2 ? `${n1} & ${n2} mash soup` : `${n1} vegetable mash`;
  }

  if (kind === 'blw') {
    if (slot === 'snack' || slot === 'afternoon' || slot === 'evening') {
      if (lang === 'ko') return `${n1} 핑거푸드`;
      if (lang === 'de') return `${n1}-Fingerfood`;
      if (lang === 'fr') return `Bâtonnets de ${n1}`;
      if (lang === 'it') return `Finger food di ${n1}`;
      return `${n1} finger food`;
    }
    if (lang === 'ko') return `${n1} 소프트 스틱`;
    if (lang === 'de') return `${n1}-Softsticks`;
    if (lang === 'fr') return `${n1} en bâtonnets`;
    if (lang === 'it') return `Bastoncini morbidi di ${n1}`;
    return `${n1} soft sticks`;
  }

  if (kind === 'cube') {
    if (lang === 'ko') return n2 ? `${n1} ${n2} 큐브` : `${n1} 큐브`;
    if (lang === 'de') return n2 ? `${n1}-${n2}-Würfel` : `${n1}-Würfel`;
    if (lang === 'fr') return n2 ? `Cubes ${n1} & ${n2}` : `Cubes de ${n1}`;
    if (lang === 'it') return n2 ? `Cubetti ${n1} & ${n2}` : `Cubetti di ${n1}`;
    return n2 ? `${n1} & ${n2} cubes` : `${n1} cubes`;
  }

  if (kind === 'topping') {
    if (slot === 'morning' || stage === 'early') {
      if (lang === 'ko') return `${n1} 미음`;
      if (lang === 'de') return `${n1}-Brei`;
      if (lang === 'fr') return `Purée de ${n1}`;
      if (lang === 'it') return `Pappa di ${n1}`;
      return `${n1} mush`;
    }
    if (slot === 'snack') {
      if (lang === 'ko') return `${n1} 토핑 간식`;
      if (lang === 'de') return `${n1}-Topping-Snack`;
      if (lang === 'fr') return `Collation ${n1}`;
      if (lang === 'it') return `Merenda ${n1}`;
      return `${n1} topping snack`;
    }
    if (lang === 'ko') return n2 ? `${n1} ${n2} 토핑밥` : `${n1} 토핑 식사`;
    if (lang === 'de') return n2 ? `${n1} mit ${n2}-Topping` : `${n1} mit Topping`;
    if (lang === 'fr') return n2 ? `${n1} avec ${n2}` : `${n1} avec topping`;
    if (lang === 'it') return n2 ? `${n1} con ${n2}` : `${n1} con topping`;
    return n2 ? `${n1} with ${n2} topping` : `${n1} with topping`;
  }

  if (stage === 'early') {
    if (lang === 'ko') return `${n1} 퓨레`;
    if (lang === 'de') return `${n1}-Brei`;
    if (lang === 'fr') return `Purée de ${n1}`;
    if (lang === 'it') return `Purea di ${n1}`;
    return `${n1} purée`;
  }

  if (stage === 'mid') {
    if (lang === 'ko') return n2 ? `${n1} ${n2} 죽` : `${n1} 죽`;
    if (lang === 'de') return n2 ? `${n1}-${n2}-Brei` : `${n1}-Brei`;
    if (lang === 'fr') return n2 ? `Bouillie ${n1} & ${n2}` : `Bouillie de ${n1}`;
    if (lang === 'it') return n2 ? `Pappa ${n1} & ${n2}` : `Pappa di ${n1}`;
    return n2 ? `${n1} & ${n2} porridge` : `${n1} porridge`;
  }

  const ftName = foodType
    ? loc(lang, foodType.name, foodType.name_en, foodType.name_de, foodType.name_fr, foodType.name_it)
    : '';
  const suffix = ftName
    ? ` ${ftName}`
    : lang === 'ko'
      ? ' 이유식'
      : lang === 'de'
        ? ' Beikost'
        : lang === 'fr'
          ? ' diversification'
          : lang === 'it'
            ? ' svezzamento'
            : ' meal';
  return n2 ? `${n1} & ${n2}${suffix}` : `${n1}${suffix}`;
}

const koToddlerDishes: Record<string, Record<MealSlot, string[]>> = {
  grain: {
    morning: ['볶음밥', '주먹밥', '달걀 볶음밥', '야채죽'],
    afternoon: ['덮밥', '리조또', '국밥', '볶음밥'],
    evening: ['야채 리조또', '잡곡 덮밥', '채소죽', '현미 볶음밥'],
    snack: ['삼각 주먹밥', '찐 쌀떡', '오트밀 쿠키', '현미 뻥튀기'],
  },
  vegetable: {
    morning: ['채소 달걀볶음', '나물 비빔밥', '채소 오믈렛', '채소 볶음밥'],
    afternoon: ['채소 된장국', '채소 볶음', '야채 조림', '미소 채소수프'],
    evening: ['채소 찌개', '나물 무침 & 밥', '야채 구이', '채소 조림'],
    snack: ['찐 채소 스틱', '채소 떡볶이', '구운 채소', '채소 볶음'],
  },
  protein: {
    morning: ['달걀말이', '소고기 볶음밥', '닭고기 볶음밥', '달걀 스크램블'],
    afternoon: ['고기 덮밥', '달걀 볶음밥', '두부 조림', '닭고기 볶음'],
    evening: ['소고기 구이', '닭고기 찜', '생선 조림', '고기완자 탕'],
    snack: ['삶은 달걀', '치즈 스틱', '두부 핑거', '닭가슴살 볼'],
  },
  fruit: {
    morning: ['과일 요거트볼', '과일 오트밀', '과일 스무디볼', '과일 팬케이크'],
    afternoon: ['과일 요거트', '과일 샐러드', '과일 조림', '과일 라이스볼'],
    evening: ['과일 채', '요거트 과일볼', '과일 스무디', '과일 찐빵'],
    snack: ['과일 조각', '과일 요거트', '과일 스틱', '과일 젤리'],
  },
  etc: {
    morning: ['달걀 볶음밥', '야채죽', '채소 오믈렛', '볶음밥'],
    afternoon: ['채소 볶음', '국밥', '덮밥', '조림'],
    evening: ['찌개', '조림', '볶음', '국'],
    snack: ['핑거푸드', '간식', '찐 간식', '떡'],
  },
};

const enToddlerDishes: Record<string, Record<MealSlot, string[]>> = {
  grain: {
    morning: ['fried rice', 'rice ball', 'egg fried rice', 'veggie porridge'],
    afternoon: ['rice bowl', 'risotto', 'congee', 'grain bowl'],
    evening: ['veggie risotto', 'multigrain bowl', 'rice porridge', 'brown rice stir-fry'],
    snack: ['onigiri', 'rice cake', 'oat cookie', 'puffed rice'],
  },
  vegetable: {
    morning: ['veggie egg scramble', 'namul bibimbap', 'veggie omelette', 'veggie fried rice'],
    afternoon: ['miso veggie soup', 'stir-fried veggies', 'braised veggies', 'veggie soup'],
    evening: ['veggie stew', 'seasoned greens & rice', 'roasted veggies', 'braised vegetables'],
    snack: ['steamed veggie sticks', 'veggie tteokbokki', 'roasted veggies', 'veggie stir-fry'],
  },
  protein: {
    morning: ['egg roll', 'beef fried rice', 'chicken fried rice', 'scrambled eggs'],
    afternoon: ['meat rice bowl', 'egg fried rice', 'braised tofu', 'chicken stir-fry'],
    evening: ['grilled beef', 'steamed chicken', 'braised fish', 'meatball soup'],
    snack: ['boiled egg', 'cheese sticks', 'tofu fingers', 'chicken ball'],
  },
  fruit: {
    morning: ['fruit yogurt bowl', 'fruit oatmeal', 'fruit smoothie bowl', 'fruit pancake'],
    afternoon: ['fruit yogurt', 'fruit salad', 'stewed fruit', 'fruit rice bowl'],
    evening: ['fruit salad', 'yogurt fruit bowl', 'fruit smoothie', 'fruit bun'],
    snack: ['fruit pieces', 'fruit yogurt', 'fruit sticks', 'fruit jelly'],
  },
  etc: {
    morning: ['egg fried rice', 'veggie porridge', 'veggie omelette', 'fried rice'],
    afternoon: ['veggie stir-fry', 'rice soup', 'rice bowl', 'braised dish'],
    evening: ['stew', 'braised dish', 'stir-fry', 'soup'],
    snack: ['finger food', 'snack', 'steamed snack', 'rice cake'],
  },
};

const deToddlerDishes: Record<string, Record<MealSlot, string[]>> = {
  grain: {
    morning: ['Haferbrei', 'Reisbrei', 'Grießbrei', 'Getreidebrei'],
    afternoon: ['Reistopf', 'Hirse-Bowl', 'Grießauflauf', 'Getreidebrei'],
    evening: ['Gemüse-Risotto', 'Vollkornbrei', 'Haferflocken-Topf', 'Dinkel-Brei'],
    snack: ['Reiskuchen', 'Haferkeks', 'Reiscräcker', 'Dinkelwaffel'],
  },
  vegetable: {
    morning: ['Gemüse-Omelett', 'Gemüsebrei', 'Karotten-Rührei', 'Zucchini-Pfanne'],
    afternoon: ['Gemüsesuppe', 'Gedünstetes Gemüse', 'Gemüse-Eintopf', 'Brokkoli-Topf'],
    evening: ['Gemüseeintopf', 'Gebackenes Gemüse', 'Ofengemüse', 'Gemüse-Auflauf'],
    snack: ['Gemüsesticks', 'Karotten-Snack', 'Gedünstetes Gemüse', 'Paprika-Sticks'],
  },
  protein: {
    morning: ['Rührei', 'Fleisch-Brei', 'Hühner-Brei', 'Eier-Pfanne'],
    afternoon: ['Fleisch-Eintopf', 'Linsen-Brei', 'Tofu-Pfanne', 'Hühnchen-Topf'],
    evening: ['Rindfleisch-Gemüse', 'Hühnchen-Eintopf', 'Fisch-Topf', 'Fleisch-Suppe'],
    snack: ['Hartgekochtes Ei', 'Käsewürfel', 'Tofu-Finger', 'Hähnchen-Bällchen'],
  },
  fruit: {
    morning: ['Obstmus', 'Obst-Haferbrei', 'Frucht-Joghurt', 'Obst-Pfannkuchen'],
    afternoon: ['Obstjoghurt', 'Obstsalat', 'Gedünstetes Obst', 'Frucht-Brei'],
    evening: ['Obstsalat', 'Joghurt-Obst-Bowl', 'Obstmus', 'Obst-Brei'],
    snack: ['Obstscheiben', 'Obstjoghurt', 'Obststicks', 'Frucht-Gelee'],
  },
  etc: {
    morning: ['Gemüse-Rührei', 'Getreidebrei', 'Gemüse-Omelett', 'Brei'],
    afternoon: ['Gemüse-Topf', 'Eintopf', 'Gemüse-Bowl', 'Auflauf'],
    evening: ['Eintopf', 'Auflauf', 'Pfanne', 'Suppe'],
    snack: ['Finger Food', 'Snack', 'Gedämpfter Snack', 'Reiskuchen'],
  },
};

const frToddlerDishes: Record<string, Record<MealSlot, string[]>> = {
  grain: {
    morning: ['bouillie d\'avoine', 'bouillie de riz', 'semoule au lait', 'porridge'],
    afternoon: ['riz à la tomate', 'risotto', 'soupe de riz', 'pâtes molles'],
    evening: ['risotto aux légumes', 'riz complet', 'semoule aux légumes', 'gratin de riz'],
    snack: ['galette de riz', 'biscuit avoine', 'pain mie', 'tartine molle'],
  },
  vegetable: {
    morning: ['omelette aux légumes', 'purée légumes', 'poêlée carottes', 'soufflé courgette'],
    afternoon: ['soupe légumes', 'légumes vapeur', 'gratin légumes', 'velouté brocoli'],
    evening: ['ratatouille douce', 'légumes rôtis', 'gratin courgettes', 'poêlée légumes'],
    snack: ['bâtonnets légumes', 'carottes vapeur', 'purée légumes', 'tomates cerises'],
  },
  protein: {
    morning: ['omelette', 'hachis parmentier', 'poulet haché', 'œufs brouillés'],
    afternoon: ['blanquette de veau', 'poulet à la vapeur', 'brandade de morue', 'gratin bœuf'],
    evening: ['bœuf haché', 'poulet vapeur', 'poisson blanc', 'soufflé au fromage'],
    snack: ['œuf dur', 'fromage blanc', 'yaourt nature', 'gruyère râpé'],
  },
  fruit: {
    morning: ['compote pomme', 'purée banane', 'smoothie fruits', 'salade de fruits'],
    afternoon: ['compote fruits', 'mousse de fruits', 'fruits pochés', 'fromage blanc fruits'],
    evening: ['salade de fruits', 'compote poire', 'purée pêche', 'gelée de fruits'],
    snack: ['fruits mixés', 'compote', 'bâtonnets de fruits', 'smoothie'],
  },
  etc: {
    morning: ['omelette légumes', 'bouillie', 'soufflé', 'porridge'],
    afternoon: ['soupe', 'gratin', 'velouté', 'purée mixte'],
    evening: ['gratin', 'soupe', 'purée', 'velouté'],
    snack: ['finger food', 'collation', 'compote', 'galette'],
  },
};

const itToddlerDishes: Record<string, Record<MealSlot, string[]>> = {
  grain: {
    morning: ['pappa di riso', 'pappa d\'avena', 'semolino', 'pappa di cereali'],
    afternoon: ['riso al pomodoro', 'risotto', 'pastina in brodo', 'minestrina di riso'],
    evening: ['risotto alle verdure', 'riso integrale', 'pastina cremosa', 'sformato di riso'],
    snack: ['gallette di riso', 'biscotto avena', 'fette biscottate', 'grissini morbidi'],
  },
  vegetable: {
    morning: ['frittata verdure', 'purèa di verdure', 'carote in padella', 'polpette zucchine'],
    afternoon: ['minestra di verdure', 'verdure al vapore', 'vellutata broccoli', 'passato verdure'],
    evening: ['verdure al forno', 'zucchine gratinate', 'teglia di verdure', 'minestrone'],
    snack: ['bastoncini verdure', 'carote vapore', 'purea verdure', 'pomodorini'],
  },
  protein: {
    morning: ['frittata', 'polpettine di carne', 'pollo in umido', 'uova strapazzate'],
    afternoon: ['spezzatino morbido', 'pollo al vapore', 'merluzzo in umido', 'uova al tegamino'],
    evening: ['carne trita', 'pollo lesso', 'pesce al vapore', 'sformato di formaggio'],
    snack: ['uovo sodo', 'ricotta', 'yogurt bianco', 'parmigiano grattugiato'],
  },
  fruit: {
    morning: ['frullato di mela', 'purèa di banana', 'macedonia frullata', 'composta di frutta'],
    afternoon: ['composta', 'mousse di frutta', 'frutta cotta', 'yogurt con frutta'],
    evening: ['macedonia', 'composta di pera', 'purèa di pesca', 'gelatina di frutta'],
    snack: ['frutta frullata', 'composta', 'spiedini di frutta', 'smoothie'],
  },
  etc: {
    morning: ['frittata verdure', 'pappa di cereali', 'sformato', 'porridge'],
    afternoon: ['minestra', 'sformato', 'vellutata', 'purèa mista'],
    evening: ['sformato', 'minestra', 'purèa', 'vellutata'],
    snack: ['finger food', 'spuntino', 'composta', 'galletta'],
  },
};

function buildToddlerMealName(
  ing1: Ingredient,
  ing2: Ingredient | undefined,
  slot: MealSlot,
  rotation: number,
  lang: Language,
  kind: FoodTypeKind,
): string {
  if (isVegetarianKind(kind)) {
    return buildVegetarianMeal(slot, rotation, lang);
  }

  const safeIng1 = isMeatIngredient(ing1) ? pickSafeIngredient(VEGAN_STAPLES, rotation) : ing1;
  const safeIng2 = ing2 && isMeatIngredient(ing2) ? pickSafeIngredient(VEGAN_STAPLES, rotation + 1) : ing2;
  const n1 = loc(lang, safeIng1.name, safeIng1.name_en, safeIng1.name_de, safeIng1.name_fr, safeIng1.name_it);
  const n2 = safeIng2 ? loc(lang, safeIng2.name, safeIng2.name_en, safeIng2.name_de, safeIng2.name_fr, safeIng2.name_it) : null;
  const cat = safeIng1.category in koToddlerDishes ? safeIng1.category : 'etc';
  const dishes =
    lang === 'ko'
      ? koToddlerDishes
      : lang === 'de'
        ? deToddlerDishes
        : lang === 'fr'
          ? frToddlerDishes
          : lang === 'it'
            ? itToddlerDishes
            : enToddlerDishes;
  let options = dishes[cat][slot].filter((d) => !containsMeatOrFishText(d));
  if (options.length === 0) {
    options = VEGAN_MEAL_TEMPLATES[lang]?.[slot] ?? VEGAN_MEAL_TEMPLATES.en[slot];
  }
  const method = options[rotation % options.length];

  if (slot === 'snack') return method;

  if (n2 && safeIng1.category !== 'fruit') {
    const dishWord = method.includes(' ') ? method.split(' ').slice(-1)[0] : method;
    return lang === 'ko' ? `${n1} ${n2} ${dishWord}` : `${n1} & ${n2} ${dishWord}`;
  }
  return method.includes(n1) ? method : `${n1} ${method}`;
}

function buildStandardDay(
  dayNum: number,
  stage: StageType,
  dayIndex: number,
  stageIngs: Ingredient[],
  foodType: FoodType | undefined,
  lang: Language,
  isTransition: boolean,
): DayPlan {
  const kind = getFoodTypeKind(foodType);

  if (isVegetarianKind(kind)) {
    const meals: Record<MealSlot, string> = {
      morning: buildVegetarianMeal('morning', dayIndex, lang),
      afternoon: buildVegetarianMeal('afternoon', dayIndex + 1, lang),
      evening: buildVegetarianMeal('evening', dayIndex + 2, lang),
      snack: buildVegetarianMeal('snack', dayIndex + 3, lang),
    };
    return { day: dayNum, stage, ...meals, isTransition };
  }

  const a = stageIngs[dayIndex % stageIngs.length];
  const b = stageIngs[(dayIndex + 1) % stageIngs.length];
  const c = stageIngs[(dayIndex + 2) % stageIngs.length];
  const d = stageIngs[(dayIndex + 3) % stageIngs.length];

  const slotPairs: Record<MealSlot, [Ingredient, Ingredient | undefined]> = {
    morning: [a, stage !== 'early' ? b : undefined],
    afternoon: [b, stage === 'late' ? c : undefined],
    evening: [c, d],
    snack: [d, undefined],
  };

  const meals: Record<MealSlot, string> = {
    morning: '',
    afternoon: '',
    evening: '',
    snack: '',
  };

  for (const slot of MEAL_SLOTS) {
    if (!shouldFillMealSlot(stage, kind, slot)) continue;
    const [primary, secondary] = slotPairs[slot];
    meals[slot] = buildMealName(primary, secondary, foodType, stage, slot, lang);
  }

  return {
    day: dayNum,
    stage,
    ...meals,
    isTransition,
  };
}

function buildToddlerDay(
  dayNum: number,
  dayIndex: number,
  stageIngs: Ingredient[],
  lang: Language,
  kind: FoodTypeKind,
  isTransition: boolean,
): DayPlan {
  if (isVegetarianKind(kind)) {
    return {
      day: dayNum,
      stage: 'toddler',
      morning: buildVegetarianMeal('morning', dayIndex, lang),
      afternoon: buildVegetarianMeal('afternoon', dayIndex + 1, lang),
      evening: buildVegetarianMeal('evening', dayIndex + 2, lang),
      snack: buildVegetarianMeal('snack', dayIndex + 3, lang),
      isTransition,
    };
  }

  const a = pickSafeIngredient(stageIngs, dayIndex);
  const b = pickSafeIngredient(stageIngs, dayIndex + 1);
  const c = pickSafeIngredient(stageIngs, dayIndex + 2);
  const d = pickSafeIngredient(stageIngs, dayIndex + 3);
  const rot = dayIndex;

  return {
    day: dayNum,
    stage: 'toddler',
    morning: buildToddlerMealName(a, b, 'morning', rot, lang, kind),
    afternoon: buildToddlerMealName(b, c, 'afternoon', rot + 1, lang, kind),
    evening: buildToddlerMealName(c, d, 'evening', rot + 2, lang, kind),
    snack: buildToddlerMealName(d, undefined, 'snack', rot + 3, lang, kind),
    isTransition,
  };
}

function buildDays(
  stage: StageType,
  startDay: number,
  count: number,
  isTransition: boolean,
  activeIngredients: Ingredient[],
  foodType: FoodType | undefined,
  lang: Language,
): DayPlan[] {
  const stageIngs = getIngredientsByStage(activeIngredients, stage);
  const kind = getFoodTypeKind(foodType);
  const days: DayPlan[] = [];

  for (let i = 0; i < count; i++) {
    const dayNum = startDay + i;
    days.push(
      stage === 'toddler'
        ? buildToddlerDay(dayNum, i, stageIngs, lang, kind, i === 0 && isTransition)
        : buildStandardDay(dayNum, stage, i, stageIngs, foodType, lang, i === 0 && isTransition),
    );
  }

  return days;
}

function sanitizeMealSlot(value: string, slot: MealSlot, dayIndex: number, lang: Language): string {
  if (!value || value === '—' || containsMeatOrFishText(value)) {
    return buildVegetarianMeal(slot, dayIndex, lang);
  }
  return value;
}

function finalizeVegetarianPlan(days: DayPlan[], lang: Language): DayPlan[] {
  return days.map((day, index) => ({
    ...day,
    morning: sanitizeMealSlot(day.morning, 'morning', index, lang),
    afternoon: sanitizeMealSlot(day.afternoon, 'afternoon', index + 1, lang),
    evening: sanitizeMealSlot(day.evening, 'evening', index + 2, lang),
    snack: sanitizeMealSlot(day.snack, 'snack', index + 3, lang),
  }));
}

export function generateMealPlan(params: {
  stageType: StageType;
  planType: PlanType;
  ingredients: Ingredient[];
  selectedIngredientIds: string[];
  foodType: FoodType | undefined;
  lang: Language;
}): DayPlan[] {
  const { stageType, planType, ingredients, selectedIngredientIds, foodType, lang } = params;
  const kind = getFoodTypeKind(foodType);
  const baseIngredients =
    selectedIngredientIds.length > 0
      ? ingredients.filter((ing) => selectedIngredientIds.includes(ing.id))
      : ingredients;
  const activeIngredients = filterIngredientsForKind(baseIngredients, kind);

  const totalDays = planType === 'weekly' ? 7 : 30;
  const nextStage = (s: StageType): StageType =>
    s === 'early' ? 'mid' : s === 'mid' ? 'late' : 'toddler';

  let plan: DayPlan[];

  if (planType === 'weekly' || stageType === 'late' || stageType === 'toddler') {
    plan = buildDays(stageType, 1, totalDays, false, activeIngredients, foodType, lang);
  } else {
    const half = Math.floor(totalDays / 2);
    plan = [
      ...buildDays(stageType, 1, half, false, activeIngredients, foodType, lang),
      ...buildDays(nextStage(stageType), half + 1, totalDays - half, true, activeIngredients, foodType, lang),
    ];
  }

  if (isVegetarianKind(kind)) {
    plan = finalizeVegetarianPlan(plan, lang);
  }

  return plan;
}
