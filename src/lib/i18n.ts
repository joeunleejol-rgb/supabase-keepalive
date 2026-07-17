export type Language = 'ko' | 'en' | 'de' | 'fr' | 'it';

// Language display names — keyed by [uiLang][targetLang]
export const languageNames: Record<Language, Record<Language, string>> = {
  ko: { ko: '한국어',       en: 'Korean',    de: 'Koreanisch',   fr: 'Coréen',    it: 'Coreano'   },
  en: { ko: '영어',         en: 'English',   de: 'Englisch',     fr: 'Anglais',   it: 'Inglese'   },
  de: { ko: '독일어',       en: 'German',    de: 'Deutsch',      fr: 'Allemand',  it: 'Tedesco'   },
  fr: { ko: '불어',         en: 'French',    de: 'Französisch',  fr: 'Français',  it: 'Francese'  },
  it: { ko: '이탈리아어',   en: 'Italian',   de: 'Italienisch',  fr: 'Italien',   it: 'Italiano'  },
};

export type Country = {
  code: string;
  name: Record<Language, string>;
  languages: Language[];
  flag: string;
};

export const countries: Country[] = [
  {
    code: 'KR', flag: '🇰🇷',
    name: { ko: '대한민국', en: 'South Korea',  de: 'Südkorea',    fr: 'Corée du Sud', it: 'Corea del Sud' },
    languages: ['ko', 'en'],
  },
  {
    code: 'DE', flag: '🇩🇪',
    name: { ko: '독일',     en: 'Germany',      de: 'Deutschland', fr: 'Allemagne',    it: 'Germania' },
    languages: ['de', 'en', 'ko'],
  },
  {
    code: 'IT', flag: '🇮🇹',
    name: { ko: '이탈리아', en: 'Italy',         de: 'Italien',     fr: 'Italie',       it: 'Italia' },
    languages: ['it', 'en', 'ko'],
  },
  {
    code: 'FR', flag: '🇫🇷',
    name: { ko: '프랑스',   en: 'France',        de: 'Frankreich',  fr: 'France',       it: 'Francia' },
    languages: ['fr', 'en', 'ko'],
  },
];

type TranslationKey =
  | 'app.title'
  | 'app.footer'
  | 'intro.title1'
  | 'intro.title2'
  | 'intro.subtitle'
  | 'intro.guide'
  | 'intro.guideDesc'
  | 'intro.tools'
  | 'intro.toolsDesc'
  | 'intro.custom'
  | 'intro.customDesc'
  | 'intro.customDescKR'
  | 'intro.customDescEU'
  | 'intro.start'
  | 'guide.babyReady'
  | 'guide.momReady'
  | 'guide.general'
  | 'guide.yes'
  | 'guide.no'
  | 'guide.prev'
  | 'guide.lastQuestion'
  | 'tools.title'
  | 'tools.subtitle'
  | 'tools.readinessScore'
  | 'tools.readyCount'
  | 'tools.readyHigh'
  | 'tools.readyLow'
  | 'tools.essential'
  | 'tools.recommended'
  | 'tools.optional'
  | 'tools.essentialLabel'
  | 'tools.recommendedLabel'
  | 'tools.optionalLabel'
  | 'tools.selected'
  | 'tools.next'
  | 'foodType.title'
  | 'foodType.subtitle'
  | 'foodType.subtitleKR'
  | 'foodType.subtitleEU'
  | 'foodType.next'
  | 'ingredients.title'
  | 'ingredients.subtitle'
  | 'ingredients.allergyTip'
  | 'ingredients.selected'
  | 'ingredients.result'
  | 'summary.title'
  | 'summary.subtitle'
  | 'summary.readiness'
  | 'summary.readyCount'
  | 'summary.tools'
  | 'summary.foodType'
  | 'summary.ingredients'
  | 'summary.noTools'
  | 'summary.noFoodType'
  | 'summary.noIngredients'
  | 'summary.print'
  | 'summary.restart'
  | 'summary.viewPlan'
  | 'summary.viewAllergy'
  | 'summary.viewBooks'
  | 'plan.title'
  | 'plan.subtitle'
  | 'plan.weekly'
  | 'plan.monthly'
  | 'plan.weeklyDesc'
  | 'plan.monthlyDesc'
  | 'plan.generate'
  | 'plan.regenerate'
  | 'plan.day'
  | 'plan.morning'
  | 'plan.afternoon'
  | 'plan.evening'
  | 'plan.snack'
  | 'plan.rest'
  | 'plan.back'
  | 'plan.save'
  | 'plan.saved'
  | 'plan.ingredient'
  | 'plan.stage'
  | 'plan.stageDesc'
  | 'plan.early'
  | 'plan.mid'
  | 'plan.late'
  | 'plan.earlyLabel'
  | 'plan.midLabel'
  | 'plan.lateLabel'
  | 'plan.earlyDesc'
  | 'plan.midDesc'
  | 'plan.lateDesc'
  | 'plan.stageTransition'
  | 'allergy.title'
  | 'allergy.subtitle'
  | 'allergy.add'
  | 'allergy.ingredient'
  | 'allergy.date'
  | 'allergy.reaction'
  | 'allergy.none'
  | 'allergy.mild'
  | 'allergy.severe'
  | 'allergy.notes'
  | 'allergy.notesPlaceholder'
  | 'allergy.save'
  | 'allergy.delete'
  | 'allergy.empty'
  | 'allergy.noneLabel'
  | 'allergy.mildLabel'
  | 'allergy.severeLabel'
  | 'allergy.back'
  | 'allergy.history'
  | 'allergy.noReaction'
  | 'allergy.mildReaction'
  | 'allergy.severeReaction'
  | 'books.title'
  | 'books.subtitle'
  | 'books.topBooks'
  | 'books.articles'
  | 'books.by'
  | 'books.viewLink'
  | 'books.back'
  | 'common.loading'
  | 'common.error'
  | 'common.back'
  | 'common.next'
  | 'nav.guide'
  | 'nav.tools'
  | 'nav.type'
  | 'nav.ingredients'
  | 'nav.summary'
  | 'country.select'
  | 'country.selectLanguage'
  | 'guide.momKnowledgeTip'
  | 'guide.toolsPrepTip'
  | 'tools.popupTitle'
  | 'tools.popupDetail'
  | 'tools.recommendedProduct'
  | 'tools.viewProduct'
  | 'tools.select'
  | 'tools.selected_tool'
  | 'tools.close'
  | 'auth.signupTitle'
  | 'auth.signupSubtitle'
  | 'auth.email'
  | 'auth.password'
  | 'auth.signup'
  | 'auth.signin'
  | 'auth.signout'
  | 'auth.signupCta'
  | 'auth.signupDesc'
  | 'auth.guestNote'
  | 'auth.guestLockPlan'
  | 'auth.guestLockAllergy'
  | 'auth.welcome'
  | 'auth.error'
  | 'auth.emptyEmail'
  | 'auth.emptyPassword'
  | 'auth.alreadyMember'
  | 'summary.lockedFeature'
  | 'auth.babyName'
  | 'auth.babyAge'
  | 'auth.babyNamePlaceholder'
  | 'auth.selectAge'
  | 'sub.title'
  | 'sub.subtitle'
  | 'sub.monthly'
  | 'sub.yearly'
  | 'sub.monthlyPrice'
  | 'sub.yearlyPrice'
  | 'sub.monthlyDesc'
  | 'sub.yearlyDesc'
  | 'sub.subscribe'
  | 'sub.subscribed'
  | 'sub.active'
  | 'sub.back'
  | 'sub.lockedTitle'
  | 'sub.lockedDesc'
  | 'sub.viewPlans'
  | 'allergy.photo'
  | 'allergy.takePhoto'
  | 'allergy.attachPhoto'
  | 'allergy.photoUploaded'
  | 'allergy.removePhoto'
  | 'allergy.viewPhoto'
  | 'plan.toddler'
  | 'plan.toddlerLabel'
  | 'plan.toddlerDesc'
  | 'plan.reviewIngredients'
  | 'plan.reviewIngredientsDesc'
  | 'foodType.details'
  | 'foodType.stepsTitle'
  | 'foodType.tipsTitle'
  | 'foodType.selectThis'
  | 'foodType.selected'
  | 'ingredients.starterTip'
  | 'ingredients.starterBadge'
  | 'tools.viewOnStore';

type Translations = Record<TranslationKey, string>;

