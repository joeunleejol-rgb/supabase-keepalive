import type { GuideQuestion } from '../types';
import type { TranslationKey } from '../lib/i18n';

export {
  DEFAULT_GUIDE_QUESTIONS,
  GUIDE_QUESTION_IDS,
  resolveGuideQuestions,
} from './guideQuestionsData';

export const GUIDE_QUESTION_SORT = {
  MOM_KNOWLEDGE: 6,
  TOOLS_PREP: 10,
} as const;

function questionHaystack(question: GuideQuestion): string {
  return [
    question.question,
    question.question_en,
    question.question_de,
    question.question_fr,
    question.question_it,
  ]
    .filter(Boolean)
    .join(' ');
}

export function showsMomKnowledgeBanner(question: GuideQuestion): boolean {
  if (question.sort_order === GUIDE_QUESTION_SORT.MOM_KNOWLEDGE) return true;
  return (
    question.category === 'mom_ready' &&
    /기본 지식|basic knowledge|Grundlagenwissen|connaissances de base|conoscenze di base/i.test(
      questionHaystack(question),
    )
  );
}

export function showsToolsPrepBanner(question: GuideQuestion): boolean {
  if (question.sort_order === GUIDE_QUESTION_SORT.TOOLS_PREP) return true;
  const haystack = questionHaystack(question);
  return (
    question.category === 'general' &&
    /도구|tools|Werkzeug|ustensile|outil|strument/i.test(haystack) &&
    /준비|prepar|vorbereit|prépar/i.test(haystack)
  );
}

export function getGuideBannerTipKey(question: GuideQuestion): TranslationKey | null {
  if (showsMomKnowledgeBanner(question)) return 'guide.momKnowledgeTip';
  if (showsToolsPrepBanner(question)) return 'guide.toolsPrepTip';
  return null;
}
