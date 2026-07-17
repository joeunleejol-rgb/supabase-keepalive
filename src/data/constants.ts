/** Supabase `tools.id` — stable keys for local content overrides in toolsData.ts */
export const TOOL_IDS = {
  CUTTING_BOARD: 'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  COOKING_POT: '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  CHOPPER: 'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  SILICONE_SPOON: 'e68c601e-acfa-433f-96ed-ef68165a7a15',
  MEASURING_CUP: '66f26214-411b-41c0-b098-a93b3d591b76',
  BIB: 'abfb9ad6-bfa1-470f-822f-3f477535438f',
  DIGITAL_SCALE: '9816ff25-2bf0-491f-a102-4e1a53190832',
  STRAW_CUP: 'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  SILICONE_SPATULA: '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  HIGH_CHAIR: 'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  FOOD_MAKER: 'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  STORAGE_CONTAINER: 'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  STRAINER: '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  DEDICATED_KNIFE: '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  DISH_SET: 'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  WEANING_BOOK: '57f137f1-53ac-497f-8674-08565ae0f11f',
  CUBE_TRAY: '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
} as const;

export type ToolId = (typeof TOOL_IDS)[keyof typeof TOOL_IDS];

/** Regional food type ids — local catalog in foodTypesData.ts */
export const FOOD_TYPE_IDS = {
  KR_TOPPING_CUBE: 'food-kr-topping-cube',
  KR_BLW: 'food-kr-blw',
  KR_VEGAN: 'food-kr-vegan-vegetarian',
  EU_PUREE_MASH: 'food-eu-puree-mash',
  EU_BLW: 'food-eu-blw',
  EU_BIO_VEG: 'food-eu-bio-vegetarian',
} as const;

export type FoodTypeId = (typeof FOOD_TYPE_IDS)[keyof typeof FOOD_TYPE_IDS];

export const EU_COUNTRY_CODES = ['DE', 'FR', 'IT'] as const;
export type EuCountryCode = (typeof EU_COUNTRY_CODES)[number];

/** Markets with localized recommended books & articles */
export const RECOMMENDED_CONTENT_MARKETS = ['KR', 'DE', 'FR', 'IT'] as const;
export type RecommendedContentMarket = (typeof RECOMMENDED_CONTENT_MARKETS)[number];

/** Amazon TLD used for regional deep links */
export const AMAZON_MARKET_DOMAINS = {
  DE: 'de',
  FR: 'fr',
  IT: 'it',
} as const;

/** Kyobo Book app URL scheme for KR market deep links */
export const KYOBO_APP_SCHEME = 'kyobobook' as const;

/** Food types that require a meat-free ingredient pool and meal templates */
export const VEGETARIAN_FOOD_TYPE_IDS = [
  FOOD_TYPE_IDS.KR_VEGAN,
  FOOD_TYPE_IDS.EU_BIO_VEG,
] as const;

/** Local plant-protein ingredient ids merged from ingredientsData.ts */
export const PLANT_PROTEIN_INGREDIENT_IDS = [
  'local-ing-peas',
  'local-ing-lentils',
  'local-ing-fava-beans',
  'local-ing-chickpeas',
  'local-ing-tempeh',
] as const;

export type PlantProteinIngredientId = (typeof PLANT_PROTEIN_INGREDIENT_IDS)[number];

/** Substrings that must never appear in vegetarian/vegan meal plan output or UI */
export const MEAT_BANNED_KEYWORDS = [
  '소고기', '닭고기', '닭', '돼지', '돼지고기', '고기', '육류', '생선', '흰살생선', '연어', '새우',
  '달걀', '계란', '전란', '계란노른자', '노른자',
  'beef', 'chicken', 'pork', 'fish', 'meat', 'lamb', 'turkey', 'ham', 'sausage', 'bacon', 'veal', 'duck',
  'salmon', 'shrimp', 'prawn', 'prawns', 'shellfish', 'seafood', 'cod', 'tuna', 'white fish', 'whitefish',
  'egg yolk', 'yolk', 'whole egg',
  'Rindfleisch', 'Hähnchen', 'Hühner', 'Hühnchen', 'Fleisch', 'Schwein', 'Schweinefleisch', 'Fisch', 'Lamm', 'Pute',
  'Lachs', 'Garnelen', 'Krabben', 'Krebs', 'Eigelb', 'Weißfisch',
  'boeuf', 'poulet', 'porc', 'poisson', 'agneau', 'canard', 'veau', 'saumon', 'crevette', 'crevettes',
  'jaune d\'œuf', 'poisson blanc', 'fruits de mer',
  'manzo', 'pollo', 'maiale', 'pesce', 'agnello', 'anatra', 'salmone', 'gamberi', 'gamberetti', 'gambero',
  'tuorlo', 'pesce bianco',
  'egg', 'eggs', 'Ei', 'Eier', 'œuf', 'uovo', 'uova',
  '치즈', 'cheese', 'Käse', 'fromage', 'formaggio',
  '고기완자', 'meatball', 'Fleischbällchen',
] as const;