const ko: Translations = {
  'app.title': '2U 이유식',
  'app.footer': '우리 아이의 건강한 첫 이유식을 응원합니다',
  'intro.title1': '우리 아이의',
  'intro.title2': '첫 이유식 여정',
  'intro.subtitle': '이유식을 시작하기 전, 아기와 엄마의 준비 상태를 점검하고\n필요한 도구와 방식을 추천받아 보세요.',
  'intro.guide': '준비 가이드',
  'intro.guideDesc': '아기와 엄마의 준비 상태를 체크리스트로 점검해요.',
  'intro.tools': '도구 추천',
  'intro.toolsDesc': '이유식 시작에 필요한 도구를 카테고리별로 추천해요.',
  'intro.custom': '맞춤 선택',
  'intro.customDesc': '이유식 타입과 시작할 재료를 선택해 보세요.',
  'intro.customDescKR': '한국형 이유식(토핑·큐브, BLW, 채식)과 시작 재료를 선택해 보세요.',
  'intro.customDescEU': '유럽형 이유식(퓌레·매쉬, BLW, 바이오 채식)과 시작 재료를 선택해 보세요.',
  'intro.start': '이유식 준비 시작하기',
  'guide.babyReady': '아기 준비도',
  'guide.momReady': '엄마 준비도',
  'guide.general': '일반 사항',
  'guide.yes': '네, 준비됐어요',
  'guide.no': '아직이에요',
  'guide.prev': '이전',
  'guide.lastQuestion': '마지막 질문',
  'tools.title': '이유식 준비 도구',
  'tools.subtitle': '이유식을 시작하기 위해 필요한 도구들을 추천해 드려요.\n준비하고 싶은 도구를 선택해 주세요.',
  'tools.readinessScore': '준비도 점수',
  'tools.readyCount': '항목 준비 완료',
  'tools.readyHigh': '이유식을 시작할 준비가 잘 되었어요!',
  'tools.readyLow': '조금 더 준비가 필요해요. 가이드를 다시 확인해 보세요.',
  'tools.essential': '필수 도구',
  'tools.recommended': '추천 도구',
  'tools.optional': '선택 도구',
  'tools.essentialLabel': '필수',
  'tools.recommendedLabel': '추천',
  'tools.optionalLabel': '선택',
  'tools.selected': '개 선택됨',
  'tools.next': '다음',
  'foodType.title': '어떤 이유식을 해볼까요?',
  'foodType.subtitle': '아기와 라이프스타일에 맞는 이유식 방식을 선택해 주세요.\n각 방식마다 장단점이 있어요.',
  'foodType.subtitleKR': '한국에서 많이 쓰는 3가지 방식 중 하나를 선택해 주세요.\n토핑(큐브), BLW, 알레르기 안심 채식 이유식',
  'foodType.subtitleEU': '유럽에서 많이 쓰는 3가지 방식 중 하나를 선택해 주세요.\n퓌레·매쉬, BLW, 100% 바이오 채식',
  'foodType.next': '다음',
  'ingredients.title': '어떤 재료로 시작할까요?',
  'ingredients.subtitle': '이유식을 시작할 재료를 선택해 주세요. 추천 월령을 참고하여\n아기 상태에 맞는 재료를 골라보세요.',
  'ingredients.allergyTip': '새로운 재료는 한 번에 한 가지씩, 소량부터 3-4일 간격으로 도입하여 알레르기 반응을 확인하세요.',
  'ingredients.selected': '개 선택됨',
  'ingredients.result': '결과 보기',
  'summary.title': '이유식 준비 완료!',
  'summary.subtitle': '선택하신 내용을 바탕으로 이유식 준비 요약을 드려요.',
  'summary.readiness': '준비도 점검 결과',
  'summary.readyCount': '항목 준비 완료',
  'summary.tools': '준비할 도구',
  'summary.foodType': '선택한 이유식 타입',
  'summary.ingredients': '시작할 재료',
  'summary.noTools': '선택한 도구가 없습니다.',
  'summary.noFoodType': '선택한 이유식 타입이 없습니다.',
  'summary.noIngredients': '선택한 재료가 없습니다.',
  'summary.print': '요약 인쇄하기',
  'summary.restart': '처음부터 다시하기',
  'summary.viewPlan': '이유식 계획 세우기',
  'summary.viewAllergy': '알레르기 기록하기',
  'summary.viewBooks': '도서/기사 보기',
  'plan.title': '이유식 식단 계획',
  'plan.subtitle': '선택하신 재료와 타입을 바탕으로 식단을 계획해 드려요.\n위클리(7일) 또는 한 달(30일) 중 선택해 주세요.',
  'plan.weekly': '위클리 (7일)',
  'plan.monthly': '한 달 (30일)',
  'plan.weeklyDesc': '7일간의 식단을 계획합니다. 처음 시작하시는 분께 추천해요.',
  'plan.monthlyDesc': '30일간의 식단을 계획합니다. 장기 계획을 원하시는 분께 추천해요.',
  'plan.generate': '식단 생성하기',
  'plan.regenerate': '식단 다시 생성',
  'plan.day': '일차',
  'plan.morning': '아침',
  'plan.afternoon': '점심',
  'plan.evening': '저녁',
  'plan.snack': '간식',
  'plan.rest': '쉬는 날',
  'plan.back': '이전',
  'plan.save': '식단 저장',
  'plan.saved': '저장됨',
  'plan.ingredient': '재료',
  'plan.stage': '이유식 단계',
  'plan.stageDesc': '아기의 현재 월령에 맞는 단계를 선택해 주세요.',
  'plan.early': '초기 (4–6개월)',
  'plan.mid': '중기 (6–9개월)',
  'plan.late': '후기 (9–12개월)',
  'plan.earlyLabel': '초기',
  'plan.midLabel': '중기',
  'plan.lateLabel': '후기',
  'plan.earlyDesc': '묽은 퓨레 형태로 하루 1–2회 소량 제공. 알레르기 확인을 위해 한 가지 재료씩 도입해요.',
  'plan.midDesc': '으깬 형태로 하루 2회. 다양한 재료를 조합해 영양 균형을 맞춰요.',
  'plan.lateDesc': '잘게 썬 부드러운 형태로 하루 3회. 거의 모든 재료를 사용할 수 있어요.',
  'plan.stageTransition': '단계 전환',
  'allergy.title': '알레르기 테스트 기록',
  'allergy.subtitle': '재료별 알레르기 반응을 기록하고 한 곳에서 관리하세요.\n새로운 재료를 도입할 때마다 기록을 남겨주세요.',
  'allergy.add': '기록 추가',
  'allergy.ingredient': '재료',
  'allergy.date': '테스트 날짜',
  'allergy.reaction': '반응',
  'allergy.none': '이상 없음',
  'allergy.mild': '경미한 반응',
  'allergy.severe': '심한 반응',
  'allergy.notes': '메모',
  'allergy.notesPlaceholder': '관찰한 증상이나 특이사항을 적어주세요',
  'allergy.save': '저장',
  'allergy.delete': '삭제',
  'allergy.empty': '아직 기록된 알레르기 테스트가 없습니다.',
  'allergy.noneLabel': '이상 없음',
  'allergy.mildLabel': '경미함',
  'allergy.severeLabel': '심함',
  'allergy.back': '이전',
  'allergy.history': '기록 목록',
  'allergy.noReaction': '이상 없음',
  'allergy.mildReaction': '경미한 반응',
  'allergy.severeReaction': '심한 반응',
  'books.title': '이유식 관련 도서 & 기사',
  'books.subtitle': '이유식 준비에 도움이 되는 베스트셀러 도서와 추천 기사를 모았어요.',
  'books.topBooks': '베스트셀러 Top 7',
  'books.articles': '추천 기사',
  'books.by': '저자',
  'books.viewLink': '자세히 보기',
  'books.back': '이전',
  'common.loading': '데이터를 불러오는 중...',
  'common.error': '오류가 발생했습니다',
  'common.back': '이전',
  'common.next': '다음',
  'nav.guide': '가이드',
  'nav.tools': '도구',
  'nav.type': '타입',
  'nav.ingredients': '재료',
  'nav.summary': '완료',
  'country.select': '국가/언어 선택',
  'country.selectLanguage': '서비스를 이용할 국가를 선택해 주세요',
  'guide.momKnowledgeTip': '지식이 없어도 걱정하지 마세요! 이 서비스에서 기본 지식부터 차근차근 알려드려요. 도구 추천, 이유식 타입 가이드, 재료 선택 가이드를 통해 이유식의 모든 것을 준비할 수 있어요.',
  'guide.toolsPrepTip': '아직 도구가 없어도 괜찮아요! 다음 단계에서 이유식 도구를 차근차근 함께 골라볼 수 있어요. 지금은 걱정하지 않으셔도 됩니다.',
  'tools.popupTitle': '도구 상세 정보',
  'tools.popupDetail': '상세 설명',
  'tools.recommendedProduct': '추천 베스트 제품',
  'tools.viewProduct': '쿠팡에서 보기',
  'tools.select': '이 도구 선택하기',
  'tools.selected_tool': '선택됨',
  'tools.close': '닫기',
  'auth.signupTitle': '회원가입하고 더 많은 기능 사용하기',
  'auth.signupSubtitle': '회원가입하면 이유식 계획과 알레르기 기록을 저장하고 언제든 다시 볼 수 있어요.',
  'auth.email': '이메일',
  'auth.password': '비밀번호',
  'auth.signup': '회원가입',
  'auth.signin': '로그인',
  'auth.signout': '로그아웃',
  'auth.signupCta': '회원가입하기',
  'auth.signupDesc': '이유식 계획과 알레르기 기록을 저장하려면 회원가입이 필요해요.',
  'auth.guestNote': '회원가입 없이 도서/기사 추천은 이용할 수 있어요.',
  'auth.guestLockPlan': '회원가입 후 이용 가능',
  'auth.guestLockAllergy': '회원가입 후 이용 가능',
  'auth.welcome': '환영합니다',
  'auth.error': '오류가 발생했습니다. 다시 시도해 주세요.',
  'auth.emptyEmail': '이메일을 입력해 주세요.',
  'auth.emptyPassword': '비밀번호를 입력해 주세요.',
  'auth.alreadyMember': '이미 회원이신가요?',
  'summary.lockedFeature': '회원가입 필요',
  'auth.babyName': '아기 이름',
  'auth.babyNamePlaceholder': '아기 이름을 입력해 주세요',
  'auth.babyAge': '아기 월령',
  'auth.selectAge': '월령 선택',
  'sub.title': '이유식 계획 구독',
  'sub.subtitle': '이유식 계획을 이용하려면 구독이 필요해요.\n월간 또는 연간 구독 중 선택해 주세요.',
  'sub.monthly': '월간 구독',
  'sub.yearly': '연간 구독',
  'sub.monthlyPrice': '€11.99/월',
  'sub.yearlyPrice': '€99/년',
  'sub.monthlyDesc': '매월 자동 갱신. 언제든 취소 가능.',
  'sub.yearlyDesc': '연간 결제 시 17% 할인. 매년 자동 갱신.',
  'sub.subscribe': '구독하기',
  'sub.subscribed': '구독 중',
  'sub.active': '활성',
  'sub.back': '이전',
  'sub.lockedTitle': '구독이 필요한 기능',
  'sub.lockedDesc': '이유식 계획을 세우려면 구독이 필요해요.',
  'sub.viewPlans': '구독 플랜 보기',
  'allergy.photo': '반응 사진',
  'allergy.takePhoto': '사진 촬영',
  'allergy.attachPhoto': '사진 첨부',
  'allergy.photoUploaded': '사진이 첨부되었어요',
  'allergy.removePhoto': '사진 삭제',
  'allergy.viewPhoto': '사진 보기',
  'tools.viewOnStore': '스토어에서 보기',
  'plan.toddler': '유아식 (12개월+)',
  'plan.toddlerLabel': '유아식',
  'plan.toddlerDesc': '다양한 형태의 음식을 하루 3회 제공. 가족 식사에 가까운 형태로 전환해요.',
  'plan.reviewIngredients': '재료 확인 및 수정',
  'plan.reviewIngredientsDesc': '식단 계획에 포함할 재료를 선택해 주세요. 이미 선택한 재료가 기본으로 체크되어 있어요.',
  'foodType.details': '자세히보기',
  'foodType.stepsTitle': '진행 순서',
  'foodType.tipsTitle': '선택 팁',
  'foodType.selectThis': '이 방식 선택하기',
  'foodType.selected': '선택됨',
  'ingredients.starterTip': '✦ 표시된 재료는 처음 이유식을 시작할 때 가장 추천하는 재료예요.',
  'ingredients.starterBadge': '시작 추천',
};

