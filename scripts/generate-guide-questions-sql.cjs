const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '../src/data/guideQuestionsData.ts'), 'utf8');
const match = src.match(/export const DEFAULT_GUIDE_QUESTIONS[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!match) {
  console.error('Failed to parse DEFAULT_GUIDE_QUESTIONS from guideQuestionsData.ts');
  process.exit(1);
}

const idMap = {
  'GUIDE_QUESTION_IDS.BABY_AGE': 'a1000001-0001-4000-8000-000000000001',
  'GUIDE_QUESTION_IDS.HEAD_CONTROL': 'a1000001-0001-4000-8000-000000000002',
  'GUIDE_QUESTION_IDS.SITTING': 'a1000001-0001-4000-8000-000000000003',
  'GUIDE_QUESTION_IDS.FOOD_INTEREST': 'a1000001-0001-4000-8000-000000000004',
  'GUIDE_QUESTION_IDS.TONGUE_REFLEX': 'a1000001-0001-4000-8000-000000000005',
  'GUIDE_QUESTION_IDS.MOM_KNOWLEDGE': 'a1000001-0001-4000-8000-000000000006',
  'GUIDE_QUESTION_IDS.ALLERGY_HISTORY': 'a1000001-0001-4000-8000-000000000008',
  'GUIDE_QUESTION_IDS.PEDIATRIC_CONSULT': 'a1000001-0001-4000-8000-000000000009',
  'GUIDE_QUESTION_IDS.TOOLS_PREP': 'a1000001-0001-4000-8000-000000000010',
};

let arrayLiteral = match[1];
for (const [key, value] of Object.entries(idMap)) {
  arrayLiteral = arrayLiteral.replace(new RegExp(key, 'g'), `'${value}'`);
}

// eslint-disable-next-line no-eval
const questions = eval(arrayLiteral);

function esc(value) {
  if (value == null) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

const columns = [
  'id',
  'question',
  'question_en',
  'question_de',
  'question_fr',
  'question_it',
  'category',
  'description',
  'description_en',
  'description_de',
  'description_fr',
  'description_it',
  'sort_order',
];

const lines = [
  '-- =============================================================================',
  '-- 2U 이유식 — guide_questions 시드 데이터',
  '-- 생성: node scripts/generate-guide-questions-sql.cjs',
  '-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run',
  '-- =============================================================================',
  '',
  'BEGIN;',
  '',
  'DELETE FROM public.guide_questions;',
  '',
];

for (const q of questions) {
  const values = columns.map((col) => esc(q[col])).join(',\n  ');
  lines.push(`INSERT INTO public.guide_questions (`);
  lines.push(`  ${columns.join(',\n  ')}`);
  lines.push(`) VALUES (`);
  lines.push(`  ${values}`);
  lines.push(');');
  lines.push('');
}

lines.push('COMMIT;');
lines.push('');

const outPath = path.join(__dirname, 'seed_guide_questions.sql');
fs.writeFileSync(outPath, lines.join('\n'));
console.log(`Wrote ${questions.length} rows to ${outPath}`);
