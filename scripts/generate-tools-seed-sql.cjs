const fs = require('fs');
const path = require('path');

const cache = JSON.parse(
  fs.readFileSync(path.join(__dirname, '.tools_full_cache.json'), 'utf8'),
);

const toolsDataSrc = fs.readFileSync(path.join(__dirname, '../src/data/toolsData.ts'), 'utf8');
const textMatch = toolsDataSrc.match(/export const TOOLS_TEXT_CONTENT[^=]*=\s*(\{[\s\S]*?\n\};)/);
if (!textMatch) {
  console.error('Failed to parse TOOLS_TEXT_CONTENT');
  process.exit(1);
}

const ids = {
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
};

let textObjStr = textMatch[1].replace(/,\s*\};\s*$/, '}');
for (const [key, uuid] of Object.entries(ids)) {
  textObjStr = textObjStr.replace(`[TOOL_IDS.${key}]`, JSON.stringify(uuid));
}
const textOverrides = Function(`"use strict"; return (${textObjStr});`)();

const metaSrc = fs.readFileSync(path.join(__dirname, '../src/data/toolCatalogMeta.ts'), 'utf8');
const metaMatch = metaSrc.match(/export const TOOL_LOCALIZED_NAMES[^=]*=\s*(\{[\s\S]*?\n\};)/);
if (!metaMatch) {
  console.error('Failed to parse TOOL_LOCALIZED_NAMES');
  process.exit(1);
}

let metaObjStr = metaMatch[1].replace(/,\s*\};\s*$/, '}');
for (const [key, uuid] of Object.entries(ids)) {
  metaObjStr = metaObjStr.replace(`[TOOL_IDS.${key}]`, JSON.stringify(uuid));
}
const localizedMeta = Function(`"use strict"; return (${metaObjStr});`)();

const SEARCH_QUERIES = {
  [ids.CUTTING_BOARD]: { ko: '이유식 도마', en: 'baby food cutting board', de: 'Beikost Schneidebrett', fr: 'planche decouper bebe', it: 'tagliere bebe' },
  [ids.COOKING_POT]: { ko: '이유식 냄비', en: 'baby food pot', de: 'Beikost Topf', fr: 'casserole bebe', it: 'pentola bebe' },
  [ids.CHOPPER]: { ko: '이유식 초퍼', en: 'baby food chopper', de: 'Beikost Hacker', fr: 'hachoir bebe', it: 'tritatutto bebe' },
  [ids.SILICONE_SPOON]: { ko: '이유식 실리콘 스푼', en: 'silicone baby spoon', de: 'Silikon Baby Loeffel', fr: 'cuillere silicone bebe', it: 'cucchiaio silicone bebe' },
  [ids.MEASURING_CUP]: { ko: '이유식 계량컵', en: 'baby measuring cup', de: 'Messbecher Baby', fr: 'verre doseur bebe', it: 'misurino bebe' },
  [ids.BIB]: { ko: '이유식 턱받이', en: 'baby silicone bib', de: 'Baby Laetzchen', fr: 'bavoir silicone bebe', it: 'bavaglino silicone bebe' },
  [ids.DIGITAL_SCALE]: { ko: '주방 전자저울', en: 'digital kitchen scale', de: 'digitale Kuechenwaage', fr: 'balance cuisine numerique', it: 'bilancia cucina digitale' },
  [ids.STRAW_CUP]: { ko: '아기 빨대컵', en: 'baby straw cup', de: 'Trinklernbecher', fr: 'gobelet paille bebe', it: 'bicchiere cannuccia bebe' },
  [ids.SILICONE_SPATULA]: { ko: '실리콘 주걱', en: 'silicone spatula', de: 'Silikon Spatel', fr: 'spatule silicone', it: 'spatola silicone' },
  [ids.HIGH_CHAIR]: { ko: '아기 식사 의자', en: 'baby high chair', de: 'Hochstuhl Baby', fr: 'chaise haute bebe', it: 'seggiolone bebe' },
  [ids.FOOD_MAKER]: { ko: '이유식 조리기', en: 'baby food maker', de: 'Beikost Geraet', fr: 'robot cuiseur bebe', it: 'robot pappe bebe' },
  [ids.STORAGE_CONTAINER]: { ko: '이유식 보관용기', en: 'baby food storage containers', de: 'Beikost Behaelter', fr: 'contenants bebe', it: 'contenitori pappa bebe' },
  [ids.STRAINER]: { ko: '이유식 체', en: 'fine mesh strainer', de: 'Feinsieb', fr: 'passoire fine', it: 'colino fine' },
  [ids.DEDICATED_KNIFE]: { ko: '이유식 칼', en: 'baby food knife', de: 'Beikost Messer', fr: 'couteau bebe', it: 'coltello bebe' },
  [ids.DISH_SET]: { ko: '아기 식기세트', en: 'baby suction bowl set', de: 'Baby Geschirr Set', fr: 'set vaisselle bebe', it: 'set stoviglie bebe' },
  [ids.WEANING_BOOK]: {
    ko: '삐뽀삐뽀 119 이유식',
    en: 'baby weaning guidebook',
    de: 'Beikost Ratgeber',
    fr: 'guide diversification bebe',
    it: 'guida svezzamento bebe',
  },
  [ids.CUBE_TRAY]: { ko: '이유식 큐브틀', en: 'baby food cube tray', de: 'Eiswuerfelform Beikost', fr: 'bac glacons puree bebe', it: 'vaschetta cubetti pappa' },
};