const en: Translations = {
  'app.title': '2U Baby Food',
  'app.footer': 'Cheering for your baby\'s healthy first baby food journey',
  'intro.title1': 'Your Baby\'s',
  'intro.title2': 'First Food Journey',
  'intro.subtitle': 'Before starting baby food, check your baby\'s and your readiness,\nand get recommendations for tools and methods.',
  'intro.guide': 'Readiness Guide',
  'intro.guideDesc': 'Check your baby\'s and your readiness with a checklist.',
  'intro.tools': 'Tool Recommendations',
  'intro.toolsDesc': 'Get recommended tools by category for starting baby food.',
  'intro.custom': 'Custom Selection',
  'intro.customDesc': 'Choose your baby food type and starting ingredients.',
  'intro.customDescKR': 'Choose a Korea-style type (topping cubes, BLW, allergy-safe vegetarian) and starter ingredients.',
  'intro.customDescEU': 'Choose a European type (puree & mash, BLW, 100% bio-vegetarian) and starter ingredients.',
  'intro.start': 'Start Baby Food Prep',
  'guide.babyReady': 'Baby Readiness',
  'guide.momReady': 'Parent Readiness',
  'guide.general': 'General',
  'guide.yes': 'Yes, we\'re ready',
  'guide.no': 'Not yet',
  'guide.prev': 'Previous',
  'guide.lastQuestion': 'Last question',
  'tools.title': 'Baby Food Tools',
  'tools.subtitle': 'Here are the tools you\'ll need to start baby food.\nSelect the ones you\'d like to prepare.',
  'tools.readinessScore': 'Readiness Score',
  'tools.readyCount': 'items ready',
  'tools.readyHigh': 'You\'re well prepared to start baby food!',
  'tools.readyLow': 'You need a bit more preparation. Review the guide again.',
  'tools.essential': 'Essential Tools',
  'tools.recommended': 'Recommended Tools',
  'tools.optional': 'Optional Tools',
  'tools.essentialLabel': 'Essential',
  'tools.recommendedLabel': 'Recommended',
  'tools.optionalLabel': 'Optional',
  'tools.selected': 'selected',
  'tools.next': 'Next',
  'foodType.title': 'Which type of baby food?',
  'foodType.subtitle': 'Choose a baby food method that fits your baby and lifestyle.\nEach method has its own pros and cons.',
  'foodType.subtitleKR': 'Pick one of three popular options in Korea:\ntopping (cube), BLW, or allergy-safe vegetarian weaning.',
  'foodType.subtitleEU': 'Pick one of three popular options in Europe:\npuree & mash, BLW, or 100% bio-vegetarian weaning.',
  'foodType.next': 'Next',
  'ingredients.title': 'Which ingredients to start with?',
  'ingredients.subtitle': 'Select ingredients to start baby food. Refer to the recommended age\nand choose ingredients appropriate for your baby.',
  'ingredients.allergyTip': 'Introduce new ingredients one at a time, in small amounts, 3-4 days apart, to check for allergic reactions.',
  'ingredients.selected': 'selected',
  'ingredients.result': 'See Results',
  'summary.title': 'Baby Food Prep Complete!',
  'summary.subtitle': 'Here\'s a summary of your baby food preparation based on your selections.',
  'summary.readiness': 'Readiness Check Results',
  'summary.readyCount': 'items ready',
  'summary.tools': 'Tools to Prepare',
  'summary.foodType': 'Selected Baby Food Type',
  'summary.ingredients': 'Starting Ingredients',
  'summary.noTools': 'No tools selected.',
  'summary.noFoodType': 'No baby food type selected.',
  'summary.noIngredients': 'No ingredients selected.',
  'summary.print': 'Print Summary',
  'summary.restart': 'Start Over',
  'summary.viewPlan': 'Create Meal Plan',
  'summary.viewAllergy': 'Record Allergies',
  'summary.viewBooks': 'Books & Articles',
  'plan.title': 'Baby Food Meal Plan',
  'plan.subtitle': 'We\'ll create a meal plan based on your selected ingredients and type.\nChoose between weekly (7 days) or monthly (30 days).',
  'plan.weekly': 'Weekly (7 days)',
  'plan.monthly': 'Monthly (30 days)',
  'plan.weeklyDesc': 'Plan meals for 7 days. Recommended for beginners.',
  'plan.monthlyDesc': 'Plan meals for 30 days. Recommended for long-term planning.',
  'plan.generate': 'Generate Meal Plan',
  'plan.regenerate': 'Regenerate Plan',
  'plan.day': 'Day',
  'plan.morning': 'Morning',
  'plan.afternoon': 'Lunch',
  'plan.evening': 'Dinner',
  'plan.snack': 'Snack',
  'plan.rest': 'Rest Day',
  'plan.back': 'Back',
  'plan.save': 'Save Plan',
  'plan.saved': 'Saved',
  'plan.ingredient': 'Ingredient',
  'plan.stage': 'Baby Food Stage',
  'plan.stageDesc': 'Select the stage that matches your baby\'s current age.',
  'plan.early': 'Early (4–6 months)',
  'plan.mid': 'Mid (6–9 months)',
  'plan.late': 'Late (9–12 months)',
  'plan.earlyLabel': 'Early',
  'plan.midLabel': 'Mid',
  'plan.lateLabel': 'Late',
  'plan.earlyDesc': 'Thin smooth purées, 1–2 times a day in small amounts. Introduce one ingredient at a time to check for allergies.',
  'plan.midDesc': 'Mashed textures, 2 times a day. Combine varied ingredients for nutritional balance.',
  'plan.lateDesc': 'Finely chopped soft pieces, 3 times a day. Almost any ingredient can be used.',
  'plan.stageTransition': 'Stage Transition',
  'allergy.title': 'Allergy Test Records',
  'allergy.subtitle': 'Record and manage allergy reactions to ingredients in one place.\nKeep a record each time you introduce a new ingredient.',
  'allergy.add': 'Add Record',
  'allergy.ingredient': 'Ingredient',
  'allergy.date': 'Test Date',
  'allergy.reaction': 'Reaction',
  'allergy.none': 'No reaction',
  'allergy.mild': 'Mild reaction',
  'allergy.severe': 'Severe reaction',
  'allergy.notes': 'Notes',
  'allergy.notesPlaceholder': 'Write observed symptoms or notes',
  'allergy.save': 'Save',
  'allergy.delete': 'Delete',
  'allergy.empty': 'No allergy test records yet.',
  'allergy.noneLabel': 'None',
  'allergy.mildLabel': 'Mild',
  'allergy.severeLabel': 'Severe',
  'allergy.back': 'Back',
  'allergy.history': 'History',
  'allergy.noReaction': 'No reaction',
  'allergy.mildReaction': 'Mild reaction',
  'allergy.severeReaction': 'Severe reaction',
  'books.title': 'Baby Food Books & Articles',
  'books.subtitle': 'A collection of bestseller books and recommended articles to help with baby food preparation.',
  'books.topBooks': 'Top 7 Bestsellers',
  'books.articles': 'Recommended Articles',
  'books.by': 'by',
  'books.viewLink': 'View Details',
  'books.back': 'Back',
  'common.loading': 'Loading data...',
  'common.error': 'An error occurred',
  'common.back': 'Back',
  'common.next': 'Next',
  'nav.guide': 'Guide',
  'nav.tools': 'Tools',
  'nav.type': 'Type',
  'nav.ingredients': 'Ingredients',
  'nav.summary': 'Done',
  'country.select': 'Select Country/Language',
  'country.selectLanguage': 'Please select your country to use the service',
  'guide.momKnowledgeTip': 'Don\'t worry if you don\'t have knowledge yet! This service will guide you through everything step by step. Tool recommendations, baby food type guides, and ingredient selection guides will help you prepare for baby food.',
  'guide.toolsPrepTip': 'No worries if you haven\'t got the tools yet! On the next screen we\'ll help you choose baby food tools step by step, calmly and together. You don\'t need to stress about it now.',
  'tools.popupTitle': 'Tool Details',
  'tools.popupDetail': 'Detailed Description',
  'tools.recommendedProduct': 'Recommended Best Product',
  'tools.viewProduct': 'View on Coupang',
  'tools.select': 'Select This Tool',
  'tools.selected_tool': 'Selected',
  'tools.close': 'Close',
  'auth.signupTitle': 'Sign Up for More Features',
  'auth.signupSubtitle': 'Sign up to save your meal plans and allergy records and access them anytime.',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.signup': 'Sign Up',
  'auth.signin': 'Sign In',
  'auth.signout': 'Sign Out',
  'auth.signupCta': 'Sign Up Now',
  'auth.signupDesc': 'Sign up is required to save meal plans and allergy records.',
  'auth.guestNote': 'You can use book/article recommendations without signing up.',
  'auth.guestLockPlan': 'Available after sign up',
  'auth.guestLockAllergy': 'Available after sign up',
  'auth.welcome': 'Welcome',
  'auth.error': 'An error occurred. Please try again.',
  'auth.emptyEmail': 'Please enter your email.',
  'auth.emptyPassword': 'Please enter your password.',
  'auth.alreadyMember': 'Already a member?',
  'summary.lockedFeature': 'Sign up required',
  'auth.babyName': 'Baby Name',
  'auth.babyNamePlaceholder': 'Enter your baby\'s name',
  'auth.babyAge': 'Baby Age (months)',
  'auth.selectAge': 'Select age',
  'sub.title': 'Meal Plan Subscription',
  'sub.subtitle': 'A subscription is required to use meal plans.\nChoose between monthly or yearly.',
  'sub.monthly': 'Monthly',
  'sub.yearly': 'Yearly',
  'sub.monthlyPrice': '€11.99/month',
  'sub.yearlyPrice': '€99/year',
  'sub.monthlyDesc': 'Auto-renews monthly. Cancel anytime.',
  'sub.yearlyDesc': '17% savings with annual billing. Auto-renews yearly.',
  'sub.subscribe': 'Subscribe',
  'sub.subscribed': 'Subscribed',
  'sub.active': 'Active',
  'sub.back': 'Back',
  'sub.lockedTitle': 'Subscription Required',
  'sub.lockedDesc': 'A subscription is needed to create meal plans.',
  'sub.viewPlans': 'View Plans',
  'allergy.photo': 'Reaction Photo',
  'allergy.takePhoto': 'Take Photo',
  'allergy.attachPhoto': 'Attach Photo',
  'allergy.photoUploaded': 'Photo attached',
  'allergy.removePhoto': 'Remove Photo',
  'allergy.viewPhoto': 'View Photo',
  'tools.viewOnStore': 'View on Store',
  'plan.toddler': 'Toddler Food (12 months+)',
  'plan.toddlerLabel': 'Toddler',
  'plan.toddlerDesc': 'A variety of food textures served 3 times a day, transitioning toward family meals.',
  'plan.reviewIngredients': 'Review & Edit Ingredients',
  'plan.reviewIngredientsDesc': 'Select the ingredients to include in your meal plan. Your previously selected ingredients are pre-checked.',
  'foodType.details': 'Learn More',
  'foodType.stepsTitle': 'Step-by-Step Guide',
  'foodType.tipsTitle': 'Selection Tips',
  'foodType.selectThis': 'Choose This Method',
  'foodType.selected': 'Selected',
  'ingredients.starterTip': '✦ Highlighted ingredients are the most recommended for starting solids.',
  'ingredients.starterBadge': 'Starter Pick',
};

