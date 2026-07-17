import { TOOL_IDS } from './constants';

export type ToolLocalizedNames = {
  name_en: string;
  name_de: string;
  name_fr: string;
  name_it: string;
  product_name: string | null;
  product_name_en: string | null;
};

/** Display names + default product labels keyed by Supabase tool id */
export const TOOL_LOCALIZED_NAMES: Record<string, ToolLocalizedNames> = {
  [TOOL_IDS.CUTTING_BOARD]: {
    name_en: 'Baby Food Cutting Board',
    name_de: 'Beikost-Schneidebrett',
    name_fr: 'Planche à découper bébé',
    name_it: 'Tagliere per bebè',
    product_name: '실리콘 이유식 전용 도마',
    product_name_en: 'Silicone baby food cutting board',
  },
  [TOOL_IDS.COOKING_POT]: {
    name_en: 'Baby Food Cooking Pot',
    name_de: 'Beikost-Kochtopf',
    name_fr: 'Casserole pour diversification',
    name_it: 'Pentola per svezzamento',
    product_name: '스테인리스 이유식 냄비',
    product_name_en: 'Stainless baby food pot',
  },
  [TOOL_IDS.CHOPPER]: {
    name_en: 'Baby Food Chopper',
    name_de: 'Beikost-Hacker',
    name_fr: 'Hachoir pour diversification',
    name_it: 'Tritatutto per svezzamento',
    product_name: '이유식 소형 초퍼',
    product_name_en: 'Compact baby food chopper',
  },
  [TOOL_IDS.SILICONE_SPOON]: {
    name_en: 'Silicone Baby Spoon',
    name_de: 'Silikon-Baby-Löffel',
    name_fr: 'Cuillère silicone bébé',
    name_it: 'Cucchiaio silicone bebè',
    product_name: '실리콘 이유식 스푼 세트',
    product_name_en: 'Silicone weaning spoon set',
  },
  [TOOL_IDS.MEASURING_CUP]: {
    name_en: 'Measuring Cup',
    name_de: 'Messbecher',
    name_fr: 'Verre doseur',
    name_it: 'Misurino',
    product_name: '이유식 계량컵',
    product_name_en: 'Baby food measuring cup',
  },
  [TOOL_IDS.BIB]: {
    name_en: 'Baby Bib',
    name_de: 'Baby-Lätzchen',
    name_fr: 'Bavoir bébé',
    name_it: 'Bavaglino bebè',
    product_name: '실리콘 이유식 턱받이',
    product_name_en: 'Silicone weaning bib',
  },
  [TOOL_IDS.DIGITAL_SCALE]: {
    name_en: 'Digital Kitchen Scale',
    name_de: 'Digitale Küchenwaage',
    name_fr: 'Balance de cuisine numérique',
    name_it: 'Bilancia da cucina digitale',
    product_name: '정밀 전자 저울',
    product_name_en: 'Precision digital kitchen scale',
  },
  [TOOL_IDS.STRAW_CUP]: {
    name_en: 'Straw Cup',
    name_de: 'Trinklernbecher mit Strohhalm',
    name_fr: 'Gobelet à paille',
    name_it: 'Bicchiere con cannuccia',
    product_name: '빨대컵 (흘림방지)',
    product_name_en: 'Spill-proof straw cup',
  },
  [TOOL_IDS.SILICONE_SPATULA]: {
    name_en: 'Silicone Spatula',
    name_de: 'Silikon-Spatel',
    name_fr: 'Spatule en silicone',
    name_it: 'Spatola in silicone',
    product_name: '실리콘 이유식 주걱',
    product_name_en: 'Silicone baby food spatula',
  },
  [TOOL_IDS.HIGH_CHAIR]: {
    name_en: 'High Chair',
    name_de: 'Hochstuhl',
    name_fr: 'Chaise haute',
    name_it: 'Seggiolone',
    product_name: '아기 식사용 의자',
    product_name_en: 'Baby high chair',
  },
  [TOOL_IDS.FOOD_MAKER]: {
    name_en: 'Baby Food Maker',
    name_de: 'Beikost-Zubereitungsgerät',
    name_fr: 'Robot cuiseur bébé',
    name_it: 'Robot per pappe',
    product_name: '이유식 소형 조리기',
    product_name_en: 'Compact baby food maker',
  },
  [TOOL_IDS.STORAGE_CONTAINER]: {
    name_en: 'Food Storage Containers',
    name_de: 'Aufbewahrungsbehälter',
    name_fr: 'Contenants de conservation',
    name_it: 'Contenitori per conservazione',
    product_name: '이유식 보관 용기 세트',
    product_name_en: 'Baby food storage container set',
  },
  [TOOL_IDS.STRAINER]: {
    name_en: 'Strainer',
    name_de: 'Sieb',
    name_fr: 'Passoire',
    name_it: 'Colino',
    product_name: '이유식 체/거름망',
    product_name_en: 'Fine mesh strainer',
  },
  [TOOL_IDS.DEDICATED_KNIFE]: {
    name_en: 'Baby Food Knife',
    name_de: 'Beikost-Messer',
    name_fr: 'Couteau pour diversification',
    name_it: 'Coltello per svezzamento',
    product_name: '이유식 전용 칼',
    product_name_en: 'Baby food prep knife',
  },
  [TOOL_IDS.DISH_SET]: {
    name_en: 'Baby Dish Set',
    name_de: 'Baby-Geschirr-Set',
    name_fr: 'Set de vaisselle bébé',
    name_it: 'Set stoviglie bebè',
    product_name: '흡착 아기 식기 세트',
    product_name_en: 'Suction baby dish set',
  },
  [TOOL_IDS.WEANING_BOOK]: {
    name_en: 'Weaning Guidebook',
    name_de: 'Beikost-Ratgeber',
    name_fr: 'Guide de diversification',
    name_it: 'Guida allo svezzamento',
    product_name: '삐뽀삐뽀 119 이유식',
    product_name_en: 'Beep Beep 119 Baby Food',
  },
  [TOOL_IDS.CUBE_TRAY]: {
    name_en: 'Cube Freezer Tray',
    name_de: 'Eiswürfelform für Beikost',
    name_fr: 'Bac à glaçons pour purées',
    name_it: 'Vaschetta cubetti per pappe',
    product_name: '실리콘 이유식 큐브틀',
    product_name_en: 'Silicone baby food cube tray',
  },
};