function coupangSearch(query) {
  return `https://www.coupang.com/np/search?q=${encodeURIComponent(query)}`;
}

function amazonSearch(country, query) {
  const host = { DE: 'www.amazon.de', FR: 'www.amazon.fr', IT: 'www.amazon.it' }[country];
  return `https://${host}/s?k=${encodeURIComponent(query)}`;
}

const KYOBO_WEANING_BOOK = 'https://product.kyobobook.co.kr/detail/S000001967752';

function esc(value) {
  if (value == null) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

const tools = cache.map((row) => {
  const meta = localizedMeta[row.id] ?? {};
  const text = textOverrides[row.id] ?? {};
  return {
    ...row,
    ...meta,
    ...text,
    image_url: null,
    product_link: row.id === ids.WEANING_BOOK ? KYOBO_WEANING_BOOK : coupangSearch(SEARCH_QUERIES[row.id]?.ko ?? row.name),
    product_image_url: null,
  };
});

const productLinks = [];
let linkCounter = 1;
for (const tool of tools) {
  const q = SEARCH_QUERIES[tool.id];
  if (!q) continue;

  productLinks.push({
    id: `b2000001-0001-4000-8000-${String(linkCounter++).padStart(12, '0')}`,
    tool_id: tool.id,
    country_code: 'KR',
    product_name: localizedMeta[tool.id]?.product_name ?? tool.name,
    product_link: tool.id === ids.WEANING_BOOK ? KYOBO_WEANING_BOOK : coupangSearch(q.ko),
    store_name: tool.id === ids.WEANING_BOOK ? '교보문고' : 'Coupang',
  });

  for (const country of ['DE', 'FR', 'IT']) {
    const query = q[country.toLowerCase()] ?? q.en;
    productLinks.push({
      id: `b2000001-0001-4000-8000-${String(linkCounter++).padStart(12, '0')}`,
      tool_id: tool.id,
      country_code: country,
      product_name: localizedMeta[tool.id]?.product_name_en ?? tool.name_en ?? tool.name,
      product_link: amazonSearch(country, query),
      store_name: `Amazon.${country === 'DE' ? 'de' : country === 'FR' ? 'fr' : 'it'}`,
    });
  }
}

const dataDir = path.join(__dirname, '../src/data');
fs.writeFileSync(path.join(dataDir, 'defaultTools.json'), JSON.stringify(tools, null, 2));
fs.writeFileSync(path.join(dataDir, 'defaultToolProductLinks.json'), JSON.stringify(productLinks, null, 2));

const toolColumns = [
  'id', 'name', 'name_en', 'name_de', 'name_fr', 'name_it',
  'description', 'description_en', 'description_de', 'description_fr', 'description_it',
  'detail_description', 'detail_description_en', 'detail_description_de', 'detail_description_fr', 'detail_description_it',
  'category', 'icon_name', 'image_url', 'sort_order',
  'product_name', 'product_name_en', 'product_link', 'product_image_url',
];

const linkColumns = ['id', 'tool_id', 'country_code', 'product_name', 'product_link', 'store_name'];

const sql = [
  '-- =============================================================================',
  '-- 2U 이유식 — tools + tool_product_links 시드 데이터',
  '-- 생성: node scripts/generate-tools-seed-sql.cjs',
  '-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run',
  '-- =============================================================================',
  '',
  'BEGIN;',
  '',
  'DELETE FROM public.tool_product_links;',
  'DELETE FROM public.tools;',
  '',
];

for (const tool of tools) {
  const values = toolColumns.map((col) => esc(tool[col])).join(',\n  ');
  sql.push(`INSERT INTO public.tools (`);
  sql.push(`  ${toolColumns.join(',\n  ')}`);
  sql.push(`) VALUES (`);
  sql.push(`  ${values}`);
  sql.push(');');
  sql.push('');
}

for (const link of productLinks) {
  const values = linkColumns.map((col) => esc(link[col])).join(',\n  ');
  sql.push(`INSERT INTO public.tool_product_links (`);
  sql.push(`  ${linkColumns.join(',\n  ')}`);
  sql.push(`) VALUES (`);
  sql.push(`  ${values}`);
  sql.push(');');
  sql.push('');
}

sql.push('COMMIT;');
sql.push('');

const outPath = path.join(__dirname, 'seed_tools.sql');
fs.writeFileSync(outPath, sql.join('\n'));
console.log(`Wrote ${tools.length} tools -> src/data/defaultTools.json`);
console.log(`Wrote ${productLinks.length} links -> src/data/defaultToolProductLinks.json`);
console.log(`Wrote SQL -> ${outPath}`);