const de: Translations = {
  'app.title': '2U Beikost',
  'app.footer': 'Für die gesunde erste Beikost Ihres Babys',
  'intro.title1': 'Die erste',
  'intro.title2': 'Beikost-Reise Ihres Babys',
  'intro.subtitle': 'Prüfen Sie vor dem Start die Bereitschaft Ihres Babys und Ihre eigene,\nund erhalten Sie Empfehlungen für Werkzeuge und Methoden.',
  'intro.guide': 'Bereitschafts-Leitfaden',
  'intro.guideDesc': 'Überprüfen Sie die Bereitschaft mit einer Checkliste.',
  'intro.tools': 'Werkzeug-Empfehlungen',
  'intro.toolsDesc': 'Empfehlungen für Beikost-Werkzeuge nach Kategorie.',
  'intro.custom': 'Individuelle Auswahl',
  'intro.customDesc': 'Wählen Sie Beikost-Typ und Startzutaten.',
  'intro.customDescKR': 'Koreanischer Beikost-Typ (Topping-Würfel, BLW, vegetarisch) und Startzutaten wählen.',
  'intro.customDescEU': 'Europäischer Beikost-Typ (Püree & Mus, BLW, 100 % Bio-Vegetarisch) und Startzutaten wählen.',
  'intro.start': 'Beikost-Vorbereitung starten',
  'guide.babyReady': 'Baby-Bereitschaft',
  'guide.momReady': 'Eltern-Bereitschaft',
  'guide.general': 'Allgemein',
  'guide.yes': 'Ja, bereit',
  'guide.no': 'Noch nicht',
  'guide.prev': 'Zurück',
  'guide.lastQuestion': 'Letzte Frage',
  'tools.title': 'Beikost-Werkzeuge',
  'tools.subtitle': 'Hier sind die Werkzeuge, die Sie für die Beikost benötigen.\nWählen Sie die aus, die Sie vorbereiten möchten.',
  'tools.readinessScore': 'Bereitschafts-Score',
  'tools.readyCount': 'Punkte erfüllt',
  'tools.readyHigh': 'Sie sind gut vorbereitet, um mit der Beikost zu beginnen!',
  'tools.readyLow': 'Sie benötigen noch etwas mehr Vorbereitung. Überprüfen Sie den Leitfaden erneut.',
  'tools.essential': 'Unverzichtbare Werkzeuge',
  'tools.recommended': 'Empfohlene Werkzeuge',
  'tools.optional': 'Optionale Werkzeuge',
  'tools.essentialLabel': 'Unverzichtbar',
  'tools.recommendedLabel': 'Empfohlen',
  'tools.optionalLabel': 'Optional',
  'tools.selected': 'ausgewählt',
  'tools.next': 'Weiter',
  'foodType.title': 'Welche Art von Beikost?',
  'foodType.subtitle': 'Wählen Sie eine Beikost-Methode, die zu Ihrem Baby und Lebensstil passt.\nJede Methode hat Vor- und Nachteile.',
  'foodType.subtitleKR': 'Wählen Sie eine von drei in Korea üblichen Methoden:\nTopping-Würfel, BLW oder allergiearme vegetarische Beikost.',
  'foodType.subtitleEU': 'Wählen Sie eine von drei in Europa üblichen Methoden:\nPüree & Mus, BLW oder 100 % Bio-Vegetarisch.',
  'foodType.next': 'Weiter',
  'ingredients.title': 'Welche Zutaten zum Starten?',
  'ingredients.subtitle': 'Wählen Sie Zutaten für den Beikost-Start. Orientieren Sie sich am empfohlenen Alter\nund wählen Sie passende Zutaten für Ihr Baby.',
  'ingredients.allergyTip': 'Führen Sie neue Zutaten einzeln, in kleinen Mengen und im Abstand von 3–4 Tagen ein, um allergische Reaktionen zu erkennen.',
  'ingredients.selected': 'ausgewählt',
  'ingredients.result': 'Ergebnis anzeigen',
  'summary.title': 'Beikost-Vorbereitung abgeschlossen!',
  'summary.subtitle': 'Hier ist eine Zusammenfassung Ihrer Beikost-Vorbereitung basierend auf Ihren Auswahlen.',
  'summary.readiness': 'Bereitschaftsprüfung Ergebnisse',
  'summary.readyCount': 'Punkte erfüllt',
  'summary.tools': 'Vorzubereitende Werkzeuge',
  'summary.foodType': 'Gewählter Beikost-Typ',
  'summary.ingredients': 'Startzutaten',
  'summary.noTools': 'Keine Werkzeuge ausgewählt.',
  'summary.noFoodType': 'Kein Beikost-Typ ausgewählt.',
  'summary.noIngredients': 'Keine Zutaten ausgewählt.',
  'summary.print': 'Zusammenfassung drucken',
  'summary.restart': 'Von vorne beginnen',
  'summary.viewPlan': 'Mahlzeitenplan erstellen',
  'summary.viewAllergy': 'Allergien aufzeichnen',
  'summary.viewBooks': 'Bücher & Artikel',
  'plan.title': 'Beikost-Mahlzeitenplan',
  'plan.subtitle': 'Wir erstellen einen Mahlzeitenplan basierend auf Ihren gewählten Zutaten.\nWählen Sie zwischen wöchentlich (7 Tage) oder monatlich (30 Tage).',
  'plan.weekly': 'Wöchentlich (7 Tage)',
  'plan.monthly': 'Monatlich (30 Tage)',
  'plan.weeklyDesc': 'Mahlzeiten für 7 Tage planen. Für Anfänger empfohlen.',
  'plan.monthlyDesc': 'Mahlzeiten für 30 Tage planen. Für langfristige Planung empfohlen.',
  'plan.generate': 'Mahlzeitenplan erstellen',
  'plan.regenerate': 'Plan neu erstellen',
  'plan.day': 'Tag',
  'plan.morning': 'Morgen',
  'plan.afternoon': 'Mittagessen',
  'plan.evening': 'Abendessen',
  'plan.snack': 'Snack',
  'plan.rest': 'Ruhetag',
  'plan.back': 'Zurück',
  'plan.save': 'Plan speichern',
  'plan.saved': 'Gespeichert',
  'plan.ingredient': 'Zutat',
  'plan.stage': 'Beikost-Stufe',
  'plan.stageDesc': 'Wählen Sie die Stufe, die dem aktuellen Alter Ihres Babys entspricht.',
  'plan.early': 'Früh (4–6 Monate)',
  'plan.mid': 'Mittel (6–9 Monate)',
  'plan.late': 'Spät (9–12 Monate)',
  'plan.earlyLabel': 'Früh',
  'plan.midLabel': 'Mittel',
  'plan.lateLabel': 'Spät',
  'plan.earlyDesc': 'Dünne glatte Pürees, 1–2 Mal täglich in kleinen Mengen. Führen Sie eine Zutat gleichzeitig ein, um Allergien zu prüfen.',
  'plan.midDesc': 'Gestampfte Konsistenz, 2 Mal täglich. Kombinieren Sie verschiedene Zutaten für eine ausgewogene Ernährung.',
  'plan.lateDesc': 'Fein gehackte weiche Stücke, 3 Mal täglich. Fast alle Zutaten können verwendet werden.',
  'plan.stageTransition': 'Stufenwechsel',
  'allergy.title': 'Allergietest-Aufzeichnungen',
  'allergy.subtitle': 'Erfassen und verwalten Sie allergische Reaktionen auf Zutaten an einem Ort.\nHalten Sie jedes Mal eine Aufzeichnung fest, wenn Sie eine neue Zutat einführen.',
  'allergy.add': 'Eintrag hinzufügen',
  'allergy.ingredient': 'Zutat',
  'allergy.date': 'Testdatum',
  'allergy.reaction': 'Reaktion',
  'allergy.none': 'Keine Reaktion',
  'allergy.mild': 'Leichte Reaktion',
  'allergy.severe': 'Starke Reaktion',
  'allergy.notes': 'Notizen',
  'allergy.notesPlaceholder': 'Beobachtete Symptome oder Besonderheiten notieren',
  'allergy.save': 'Speichern',
  'allergy.delete': 'Löschen',
  'allergy.empty': 'Noch keine Allergietest-Aufzeichnungen vorhanden.',
  'allergy.noneLabel': 'Keine',
  'allergy.mildLabel': 'Leicht',
  'allergy.severeLabel': 'Schwer',
  'allergy.back': 'Zurück',
  'allergy.history': 'Verlauf',
  'allergy.noReaction': 'Keine Reaktion',
  'allergy.mildReaction': 'Leichte Reaktion',
  'allergy.severeReaction': 'Starke Reaktion',
  'books.title': 'Beikost-Bücher & Artikel',
  'books.subtitle': 'Bestseller-Bücher und empfohlene Artikel zur Beikost-Vorbereitung.',
  'books.topBooks': 'Top 7 Bestseller',
  'books.articles': 'Empfohlene Artikel',
  'books.by': 'von',
  'books.viewLink': 'Details anzeigen',
  'books.back': 'Zurück',
  'common.loading': 'Daten werden geladen...',
  'common.error': 'Ein Fehler ist aufgetreten',
  'common.back': 'Zurück',
  'common.next': 'Weiter',
  'nav.guide': 'Leitfaden',
  'nav.tools': 'Werkzeuge',
  'nav.type': 'Typ',
  'nav.ingredients': 'Zutaten',
  'nav.summary': 'Fertig',
  'country.select': 'Land/Sprache wählen',
  'country.selectLanguage': 'Bitte wählen Sie Ihr Land, um den Dienst zu nutzen',
  'guide.momKnowledgeTip': 'Keine Sorge, wenn Sie noch kein Wissen haben! Dieser Dienst führt Sie Schritt für Schritt durch alles – Werkzeugempfehlungen, Beikost-Leitfäden und Zutatauswahl inklusive.',
  'guide.toolsPrepTip': 'Keine Sorge, wenn die Utensilien noch fehlen! Im nächsten Schritt wählen wir gemeinsam und in Ruhe die passenden Beikost-Werkzeuge aus. Jetzt müssen Sie sich darum noch keine Sorgen machen.',
  'tools.popupTitle': 'Werkzeug-Details',
  'tools.popupDetail': 'Detaillierte Beschreibung',
  'tools.recommendedProduct': 'Empfohlenes Bestseller-Produkt',
  'tools.viewProduct': 'Bei Amazon ansehen',
  'tools.select': 'Dieses Werkzeug wählen',
  'tools.selected_tool': 'Ausgewählt',
  'tools.close': 'Schließen',
  'auth.signupTitle': 'Registrieren für mehr Funktionen',
  'auth.signupSubtitle': 'Registrieren Sie sich, um Mahlzeitenpläne und Allergieaufzeichnungen zu speichern.',
  'auth.email': 'E-Mail',
  'auth.password': 'Passwort',
  'auth.signup': 'Registrieren',
  'auth.signin': 'Anmelden',
  'auth.signout': 'Abmelden',
  'auth.signupCta': 'Jetzt registrieren',
  'auth.signupDesc': 'Eine Registrierung ist erforderlich, um Pläne und Aufzeichnungen zu speichern.',
  'auth.guestNote': 'Buch-/Artikelempfehlungen sind ohne Registrierung verfügbar.',
  'auth.guestLockPlan': 'Nach Registrierung verfügbar',
  'auth.guestLockAllergy': 'Nach Registrierung verfügbar',
  'auth.welcome': 'Willkommen',
  'auth.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
  'auth.emptyEmail': 'Bitte geben Sie Ihre E-Mail ein.',
  'auth.emptyPassword': 'Bitte geben Sie Ihr Passwort ein.',
  'auth.alreadyMember': 'Bereits Mitglied?',
  'summary.lockedFeature': 'Registrierung erforderlich',
  'auth.babyName': 'Name des Babys',
  'auth.babyNamePlaceholder': 'Name des Babys eingeben',
  'auth.babyAge': 'Alter des Babys (Monate)',
  'auth.selectAge': 'Alter wählen',
  'sub.title': 'Mahlzeitenplan-Abonnement',
  'sub.subtitle': 'Ein Abonnement ist für Mahlzeitenpläne erforderlich.\nWählen Sie zwischen monatlich oder jährlich.',
  'sub.monthly': 'Monatlich',
  'sub.yearly': 'Jährlich',
  'sub.monthlyPrice': '€11,99/Monat',
  'sub.yearlyPrice': '€99/Jahr',
  'sub.monthlyDesc': 'Wird monatlich automatisch verlängert. Jederzeit kündbar.',
  'sub.yearlyDesc': '17 % Ersparnis bei jährlicher Zahlung. Wird jährlich automatisch verlängert.',
  'sub.subscribe': 'Abonnieren',
  'sub.subscribed': 'Abonniert',
  'sub.active': 'Aktiv',
  'sub.back': 'Zurück',
  'sub.lockedTitle': 'Abonnement erforderlich',
  'sub.lockedDesc': 'Zum Erstellen von Mahlzeitenplänen ist ein Abonnement erforderlich.',
  'sub.viewPlans': 'Pläne anzeigen',
  'allergy.photo': 'Reaktionsfoto',
  'allergy.takePhoto': 'Foto aufnehmen',
  'allergy.attachPhoto': 'Foto anhängen',
  'allergy.photoUploaded': 'Foto angehängt',
  'allergy.removePhoto': 'Foto entfernen',
  'allergy.viewPhoto': 'Foto anzeigen',
  'tools.viewOnStore': 'Bei Amazon ansehen',
  'plan.toddler': 'Kleinkindkost (ab 12 Monate)',
  'plan.toddlerLabel': 'Kleinkind',
  'plan.toddlerDesc': 'Verschiedene Lebensmittelkonsistenzen 3 Mal täglich, Übergang zu Familienmahlzeiten.',
  'plan.reviewIngredients': 'Zutaten überprüfen & bearbeiten',
  'plan.reviewIngredientsDesc': 'Wählen Sie die Zutaten für Ihren Mahlzeitenplan. Ihre zuvor gewählten Zutaten sind bereits markiert.',
  'foodType.details': 'Mehr erfahren',
  'foodType.stepsTitle': 'Schritt-für-Schritt-Anleitung',
  'foodType.tipsTitle': 'Auswahltipps',
  'foodType.selectThis': 'Diese Methode wählen',
  'foodType.selected': 'Ausgewählt',
  'ingredients.starterTip': '✦ Markierte Zutaten sind die am meisten empfohlenen für den Beikost-Start.',
  'ingredients.starterBadge': 'Starter-Empfehlung',
};

