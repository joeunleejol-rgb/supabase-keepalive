const fs = require('fs');
const path = require('path');

const ids = {
  KR_TOPPING_CUBE: 'food-kr-topping-cube',
  KR_BLW: 'food-kr-blw',
  KR_VEGAN: 'food-kr-vegan-vegetarian',
  EU_PUREE_MASH: 'food-eu-puree-mash',
  EU_BLW: 'food-eu-blw',
  EU_BIO_VEG: 'food-eu-bio-vegetarian',
  PLANT_PROTEIN: [
    'local-ing-peas',
    'local-ing-lentils',
    'local-ing-fava-beans',
    'local-ing-chickpeas',
    'local-ing-tempeh',
  ],
};

function replaceIdRefs(source) {
  let out = source;
  for (const [key, value] of Object.entries(ids)) {
    if (key === 'PLANT_PROTEIN') {
      value.forEach((id, index) => {
        out = out.replace(`PLANT_PROTEIN_INGREDIENT_IDS[${index}]`, JSON.stringify(id));
      });
    } else {
      out = out.replace(`FOOD_TYPE_IDS.${key}`, JSON.stringify(value));
    }
  }
  return out;
}

const cache = JSON.parse(
  fs.readFileSync(path.join(__dirname, '.ingredients_full_cache.json'), 'utf8'),
);

const ingredientsDataSrc = fs.readFileSync(
  path.join(__dirname, '../src/data/ingredientsData.ts'),
  'utf8',
);
const plantMatch = ingredientsDataSrc.match(
  /export const PLANT_PROTEIN_INGREDIENTS[^=]*=\s*(\[[\s\S]*?\n\]);/,
);
if (!plantMatch) {
  console.error('Failed to parse PLANT_PROTEIN_INGREDIENTS');
  process.exit(1);
}
const plantProteins = Function(`"use strict"; return (${replaceIdRefs(plantMatch[1])});`)();

const foodTypesSrc = fs.readFileSync(path.join(__dirname, '../src/data/foodTypesData.ts'), 'utf8');
const krMatch = foodTypesSrc.match(/export const KR_FOOD_TYPES[^=]*=\s*(\[[\s\S]*?\n\]);/);
const euMatch = foodTypesSrc.match(/export const EU_FOOD_TYPES[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!krMatch || !euMatch) {
  console.error('Failed to parse food types');
  process.exit(1);
}
const krFoodTypes = Function(`"use strict"; return (${replaceIdRefs(krMatch[1])});`)();
const euFoodTypes = Function(`"use strict"; return (${replaceIdRefs(euMatch[1])});`)();
const foodTypes = [...krFoodTypes, ...euFoodTypes];

function normalizeName(value) {
  return (value ?? '').trim().toLowerCase();
}

const ingredients = cache.map((row) => {
  const { created_at, ...rest } = row;
  return rest;
});

for (const local of plantProteins) {
  const exists = ingredients.some(
    (ing) =>
      ing.id === local.id ||
      normalizeName(ing.name) === normalizeName(local.name) ||
      normalizeName(ing.name_en) === normalizeName(local.name_en),
  );
  if (!exists) ingredients.push(local);
}

ingredients.sort((a, b) => a.sort_order - b.sort_order || a.name.localeCompare(b.name, 'ko'));

function esc(value) {
  if (value == null) return 'NULL';
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  return `'${String(value).replace(/'/g, "''")}'`;
}

const foodTypeColumns = [
  'id', 'name', 'name_en', 'name_de', 'name_fr', 'name_it',
  'description', 'description_en', 'description_de', 'description_fr', 'description_it',
  'icon_name', 'color_theme', 'sort_order',
  'steps', 'steps_en', 'steps_de', 'steps_fr', 'steps_it',
  'tips', 'tips_en', 'tips_de', 'tips_fr', 'tips_it',
];

const ingredientColumns = [
  'id', 'name', 'name_en', 'name_de', 'name_fr', 'name_it',
  'category', 'description', 'description_en',
  'recommended_month', 'icon_name', 'color_theme', 'sort_order', 'is_starter_recommended',
];

const sql = [
  '-- =============================================================================',
  '-- 2U 이유식 — food_types + ingredients 시드 데이터',
  '-- 생성: node scripts/generate-ingredients-seed-sql.cjs',
  '-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run',
  '-- =============================================================================',
  '',
  'BEGIN;',
  '',
  'DELETE FROM public.ingredients;',
  'DELETE FROM public.food_types;',
  '',
];

for (const ft of foodTypes) {
  const values = foodTypeColumns.map((col) => esc(ft[col])).join(',\n  ');
  sql.push(`INSERT INTO public.food_types (`);
  sql.push(`  ${foodTypeColumns.join(',\n  ')}`);
  sql.push(`) VALUES (`);
  sql.push(`  ${values}`);
  sql.push(');');
  sql.push('');
}

for (const ing of ingredients) {
  const values = ingredientColumns.map((col) => esc(ing[col])).join(',\n  ');
  sql.push(`INSERT INTO public.ingredients (`);
  sql.push(`  ${ingredientColumns.join(',\n  ')}`);
  sql.push(`) VALUES (`);
  sql.push(`  ${values}`);
  sql.push(');');
  sql.push('');
}

sql.push('COMMIT;');
sql.push('');

const dataDir = path.join(__dirname, '../src/data');
fs.writeFileSync(path.join(dataDir, 'defaultIngredients.json'), JSON.stringify(ingredients, null, 2));

const outPath = path.join(__dirname, 'seed_ingredients.sql');
fs.writeFileSync(outPath, sql.join('\n'));
console.log(`Wrote ${foodTypes.length} food types`);
console.log(`Wrote ${ingredients.length} ingredients -> src/data/defaultIngredients.json`);
console.log(`Wrote SQL -> ${outPath}`);
