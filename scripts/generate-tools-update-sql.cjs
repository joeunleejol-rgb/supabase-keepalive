const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '../src/data/toolsData.ts'), 'utf8');
const match = src.match(/export const TOOLS_TEXT_CONTENT[^=]*=\s*(\{[\s\S]*?\n\};)/);
if (!match) {
  console.error('Failed to parse TOOLS_TEXT_CONTENT from toolsData.ts');
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

let objStr = match[1].replace(/,\s*\};\s*$/, '}');
for (const [key, uuid] of Object.entries(ids)) {
  objStr = objStr.replace(`[TOOL_IDS.${key}]`, JSON.stringify(uuid));
}

const data = Function(`"use strict"; return (${objStr});`)();

const toolNames = {
  'e581dbec-0e48-4246-b8ff-25df6d91aae3': '이유식 전용 도마',
  '2b6e0781-addb-45a9-9c02-9c9757b245f7': '이유식 조리용 냄비',
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08': '이유식 초퍼',
  'e68c601e-acfa-433f-96ed-ef68165a7a15': '실리콘 이유식 스푼',
  '66f26214-411b-41c0-b098-a93b3d591b76': '계량컵',
  'abfb9ad6-bfa1-470f-822f-3f477535438f': '이유식 턱받이',
  '9816ff25-2bf0-491f-a102-4e1a53190832': '전자 저울',
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f': '빨대컵',
  '1831aaf2-a988-4abc-aa09-3b068f2118d2': '실리콘 주걱',
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72': '아기 식사용 의자',
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526': '소형 조리기 세트',
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f': '이유식 보관 용기',
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509': '체 또는 거름망',
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f': '이유식 전용 칼',
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6': '아기 식기 세트',
  '57f137f1-53ac-497f-8674-08565ae0f11f': '이유식 책',
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0': '이유식 큐브틀',
};

const fields = [
  'description',
  'description_en',
  'description_de',
  'description_fr',
  'description_it',
  'detail_description',
  'detail_description_en',
  'detail_description_de',
  'detail_description_fr',
  'detail_description_it',
];

function esc(value) {
  return value.replace(/'/g, "''");
}

const header = [
  '-- =============================================================================',
  '-- 2U 이유식 — tools 테이블 텍스트 동기화 (요약 / 상세 설명 역할 분리)',
  '-- 생성: src/data/toolsData.ts 와 동일 (node scripts/generate-tools-update-sql.cjs)',
  '-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run',
  '-- =============================================================================',
  '',
  'BEGIN;',
  '',
].join('\n');

const updates = Object.entries(data)
  .map(([id, row]) => {
    const label = toolNames[id] ?? id;
    const sets = fields.map((field) => `  ${field} = '${esc(row[field])}'`).join(',\n');
    return `-- ${label}\nUPDATE tools\nSET\n${sets}\nWHERE id = '${id}';\n`;
  })
  .join('\n');

const footer = [
  'COMMIT;',
  '',
  '-- 실행 후 확인 (17행, summary ≠ detail)',
  'SELECT',
  '  name,',
  '  LEFT(description, 50) AS summary_preview,',
  '  LEFT(detail_description, 50) AS detail_preview',
  'FROM tools',
  'ORDER BY sort_order, name;',
  '',
].join('\n');

const outPath = path.join(__dirname, 'update_tools_text.sql');
fs.writeFileSync(outPath, `${header}${updates}${footer}`);
console.log(`Generated ${outPath} (${Object.keys(data).length} tools)`);