const fr: Translations = {
  'app.title': '2U Diversification',
  'app.footer': 'Pour les premiers aliments sains de votre bébé',
  'intro.title1': 'Le premier',
  'intro.title2': 'voyage alimentaire de bébé',
  'intro.subtitle': 'Avant de commencer la diversification, vérifiez la préparation de votre bébé et la vôtre,\net recevez des recommandations d\'outils et de méthodes.',
  'intro.guide': 'Guide de préparation',
  'intro.guideDesc': 'Vérifiez la préparation avec une liste de contrôle.',
  'intro.tools': 'Recommandations d\'outils',
  'intro.toolsDesc': 'Outils recommandés par catégorie pour la diversification.',
  'intro.custom': 'Sélection personnalisée',
  'intro.customDesc': 'Choisissez le type d\'alimentation et les premiers aliments.',
  'intro.customDescKR': 'Type coréen (topping cubes, BLW, végétarien anti-allergie) et premiers aliments.',
  'intro.customDescEU': 'Type européen (purées & mousses, BLW, 100 % bio végétarien) et premiers aliments.',
  'intro.start': 'Commencer la préparation',
  'guide.babyReady': 'Préparation du bébé',
  'guide.momReady': 'Préparation des parents',
  'guide.general': 'Général',
  'guide.yes': 'Oui, nous sommes prêts',
  'guide.no': 'Pas encore',
  'guide.prev': 'Précédent',
  'guide.lastQuestion': 'Dernière question',
  'tools.title': 'Outils pour la diversification',
  'tools.subtitle': 'Voici les outils nécessaires pour la diversification alimentaire.\nSélectionnez ceux que vous souhaitez préparer.',
  'tools.readinessScore': 'Score de préparation',
  'tools.readyCount': 'éléments prêts',
  'tools.readyHigh': 'Vous êtes bien préparé pour commencer la diversification !',
  'tools.readyLow': 'Vous avez besoin d\'un peu plus de préparation. Relisez le guide.',
  'tools.essential': 'Outils essentiels',
  'tools.recommended': 'Outils recommandés',
  'tools.optional': 'Outils optionnels',
  'tools.essentialLabel': 'Essentiel',
  'tools.recommendedLabel': 'Recommandé',
  'tools.optionalLabel': 'Optionnel',
  'tools.selected': 'sélectionnés',
  'tools.next': 'Suivant',
  'foodType.title': 'Quel type d\'alimentation ?',
  'foodType.subtitle': 'Choisissez une méthode adaptée à votre bébé et à votre mode de vie.\nChaque méthode a ses avantages et inconvénients.',
  'foodType.subtitleKR': 'Choisissez l\'une des 3 méthodes courantes en Corée :\ntopping (cubes), BLW ou végétarien sans allergènes.',
  'foodType.subtitleEU': 'Choisissez l\'une des 3 méthodes courantes en Europe :\npurées & mousses, BLW ou 100 % bio végétarien.',
  'foodType.next': 'Suivant',
  'ingredients.title': 'Par quels aliments commencer ?',
  'ingredients.subtitle': 'Sélectionnez les aliments pour commencer la diversification. Référez-vous à l\'âge recommandé\net choisissez des aliments adaptés à votre bébé.',
  'ingredients.allergyTip': 'Introduisez les nouveaux aliments un à la fois, en petites quantités, à 3-4 jours d\'intervalle, pour vérifier les réactions allergiques.',
  'ingredients.selected': 'sélectionnés',
  'ingredients.result': 'Voir les résultats',
  'summary.title': 'Préparation terminée !',
  'summary.subtitle': 'Voici un résumé de votre préparation à la diversification alimentaire.',
  'summary.readiness': 'Résultats de la vérification',
  'summary.readyCount': 'éléments prêts',
  'summary.tools': 'Outils à préparer',
  'summary.foodType': 'Type d\'alimentation choisi',
  'summary.ingredients': 'Premiers aliments',
  'summary.noTools': 'Aucun outil sélectionné.',
  'summary.noFoodType': 'Aucun type d\'alimentation sélectionné.',
  'summary.noIngredients': 'Aucun aliment sélectionné.',
  'summary.print': 'Imprimer le résumé',
  'summary.restart': 'Recommencer',
  'summary.viewPlan': 'Créer un plan repas',
  'summary.viewAllergy': 'Enregistrer les allergies',
  'summary.viewBooks': 'Livres & Articles',
  'plan.title': 'Plan repas bébé',
  'plan.subtitle': 'Nous créerons un plan repas basé sur vos aliments et votre type choisis.\nChoisissez entre hebdomadaire (7 jours) ou mensuel (30 jours).',
  'plan.weekly': 'Hebdomadaire (7 jours)',
  'plan.monthly': 'Mensuel (30 jours)',
  'plan.weeklyDesc': 'Planifiez les repas sur 7 jours. Recommandé pour les débutants.',
  'plan.monthlyDesc': 'Planifiez les repas sur 30 jours. Recommandé pour la planification à long terme.',
  'plan.generate': 'Générer le plan repas',
  'plan.regenerate': 'Régénérer le plan',
  'plan.day': 'Jour',
  'plan.morning': 'Matin',
  'plan.afternoon': 'Déjeuner',
  'plan.evening': 'Dîner',
  'plan.snack': 'Collation',
  'plan.rest': 'Jour de repos',
  'plan.back': 'Retour',
  'plan.save': 'Enregistrer le plan',
  'plan.saved': 'Enregistré',
  'plan.ingredient': 'Aliment',
  'plan.stage': 'Étape de diversification',
  'plan.stageDesc': 'Sélectionnez l\'étape correspondant à l\'âge actuel de votre bébé.',
  'plan.early': 'Début (4–6 mois)',
  'plan.mid': 'Intermédiaire (6–9 mois)',
  'plan.late': 'Avancé (9–12 mois)',
  'plan.earlyLabel': 'Début',
  'plan.midLabel': 'Intermédiaire',
  'plan.lateLabel': 'Avancé',
  'plan.earlyDesc': 'Purées lisses et fluides, 1–2 fois par jour en petites quantités. Introduisez un aliment à la fois pour vérifier les allergies.',
  'plan.midDesc': 'Textures écrasées, 2 fois par jour. Combinez des aliments variés pour un équilibre nutritionnel.',
  'plan.lateDesc': 'Morceaux mous finement hachés, 3 fois par jour. Presque tous les aliments peuvent être utilisés.',
  'plan.stageTransition': 'Transition d\'étape',
  'allergy.title': 'Enregistrements des tests d\'allergie',
  'allergy.subtitle': 'Enregistrez et gérez les réactions allergiques aux aliments en un seul endroit.\nNotez chaque fois que vous introduisez un nouvel aliment.',
  'allergy.add': 'Ajouter un enregistrement',
  'allergy.ingredient': 'Aliment',
  'allergy.date': 'Date du test',
  'allergy.reaction': 'Réaction',
  'allergy.none': 'Aucune réaction',
  'allergy.mild': 'Réaction légère',
  'allergy.severe': 'Réaction sévère',
  'allergy.notes': 'Notes',
  'allergy.notesPlaceholder': 'Notez les symptômes observés ou remarques',
  'allergy.save': 'Enregistrer',
  'allergy.delete': 'Supprimer',
  'allergy.empty': 'Aucun test d\'allergie enregistré pour l\'instant.',
  'allergy.noneLabel': 'Aucune',
  'allergy.mildLabel': 'Légère',
  'allergy.severeLabel': 'Sévère',
  'allergy.back': 'Retour',
  'allergy.history': 'Historique',
  'allergy.noReaction': 'Aucune réaction',
  'allergy.mildReaction': 'Réaction légère',
  'allergy.severeReaction': 'Réaction sévère',
  'books.title': 'Livres & Articles sur la diversification',
  'books.subtitle': 'Une sélection de bestsellers et d\'articles recommandés pour préparer la diversification.',
  'books.topBooks': 'Top 7 Bestsellers',
  'books.articles': 'Articles recommandés',
  'books.by': 'par',
  'books.viewLink': 'Voir les détails',
  'books.back': 'Retour',
  'common.loading': 'Chargement des données...',
  'common.error': 'Une erreur s\'est produite',
  'common.back': 'Retour',
  'common.next': 'Suivant',
  'nav.guide': 'Guide',
  'nav.tools': 'Outils',
  'nav.type': 'Type',
  'nav.ingredients': 'Aliments',
  'nav.summary': 'Terminé',
  'country.select': 'Choisir pays/langue',
  'country.selectLanguage': 'Veuillez sélectionner votre pays pour utiliser le service',
  'guide.momKnowledgeTip': 'Ne vous inquiétez pas si vous n\'avez pas encore de connaissances ! Ce service vous guidera étape par étape — recommandations d\'outils, guides de méthodes et sélection d\'aliments inclus.',
  'guide.toolsPrepTip': 'Pas de souci si vous n\'avez pas encore les ustensiles ! À l\'étape suivante, nous vous aiderons à choisir calmement et pas à pas les outils pour la diversification. Inutile de vous inquiéter pour l\'instant.',
  'tools.popupTitle': 'Détails de l\'outil',
  'tools.popupDetail': 'Description détaillée',
  'tools.recommendedProduct': 'Produit bestseller recommandé',
  'tools.viewProduct': 'Voir sur Amazon',
  'tools.select': 'Sélectionner cet outil',
  'tools.selected_tool': 'Sélectionné',
  'tools.close': 'Fermer',
  'auth.signupTitle': 'Inscrivez-vous pour plus de fonctionnalités',
  'auth.signupSubtitle': 'Inscrivez-vous pour enregistrer vos plans repas et vos allergies et y accéder à tout moment.',
  'auth.email': 'E-mail',
  'auth.password': 'Mot de passe',
  'auth.signup': 'S\'inscrire',
  'auth.signin': 'Se connecter',
  'auth.signout': 'Se déconnecter',
  'auth.signupCta': 'S\'inscrire maintenant',
  'auth.signupDesc': 'L\'inscription est requise pour enregistrer les plans repas et les allergies.',
  'auth.guestNote': 'Les recommandations de livres/articles sont disponibles sans inscription.',
  'auth.guestLockPlan': 'Disponible après inscription',
  'auth.guestLockAllergy': 'Disponible après inscription',
  'auth.welcome': 'Bienvenue',
  'auth.error': 'Une erreur s\'est produite. Veuillez réessayer.',
  'auth.emptyEmail': 'Veuillez saisir votre e-mail.',
  'auth.emptyPassword': 'Veuillez saisir votre mot de passe.',
  'auth.alreadyMember': 'Déjà membre ?',
  'summary.lockedFeature': 'Inscription requise',
  'auth.babyName': 'Prénom du bébé',
  'auth.babyNamePlaceholder': 'Entrez le prénom du bébé',
  'auth.babyAge': 'Âge du bébé (mois)',
  'auth.selectAge': 'Sélectionner l\'âge',
  'sub.title': 'Abonnement plan repas',
  'sub.subtitle': 'Un abonnement est requis pour les plans repas.\nChoisissez entre mensuel ou annuel.',
  'sub.monthly': 'Mensuel',
  'sub.yearly': 'Annuel',
  'sub.monthlyPrice': '11,99 €/mois',
  'sub.yearlyPrice': '99 €/an',
  'sub.monthlyDesc': 'Renouvellement automatique mensuel. Annulable à tout moment.',
  'sub.yearlyDesc': '17 % d\'économie avec la facturation annuelle. Renouvellement automatique annuel.',
  'sub.subscribe': 'S\'abonner',
  'sub.subscribed': 'Abonné',
  'sub.active': 'Actif',
  'sub.back': 'Retour',
  'sub.lockedTitle': 'Abonnement requis',
  'sub.lockedDesc': 'Un abonnement est nécessaire pour créer des plans repas.',
  'sub.viewPlans': 'Voir les abonnements',
  'allergy.photo': 'Photo de réaction',
  'allergy.takePhoto': 'Prendre une photo',
  'allergy.attachPhoto': 'Joindre une photo',
  'allergy.photoUploaded': 'Photo jointe',
  'allergy.removePhoto': 'Supprimer la photo',
  'allergy.viewPhoto': 'Voir la photo',
  'tools.viewOnStore': 'Voir sur Amazon',
  'plan.toddler': 'Alimentation enfant (12 mois+)',
  'plan.toddlerLabel': 'Enfant',
  'plan.toddlerDesc': 'Diverses textures alimentaires 3 fois par jour, transition vers les repas familiaux.',
  'plan.reviewIngredients': 'Vérifier et modifier les aliments',
  'plan.reviewIngredientsDesc': 'Sélectionnez les aliments à inclure dans votre plan repas. Vos aliments précédemment sélectionnés sont déjà cochés.',
  'foodType.details': 'En savoir plus',
  'foodType.stepsTitle': 'Guide étape par étape',
  'foodType.tipsTitle': 'Conseils de sélection',
  'foodType.selectThis': 'Choisir cette méthode',
  'foodType.selected': 'Sélectionné',
  'ingredients.starterTip': '✦ Les aliments marqués sont les plus recommandés pour commencer la diversification.',
  'ingredients.starterBadge': 'Idéal pour débuter',
};

const it: Translations = {
  'app.title': '2U Svezzamento',
  'app.footer': 'Per il primo svezzamento sano del tuo bambino',
  'intro.title1': 'Il primo',
  'intro.title2': 'viaggio alimentare del tuo bambino',
  'intro.subtitle': 'Prima di iniziare lo svezzamento, verifica la prontezza del tuo bambino e la tua,\ne ricevi consigli su strumenti e metodi.',
  'intro.guide': 'Guida alla preparazione',
  'intro.guideDesc': 'Controlla la prontezza con una lista di controllo.',
  'intro.tools': 'Consigli sugli strumenti',
  'intro.toolsDesc': 'Strumenti consigliati per categoria per iniziare lo svezzamento.',
  'intro.custom': 'Selezione personalizzata',
  'intro.customDesc': 'Scegli il tipo di svezzamento e i primi alimenti.',
  'intro.customDescKR': 'Tipo coreano (cubetti topping, BLW, vegetariano anti-allergia) e primi alimenti.',
  'intro.customDescEU': 'Tipo europeo (puree & passato, BLW, 100% bio vegetariano) e primi alimenti.',
  'intro.start': 'Inizia la preparazione',
  'guide.babyReady': 'Prontezza del bambino',
  'guide.momReady': 'Prontezza dei genitori',
  'guide.general': 'Generale',
  'guide.yes': 'Sì, siamo pronti',
  'guide.no': 'Non ancora',
  'guide.prev': 'Precedente',
  'guide.lastQuestion': 'Ultima domanda',
  'tools.title': 'Strumenti per lo svezzamento',
  'tools.subtitle': 'Ecco gli strumenti necessari per iniziare lo svezzamento.\nSeleziona quelli che vuoi preparare.',
  'tools.readinessScore': 'Punteggio di prontezza',
  'tools.readyCount': 'elementi pronti',
  'tools.readyHigh': 'Sei ben preparato per iniziare lo svezzamento!',
  'tools.readyLow': 'Hai bisogno di un po\' più di preparazione. Rileggi la guida.',
  'tools.essential': 'Strumenti essenziali',
  'tools.recommended': 'Strumenti consigliati',
  'tools.optional': 'Strumenti opzionali',
  'tools.essentialLabel': 'Essenziale',
  'tools.recommendedLabel': 'Consigliato',
  'tools.optionalLabel': 'Opzionale',
  'tools.selected': 'selezionati',
  'tools.next': 'Avanti',
  'foodType.title': 'Che tipo di svezzamento?',
  'foodType.subtitle': 'Scegli un metodo di svezzamento adatto al tuo bambino e al tuo stile di vita.\nOgni metodo ha pro e contro.',
  'foodType.subtitleKR': 'Scegli uno dei 3 metodi comuni in Corea:\ncubetti topping, BLW o vegetariano anti-allergia.',
  'foodType.subtitleEU': 'Scegli uno dei 3 metodi comuni in Europa:\npuree & passato, BLW o 100% bio vegetariano.',
  'foodType.next': 'Avanti',
  'ingredients.title': 'Con quali alimenti iniziare?',
  'ingredients.subtitle': 'Seleziona gli alimenti per iniziare lo svezzamento. Consulta l\'età consigliata\ne scegli alimenti adatti al tuo bambino.',
  'ingredients.allergyTip': 'Introduci i nuovi alimenti uno alla volta, in piccole quantità, a 3-4 giorni di distanza, per verificare le reazioni allergiche.',
  'ingredients.selected': 'selezionati',
  'ingredients.result': 'Vedi risultati',
  'summary.title': 'Preparazione completata!',
  'summary.subtitle': 'Ecco un riepilogo della tua preparazione allo svezzamento basato sulle tue scelte.',
  'summary.readiness': 'Risultati della verifica',
  'summary.readyCount': 'elementi pronti',
  'summary.tools': 'Strumenti da preparare',
  'summary.foodType': 'Tipo di svezzamento scelto',
  'summary.ingredients': 'Primi alimenti',
  'summary.noTools': 'Nessuno strumento selezionato.',
  'summary.noFoodType': 'Nessun tipo di svezzamento selezionato.',
  'summary.noIngredients': 'Nessun alimento selezionato.',
  'summary.print': 'Stampa riepilogo',
  'summary.restart': 'Ricomincia',
  'summary.viewPlan': 'Crea piano pasti',
  'summary.viewAllergy': 'Registra allergie',
  'summary.viewBooks': 'Libri & Articoli',
  'plan.title': 'Piano pasti per lo svezzamento',
  'plan.subtitle': 'Creeremo un piano pasti basato sugli alimenti e il tipo scelti.\nScegli tra settimanale (7 giorni) o mensile (30 giorni).',
  'plan.weekly': 'Settimanale (7 giorni)',
  'plan.monthly': 'Mensile (30 giorni)',
  'plan.weeklyDesc': 'Pianifica i pasti per 7 giorni. Consigliato per i principianti.',
  'plan.monthlyDesc': 'Pianifica i pasti per 30 giorni. Consigliato per la pianificazione a lungo termine.',
  'plan.generate': 'Genera piano pasti',
  'plan.regenerate': 'Rigenera piano',
  'plan.day': 'Giorno',
  'plan.morning': 'Mattina',
  'plan.afternoon': 'Pranzo',
  'plan.evening': 'Cena',
  'plan.snack': 'Merenda',
  'plan.rest': 'Giorno di riposo',
  'plan.back': 'Indietro',
  'plan.save': 'Salva piano',
  'plan.saved': 'Salvato',
  'plan.ingredient': 'Alimento',
  'plan.stage': 'Fase di svezzamento',
  'plan.stageDesc': 'Seleziona la fase corrispondente all\'età attuale del tuo bambino.',
  'plan.early': 'Inizio (4–6 mesi)',
  'plan.mid': 'Intermedio (6–9 mesi)',
  'plan.late': 'Avanzato (9–12 mesi)',
  'plan.earlyLabel': 'Inizio',
  'plan.midLabel': 'Intermedio',
  'plan.lateLabel': 'Avanzato',
  'plan.earlyDesc': 'Puree lisce e fluide, 1–2 volte al giorno in piccole quantità. Introduci un alimento alla volta per verificare le allergie.',
  'plan.midDesc': 'Consistenze schiacciate, 2 volte al giorno. Combina alimenti vari per l\'equilibrio nutrizionale.',
  'plan.lateDesc': 'Pezzetti morbidi finemente tritati, 3 volte al giorno. Si possono usare quasi tutti gli alimenti.',
  'plan.stageTransition': 'Transizione di fase',
  'allergy.title': 'Registro test allergie',
  'allergy.subtitle': 'Registra e gestisci le reazioni allergiche agli alimenti in un unico posto.\nTieni un registro ogni volta che introduci un nuovo alimento.',
  'allergy.add': 'Aggiungi registro',
  'allergy.ingredient': 'Alimento',
  'allergy.date': 'Data del test',
  'allergy.reaction': 'Reazione',
  'allergy.none': 'Nessuna reazione',
  'allergy.mild': 'Reazione lieve',
  'allergy.severe': 'Reazione grave',
  'allergy.notes': 'Note',
  'allergy.notesPlaceholder': 'Scrivi i sintomi osservati o le note',
  'allergy.save': 'Salva',
  'allergy.delete': 'Elimina',
  'allergy.empty': 'Nessun test allergia registrato ancora.',
  'allergy.noneLabel': 'Nessuna',
  'allergy.mildLabel': 'Lieve',
  'allergy.severeLabel': 'Grave',
  'allergy.back': 'Indietro',
  'allergy.history': 'Cronologia',
  'allergy.noReaction': 'Nessuna reazione',
  'allergy.mildReaction': 'Reazione lieve',
  'allergy.severeReaction': 'Reazione grave',
  'books.title': 'Libri & Articoli sullo svezzamento',
  'books.subtitle': 'Una selezione di bestseller e articoli consigliati per preparare lo svezzamento.',
  'books.topBooks': 'Top 7 Bestseller',
  'books.articles': 'Articoli consigliati',
  'books.by': 'di',
  'books.viewLink': 'Vedi dettagli',
  'books.back': 'Indietro',
  'common.loading': 'Caricamento dati...',
  'common.error': 'Si è verificato un errore',
  'common.back': 'Indietro',
  'common.next': 'Avanti',
  'nav.guide': 'Guida',
  'nav.tools': 'Strumenti',
  'nav.type': 'Tipo',
  'nav.ingredients': 'Alimenti',
  'nav.summary': 'Fine',
  'country.select': 'Seleziona paese/lingua',
  'country.selectLanguage': 'Seleziona il tuo paese per utilizzare il servizio',
  'guide.momKnowledgeTip': 'Non preoccuparti se non hai ancora conoscenze! Questo servizio ti guiderà passo dopo passo — consigli sugli strumenti, guide ai metodi e selezione degli alimenti inclusi.',
  'guide.toolsPrepTip': 'Non preoccuparti se non hai ancora gli strumenti! Nella fase successiva ti aiuteremo a scegliere con calma, passo dopo passo, gli utensili per lo svezzamento. Per ora non devi stressarti.',
  'tools.popupTitle': 'Dettagli strumento',
  'tools.popupDetail': 'Descrizione dettagliata',
  'tools.recommendedProduct': 'Prodotto bestseller consigliato',
  'tools.viewProduct': 'Vedi su Amazon',
  'tools.select': 'Seleziona questo strumento',
  'tools.selected_tool': 'Selezionato',
  'tools.close': 'Chiudi',
  'auth.signupTitle': 'Registrati per più funzionalità',
  'auth.signupSubtitle': 'Registrati per salvare i tuoi piani pasti e le registrazioni delle allergie e accedervi in qualsiasi momento.',
  'auth.email': 'E-mail',
  'auth.password': 'Password',
  'auth.signup': 'Registrati',
  'auth.signin': 'Accedi',
  'auth.signout': 'Esci',
  'auth.signupCta': 'Registrati ora',
  'auth.signupDesc': 'La registrazione è necessaria per salvare piani pasti e allergie.',
  'auth.guestNote': 'I consigli su libri/articoli sono disponibili senza registrazione.',
  'auth.guestLockPlan': 'Disponibile dopo la registrazione',
  'auth.guestLockAllergy': 'Disponibile dopo la registrazione',
  'auth.welcome': 'Benvenuto',
  'auth.error': 'Si è verificato un errore. Riprova.',
  'auth.emptyEmail': 'Inserisci la tua e-mail.',
  'auth.emptyPassword': 'Inserisci la tua password.',
  'auth.alreadyMember': 'Sei già membro?',
  'summary.lockedFeature': 'Registrazione richiesta',
  'auth.babyName': 'Nome del bambino',
  'auth.babyNamePlaceholder': 'Inserisci il nome del bambino',
  'auth.babyAge': 'Età del bambino (mesi)',
  'auth.selectAge': 'Seleziona età',
  'sub.title': 'Abbonamento piano pasti',
  'sub.subtitle': 'Un abbonamento è necessario per i piani pasti.\nScegli tra mensile o annuale.',
  'sub.monthly': 'Mensile',
  'sub.yearly': 'Annuale',
  'sub.monthlyPrice': '€11,99/mese',
  'sub.yearlyPrice': '€99/anno',
  'sub.monthlyDesc': 'Rinnovo automatico mensile. Cancellabile in qualsiasi momento.',
  'sub.yearlyDesc': '17% di risparmio con fatturazione annuale. Rinnovo automatico annuale.',
  'sub.subscribe': 'Abbonati',
  'sub.subscribed': 'Abbonato',
  'sub.active': 'Attivo',
  'sub.back': 'Indietro',
  'sub.lockedTitle': 'Abbonamento richiesto',
  'sub.lockedDesc': 'È necessario un abbonamento per creare piani pasti.',
  'sub.viewPlans': 'Vedi abbonamenti',
  'allergy.photo': 'Foto della reazione',
  'allergy.takePhoto': 'Scatta una foto',
  'allergy.attachPhoto': 'Allega una foto',
  'allergy.photoUploaded': 'Foto allegata',
  'allergy.removePhoto': 'Rimuovi foto',
  'allergy.viewPhoto': 'Vedi foto',
  'tools.viewOnStore': 'Vedi su Amazon',
  'plan.toddler': 'Alimentazione bambino (12 mesi+)',
  'plan.toddlerLabel': 'Bambino',
  'plan.toddlerDesc': 'Varie consistenze alimentari 3 volte al giorno, transizione verso i pasti in famiglia.',
  'plan.reviewIngredients': 'Verifica e modifica alimenti',
  'plan.reviewIngredientsDesc': 'Seleziona gli alimenti da includere nel piano pasti. I tuoi alimenti precedentemente selezionati sono già spuntati.',
  'foodType.details': 'Scopri di più',
  'foodType.stepsTitle': 'Guida passo dopo passo',
  'foodType.tipsTitle': 'Consigli di selezione',
  'foodType.selectThis': 'Scegli questo metodo',
  'foodType.selected': 'Selezionato',
  'ingredients.starterTip': '✦ Gli alimenti evidenziati sono i più consigliati per iniziare lo svezzamento.',
  'ingredients.starterBadge': 'Ideale per iniziare',
};

export const translations: Record<'ko' | 'en' | 'de' | 'fr' | 'it', Translations> = { ko, en, de, fr, it };

export function t(lang: Language, key: TranslationKey): string {
  if (lang === 'ko') return translations.ko[key] ?? key;
  if (lang === 'de') return translations.de[key] ?? key;
  if (lang === 'fr') return translations.fr[key] ?? key;
  if (lang === 'it') return translations.it[key] ?? key;
  return translations.en[key] ?? key;
}

/** Localized day label for meal plan cards, e.g. "일차 7", "Tag 7", "Day 7". */
export function formatPlanDay(lang: Language, num: number): string {
  const templates: Record<Language, string> = {
    ko: '일차 {{num}}',
    en: 'Day {{num}}',
    de: 'Tag {{num}}',
    fr: 'Jour {{num}}',
    it: 'Giorno {{num}}',
  };
  return templates[lang].replace('{{num}}', String(num));
}

/** Pick the right localized string from nullable DB columns with graceful fallback. */
export function loc(
  lang: Language,
  ko: string,
  en?: string | null,
  de?: string | null,
  fr?: string | null,
  it?: string | null,
): string {
  if (lang === 'ko') return ko;
  if (lang === 'de') return de ?? en ?? ko;
  if (lang === 'fr') return fr ?? en ?? ko;
  if (lang === 'it') return it ?? en ?? ko;
  return en ?? ko;
}
