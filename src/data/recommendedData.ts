import type { RecommendedContentMarket } from './constants';
import { KR_RECOMMENDED_BOOKS } from './locales/recommended/krBooks';

/** Localized copy for books & articles — keyed by app language */
export type LocalizedCopy = {
  ko?: string;
  en: string;
  de?: string;
  fr?: string;
  it?: string;
};

export type RecommendedBookEntry = {
  id: string;
  rank: number;
  title: LocalizedCopy;
  author: LocalizedCopy;
  description: LocalizedCopy;
  /** Canonical web URL (Amazon or domestic bookstore) */
  productUrl: string;
  /** Kyobo sale command id — used for KR app deep links */
  kyoboSaleCmdtId?: string;
  coverImageUrl?: string | null;
  /** Placeholder tint when no cover image is available */
  coverColor?: string;
};

export type RecommendedArticleEntry = {
  id: string;
  sort_order: number;
  title: LocalizedCopy;
  description: LocalizedCopy;
  source: LocalizedCopy;
  link: string;
};

const DE_BOOKS: RecommendedBookEntry[] = [
  {
    id: 'de-book-1',
    rank: 1,
    title: {
      de: 'Das große Buch von Babybrei & Beikost',
      en: 'The Big Book of Baby Porridge & Weaning',
      ko: '아기 이유식 & 베이비푸드 완벽 가이드',
    },
    author: { de: 'Natalie Stadelmann', en: 'Natalie Stadelmann', ko: '나탈리 스타델만' },
    description: {
      de: 'Beikostplan, 70+ Rezepte für Brei, Fingerfood und Familiengerichte — Amazon.de Beikost-Bestseller.',
      en: 'Weaning plan with 70+ recipes for purée, finger food and family meals.',
      ko: '이유식 계획표와 70가지 이상의 레시피를 담은 독일 베스트셀러.',
    },
    productUrl: 'https://www.amazon.de/dp/3222140316',
    coverColor: '#FEF3C7',
  },
  {
    id: 'de-book-2',
    rank: 2,
    title: {
      de: 'So isst dein Baby Beikost',
      en: 'How Your Baby Eats Solid Food',
      ko: '우리 아기 이유식 이렇게 시작해요',
    },
    author: { de: 'Sandra Feuser', en: 'Sandra Feuser', ko: '산드라 포이저' },
    description: {
      de: 'Starthilfe mit und ohne Babybrei — inklusive 4-Wochen-Anleitung.',
      en: 'Starter guide with or without purée — includes a 4-week plan.',
      ko: '퓨레형·BLW 모두 가능한 4주 이유식 로드맵.',
    },
    productUrl: 'https://www.amazon.de/dp/3833869725',
    coverColor: '#DBEAFE',
  },
  {
    id: 'de-book-3',
    rank: 3,
    title: {
      de: 'Mein Baby isst mit!',
      en: 'My Baby Eats Along!',
      ko: '우리 아기도 함께 먹어요',
    },
    author: { de: 'Julia Marre', en: 'Julia Marre', ko: '율리아 마레' },
    description: {
      de: 'Individueller Beikoststart mit Brei, BLW oder beidem — 80+ Rezepte.',
      en: 'Flexible weaning with purée, BLW or both — 80+ recipes.',
      ko: '퓨레·BLW 병행 가능, 80가지 이상 레시피.',
    },
    productUrl: 'https://www.amazon.de/dp/3864830870',
    coverColor: '#D1FAE5',
  },
  {
    id: 'de-book-4',
    rank: 4,
    title: {
      de: 'Breifrei für Babys (GU Küchenratgeber)',
      en: 'Baby-Led Weaning for Babies (GU Guide)',
      ko: 'BLW 이유식 (GU 키친 가이드)',
    },
    author: { de: 'GU Redaktion', en: 'GU Editors', ko: 'GU 편집부' },
    description: {
      de: 'Gesunde BLW-Rezepte und praktische Tipps vom GU Küchenratgeber.',
      en: 'Healthy BLW recipes and practical tips from GU.',
      ko: 'GU가 엄선한 BLW 레시피와 실전 팁.',
    },
    productUrl: 'https://www.amazon.de/dp/3833876578',
    coverColor: '#FCE7F3',
  },
  {
    id: 'de-book-5',
    rank: 5,
    title: {
      de: 'Der große Breifrei-Fahrplan',
      en: 'The Big BLW Roadmap',
      ko: 'BLW 완벽 로드맵',
    },
    author: { de: 'Annabel Karmel', en: 'Annabel Karmel', ko: '애너벨 카멜' },
    description: {
      de: 'Schritt für Schritt Beikost mit Baby-led Weaning — sicher und einfach.',
      en: 'Step-by-step baby-led weaning — safe and simple.',
      ko: '단계별 BLW 이유식 안전 가이드.',
    },
    productUrl: 'https://www.amazon.de/dp/3965450921',
    coverColor: '#E0E7FF',
  },
  {
    id: 'de-book-6',
    rank: 6,
    title: {
      de: 'Breifrei & Glücklich',
      en: 'BLW & Happy',
      ko: 'BLW와 행복한 식탁',
    },
    author: { de: 'MH Verlag', en: 'MH Verlag', ko: 'MH Verlag' },
    description: {
      de: 'BLW-Ratgeber mit 90 Familienrezepten für einen entspannten Beikoststart.',
      en: 'BLW guide with 90 family recipes for a relaxed weaning start.',
      ko: '가족 레시피 90선이 담긴 BLW 가이드.',
    },
    productUrl: 'https://www.amazon.de/dp/3965450380',
    coverColor: '#FFEDD5',
  },
  {
    id: 'de-book-7',
    rank: 7,
    title: {
      de: 'Baby-led Weaning – Das Grundlagenbuch',
      en: 'Baby-Led Weaning — The Essential Guide',
      ko: 'BLW 기본서',
    },
    author: { de: 'Gill Rapley & Tracey Murkett', en: 'Gill Rapley & Tracey Murkett', ko: '길 래플리 & 트레이시 머켓' },
    description: {
      de: 'Der stressfreie Beikostweg — komplett überarbeitete Neuausgabe.',
      en: 'The stress-free weaning path — fully revised edition.',
      ko: '스트레스 없는 BLW의 바이블, 개정판.',
    },
    productUrl: 'https://www.amazon.de/dp/3962710284',
    coverColor: '#F3F4F6',
  },
];

const FR_BOOKS: RecommendedBookEntry[] = [
  {
    id: 'fr-book-1',
    rank: 1,
    title: {
      fr: 'Cuisinez pour bébé',
      en: 'Cook for Baby',
      ko: '아기를 위한 요리',
    },
    author: { fr: 'Clémence Maumené', en: 'Clémence Maumené', ko: '클레망스 모메네' },
    description: {
      fr: '100 recettes et conseils pour la diversification — bestseller Amazon.fr.',
      en: '100 recipes and tips for starting solids.',
      ko: '이유식 100레시피, Amazon.fr 베스트셀러.',
    },
    productUrl: 'https://www.amazon.fr/dp/2226459987',
    coverColor: '#FEF3C7',
  },
  {
    id: 'fr-book-2',
    rank: 2,
    title: {
      fr: 'La DME — Le guide complet',
      en: 'BLW — The Complete Guide',
      ko: 'DME(BLW) 완벽 가이드',
    },
    author: { fr: 'Aurélie Mantault Roberdel', en: 'Aurélie Mantault Roberdel', ko: '오렐리 망토 로베르델' },
    description: {
      fr: 'Diversification menée par l\'enfant pas à pas, avec menus de saison.',
      en: 'Baby-led weaning step by step with seasonal menus.',
      ko: '아기 주도 이유식(DME) 단계별 안내.',
    },
    productUrl: 'https://www.amazon.fr/dp/2019457815',
    coverColor: '#DBEAFE',
  },
  {
    id: 'fr-book-3',
    rank: 3,
    title: {
      fr: 'Le guide de la diversification mixte',
      en: 'The Mixed Weaning Guide',
      ko: '혼합 이유식 가이드',
    },
    author: { fr: 'Céline de Sousa & Christine Zalejski', en: 'Céline de Sousa & Christine Zalejski', ko: '셀린 드 수사 & 크리스틴 잘레스키' },
    description: {
      fr: 'Purées ou DME ? Faites les deux — 100 recettes faciles.',
      en: 'Purée or BLW? Do both — 100 easy recipes.',
      ko: '퓨레와 DME를 함께, 100가지 레시피.',
    },
    productUrl: 'https://www.amazon.fr/dp/2036040052',
    coverColor: '#D1FAE5',
  },
  {
    id: 'fr-book-4',
    rank: 4,
    title: {
      fr: 'Le Grand livre de la DME',
      en: 'The Big Book of BLW',
      ko: 'DME 대백과',
    },
    author: { fr: 'Christine Zalejski', en: 'Christine Zalejski', ko: '크리스틴 잘레스키' },
    description: {
      fr: 'La référence de la diversification menée par l\'enfant pas à pas.',
      en: 'The reference guide for baby-led weaning.',
      ko: '프랑스 DME의 표준 참고서.',
    },
    productUrl: 'https://www.amazon.fr/dp/2212431536',
    coverColor: '#FCE7F3',
  },
  {
    id: 'fr-book-5',
    rank: 5,
    title: {
      fr: 'La diversification alimentaire ? Même pas peur !',
      en: 'Starting Solids? No Fear!',
      ko: '이유식, 두려워하지 마세요',
    },
    author: { fr: 'Cooking for my baby', en: 'Cooking for my baby', ko: 'Cooking for my baby' },
    description: {
      fr: 'Conseils rassurants et recettes gourmandes pour les parents débutants.',
      en: 'Reassuring tips and tasty recipes for new parents.',
      ko: '초보 부모를 위한 안심 이유식 레시피.',
    },
    productUrl: 'https://www.amazon.fr/dp/2212569872',
    coverColor: '#E0E7FF',
  },
  {
    id: 'fr-book-6',
    rank: 6,
    title: {
      fr: 'Premiers repas de mon bébé',
      en: 'My Baby\'s First Meals',
      ko: '우리 아기 첫 식사',
    },
    author: { fr: 'Céline Richonnet', en: 'Céline Richonnet', ko: '셀린 리숴네' },
    description: {
      fr: 'Programme jour par jour de 4 mois à 3 ans.',
      en: 'Day-by-day program from 4 months to 3 years.',
      ko: '4개월~3세 일별 이유식 프로그램.',
    },
    productUrl: 'https://www.amazon.fr/dp/2226443126',
    coverColor: '#FFEDD5',
  },
  {
    id: 'fr-book-7',
    rank: 7,
    title: {
      fr: 'Comme Des Grands — DME',
      en: 'Like the Grown-Ups — BLW',
      ko: '어른처럼 — DME',
    },
    author: { fr: 'Éditions Thierry Souccar', en: 'Thierry Souccar Editions', ko: '티에리 수카르 출판' },
    description: {
      fr: 'Diversification menée par l\'enfant — édition illustrée.',
      en: 'Baby-led weaning — illustrated edition.',
      ko: '그림으로 배우는 DME 입문서.',
    },
    productUrl: 'https://www.amazon.fr/dp/2311210317',
    coverColor: '#F3F4F6',
  },
];

const IT_BOOKS: RecommendedBookEntry[] = [
  {
    id: 'it-book-1',
    rank: 1,
    title: {
      it: 'Lo svezzamento è vostro! (edizione ampliata)',
      en: 'Weaning Is Yours! (Expanded Edition)',
      ko: '스베차멘토는 여러분의 것!',
    },
    author: { it: 'Pediatra Carla', en: 'Pediatra Carla', ko: 'Pediatra Carla' },
    description: {
      it: 'Manuale pratico di autosvezzamento — #1 bestseller Amazon.it.',
      en: 'Practical baby-led weaning manual — Amazon.it #1.',
      ko: 'Amazon.it 1위, 실전 자율 이유식 매뉴얼.',
    },
    productUrl: 'https://www.amazon.it/dp/8872241235',
    coverColor: '#FEF3C7',
  },
  {
    id: 'it-book-2',
    rank: 2,
    title: {
      it: 'L\'atlante dello svezzamento',
      en: 'The Weaning Atlas',
      ko: '이유식 아틀라스',
    },
    author: { it: 'Luca Pani & Elisa Costa', en: 'Luca Pani & Elisa Costa', ko: 'Luca Pani & Elisa Costa' },
    description: {
      it: 'Alimentazione sana, facile e sicura dai primi mesi.',
      en: 'Healthy, easy and safe eating from the first months.',
      ko: '초기부터 안전하고 건강한 이유식.',
    },
    productUrl: 'https://www.amazon.it/dp/8836821465',
    coverColor: '#DBEAFE',
  },
  {
    id: 'it-book-3',
    rank: 3,
    title: {
      it: 'Svezzamento per tutta la famiglia',
      en: 'Weaning for the Whole Family',
      ko: '온 가족 이유식',
    },
    author: { it: 'Chiara Manzoni', en: 'Chiara Manzoni', ko: 'Chiara Manzoni' },
    description: {
      it: 'Ricette condivise a tavola per genitori e bambini.',
      en: 'Shared family recipes for parents and babies.',
      ko: '부모와 아기가 함께하는 식탁 레시피.',
    },
    productUrl: 'https://www.amazon.it/dp/8836828923',
    coverColor: '#D1FAE5',
  },
  {
    id: 'it-book-4',
    rank: 4,
    title: {
      it: 'Non chiamatelo svezzamento',
      en: 'Don\'t Call It Weaning',
      ko: '이유식이라 부르지 마세요',
    },
    author: { it: 'Sergio Conti Nibali', en: 'Sergio Conti Nibali', ko: 'Sergio Conti Nibali' },
    description: {
      it: 'L\'autosvezzamento naturale secondo Uppa Edizioni.',
      en: 'Natural baby-led weaning by Uppa Edizioni.',
      ko: '자연스러운 자율 이유식 접근.',
    },
    productUrl: 'https://www.amazon.it/dp/8860185218',
    coverColor: '#FCE7F3',
  },
  {
    id: 'it-book-5',
    rank: 5,
    title: {
      it: '100 e + alimenti per i primi due anni',
      en: '100+ Foods for the First Two Years',
      ko: '2세까지 100+ 식재료',
    },
    author: { it: 'Pediatra Carla', en: 'Pediatra Carla', ko: 'Pediatra Carla' },
    description: {
      it: 'Guida pratica per accompagnare l\'autosvezzamento in modo consapevole.',
      en: 'Practical guide to mindful baby-led weaning.',
      ko: '의식적인 자율 이유식 실전 가이드.',
    },
    productUrl: 'https://www.amazon.it/dp/8891832098',
    coverColor: '#E0E7FF',
  },
  {
    id: 'it-book-6',
    rank: 6,
    title: {
      it: 'Svezzamento: io mangio con voi!',
      en: 'Weaning: I Eat With You!',
      ko: '이유식: 함께 먹어요!',
    },
    author: { it: 'Redazione Giunti', en: 'Giunti Editors', ko: 'Giunti 편집부' },
    description: {
      it: 'Consigli, ricette e menù per tutta la famiglia — edizione a colori.',
      en: 'Tips, recipes and menus for the whole family.',
      ko: '가족을 위한 이유식 팁·레시피·메뉴.',
    },
    productUrl: 'https://www.amazon.it/dp/8868744567',
    coverColor: '#FFEDD5',
  },
  {
    id: 'it-book-7',
    rank: 7,
    title: {
      it: 'Il cucchiaino d\'argento',
      en: 'The Silver Spoon for Baby',
      ko: '은숟가락 이유식',
    },
    author: { it: 'Amanda Grant', en: 'Amanda Grant', ko: 'Amanda Grant' },
    description: {
      it: 'Guida allo svezzamento felice 6–12 mesi con ricette testate.',
      en: 'Happy weaning guide for 6–12 months with tested recipes.',
      ko: '6~12개월 행복 이유식 가이드.',
    },
    productUrl: 'https://www.amazon.it/dp/8804631521',
    coverColor: '#F3F4F6',
  },
];

export const RECOMMENDED_BOOKS_BY_MARKET: Record<RecommendedContentMarket, RecommendedBookEntry[]> = {
  KR: KR_RECOMMENDED_BOOKS,
  DE: DE_BOOKS,
  FR: FR_BOOKS,
  IT: IT_BOOKS,
};

const KR_ARTICLES: RecommendedArticleEntry[] = [
  {
    id: 'kr-article-1',
    sort_order: 1,
    title: { ko: '네이버 육아·리빙 — 이유식 시작 가이드', en: 'Naver Parenting — Starting Solids Guide' },
    description: {
      ko: '국내 최대 포털 네이버 육아·리빙 카테고리의 이유식 칼럼 모음.',
      en: 'Weaning columns from Naver\'s top parenting & living section.',
    },
    source: { ko: '네이버 육아·리빙', en: 'Naver Parenting & Living' },
    link: 'https://section.cafe.naver.com/ca-fe/home',
  },
  {
    id: 'kr-article-2',
    sort_order: 2,
    title: { ko: '맘스홀릭 — 이유식 정보', en: 'Momsholic — Weaning Information' },
    description: {
      ko: '국내 대표 육아 커뮤니티 맘스홀릭의 이유식 전문 칼럼.',
      en: 'Expert weaning columns from Momsholic, Korea\'s leading parenting community.',
    },
    source: { ko: '맘스홀릭', en: 'Momsholic' },
    link: 'https://www.momsholic.com/pregnancy_info/weaning',
  },
  {
    id: 'kr-article-3',
    sort_order: 3,
    title: { ko: '아이사랑 — 영유아기 영양·이유식', en: 'Childcare Portal — Infant Nutrition' },
    description: {
      ko: '보육·육아 종합 포털의 영유아 영양·이유식 가이드.',
      en: 'Infant nutrition and weaning guide from a major childcare portal.',
    },
    source: { ko: '아이사랑', en: 'Childcare Portal' },
    link: 'https://www.childcare.go.kr/info/main',
  },
  {
    id: 'kr-article-4',
    sort_order: 4,
    title: { ko: '네이버 카페 — 이유식·유아식 레시피', en: 'Naver Cafe — Weaning Recipes' },
    description: {
      ko: '실제 부모들이 공유하는 이유식·유아식 레시피 커뮤니티.',
      en: 'Parent-shared weaning and toddler food recipe community.',
    },
    source: { ko: '네이버 카페', en: 'Naver Cafe' },
    link: 'https://cafe.naver.com/loosebaby',
  },
];

const DE_ARTICLES: RecommendedArticleEntry[] = [
  {
    id: 'de-article-1',
    sort_order: 1,
    title: { de: 'Eltern.de — Beikost: Der sichere Start', en: 'Eltern.de — Safe Weaning Start', ko: 'Eltern.de — 안전한 이유식 시작' },
    description: {
      de: 'Deutschlands führendes Elternportal — Beikost-Leitfaden von Expert:innen.',
      en: 'Germany\'s leading parenting portal — expert weaning guide.',
      ko: '독일 대표 육아 포털 Eltern.de의 이유식 가이드.',
    },
    source: { de: 'Eltern.de', en: 'Eltern.de', ko: 'Eltern.de' },
    link: 'https://www.eltern.de/kinderernaehrung/beikost/',
  },
  {
    id: 'de-article-2',
    sort_order: 2,
    title: { de: 'Beikost starten — Wann und wie?', en: 'Starting Solids — When and How?', ko: '이유식 시작 — 언제, 어떻게?' },
    description: {
      de: 'Schritt-für-Schritt-Anleitung zum Beikoststart auf Eltern.de.',
      en: 'Step-by-step weaning start guide on Eltern.de.',
      ko: 'Eltern.de 단계별 이유식 시작 안내.',
    },
    source: { de: 'Eltern.de', en: 'Eltern.de', ko: 'Eltern.de' },
    link: 'https://www.eltern.de/kinderernaehrung/beikost/beikost-start/',
  },
  {
    id: 'de-article-3',
    sort_order: 3,
    title: { de: 'Familienhandbuch — Beikost & Ernährung', en: 'Family Handbook — Weaning & Nutrition', ko: '가족 핸드북 — 이유식·영양' },
    description: {
      de: 'Offizielle Informationen zur Kinderernährung vom Bundesministerium.',
      en: 'Official child nutrition information from the German government.',
      ko: '독일 연방 정부 공식 영유아 영양 정보.',
    },
    source: { de: 'familienhandbuch.de', en: 'familienhandbuch.de', ko: 'familienhandbuch.de' },
    link: 'https://familienhandbuch.de/kleinkind/entwicklung-und-erziehung/ernaehrung-und-gesundheit/beikost',
  },
  {
    id: 'de-article-4',
    sort_order: 4,
    title: { de: 'Breifrei (BLW) — Tipps & Sicherheit', en: 'BLW — Tips & Safety', ko: 'BLW — 팁과 안전' },
    description: {
      de: 'Baby-led Weaning: Sicherheitstipps und praktische Empfehlungen.',
      en: 'Baby-led weaning safety tips and practical recommendations.',
      ko: 'BLW 안전 수칙과 실전 팁.',
    },
    source: { de: 'Eltern.de', en: 'Eltern.de', ko: 'Eltern.de' },
    link: 'https://www.eltern.de/kinderernaehrung/beikost/breikost-baby-led-weaning/',
  },
];

const FR_ARTICLES: RecommendedArticleEntry[] = [
  {
    id: 'fr-article-1',
    sort_order: 1,
    title: { fr: 'Magicmaman — Diversification alimentaire', en: 'Magicmaman — Starting Solids', ko: 'Magicmaman — 이유식' },
    description: {
      fr: 'Le portail n°1 des jeunes mamans — guide complet de la diversification.',
      en: 'France\'s #1 young moms portal — complete weaning guide.',
      ko: '프랑스 대표 육아 포털 Magicmaman의 이유식 가이드.',
    },
    source: { fr: 'Magicmaman', en: 'Magicmaman', ko: 'Magicmaman' },
    link: 'https://www.magicmaman.com/actus/bebe-alimentation-diversification-17273',
  },
  {
    id: 'fr-article-2',
    sort_order: 2,
    title: { fr: 'DME — La diversification menée par l\'enfant', en: 'BLW — Baby-Led Weaning', ko: 'DME — 아기 주도 이유식' },
    description: {
      fr: 'Tout savoir sur la DME : principes, sécurité et recettes.',
      en: 'Everything about BLW: principles, safety and recipes.',
      ko: 'DME(BLW) 원칙, 안전, 레시피 총정리.',
    },
    source: { fr: 'Magicmaman', en: 'Magicmaman', ko: 'Magicmaman' },
    link: 'https://www.magicmaman.com/bebe/diversification-alimentaire/dme-diversification-menee-par-l-enfant,3657890.asp',
  },
  {
    id: 'fr-article-3',
    sort_order: 3,
    title: { fr: 'PasseportSanté — Aliments pour bébé', en: 'PasseportSanté — Baby Foods', ko: 'PasseportSanté — 아기 식품' },
    description: {
      fr: 'Guide médical fiable sur l\'introduction des aliments solides.',
      en: 'Trusted medical guide on introducing solid foods.',
      ko: '신뢰할 수 있는 의학 기반 이유식 정보.',
    },
    source: { fr: 'PasseportSanté', en: 'PasseportSanté', ko: 'PasseportSanté' },
    link: 'https://www.passeportsante.net/fr/bebe/Solutions/Pages/aliments-bebe.aspx',
  },
  {
    id: 'fr-article-4',
    sort_order: 4,
    title: { fr: 'Doctissimo — Diversification pas à pas', en: 'Doctissimo — Weaning Step by Step', ko: 'Doctissimo — 단계별 이유식' },
    description: {
      fr: 'Calendrier et conseils pratiques pour diversifier l\'alimentation de bébé.',
      en: 'Calendar and practical tips for baby\'s weaning journey.',
      ko: '아기 이유식 일정과 실용 팁.',
    },
    source: { fr: 'Doctissimo', en: 'Doctissimo', ko: 'Doctissimo' },
    link: 'https://www.doctissimo.fr/html/bebe/alimentation/diversification_alimentaire.htm',
  },
];

const IT_ARTICLES: RecommendedArticleEntry[] = [
  {
    id: 'it-article-1',
    sort_order: 1,
    title: { it: 'Epicentrico — Guida allo svezzamento', en: 'Epicentrico — Weaning Guide', ko: 'Epicentrico — 이유식 가이드' },
    description: {
      it: 'Portale italiano di riferimento per genitori — guida completa allo svezzamento.',
      en: 'Leading Italian parenting portal — complete weaning guide.',
      ko: '이탈리아 대표 육아 포털의 이유식 가이드.',
    },
    source: { it: 'Epicentrico', en: 'Epicentrico', ko: 'Epicentrico' },
    link: 'https://www.epicentrico.it/svezzamento/',
  },
  {
    id: 'it-article-2',
    sort_order: 2,
    title: { it: 'Ministero della Salute — Svezzamento', en: 'Ministry of Health — Weaning', ko: '보건부 — 이유식' },
    description: {
      it: 'Linee guida ufficiali italiane sull\'introduzione degli alimenti solidi.',
      en: 'Official Italian guidelines on introducing solid foods.',
      ko: '이탈리아 보건부 공식 이유식 지침.',
    },
    source: { it: 'Ministero della Salute', en: 'Ministry of Health', ko: '보건부' },
    link: 'https://www.salute.gov.it/portale/bambino/p1_5.jsp?lingua=italiano&id=440&area=Bambino',
  },
  {
    id: 'it-article-3',
    sort_order: 3,
    title: { it: 'Bambino Gesù — Alimentazione complementare', en: 'Bambino Gesù — Complementary Feeding', ko: 'Bambino Gesù — 이유식' },
    description: {
      it: 'Consigli dei pediatri dell\'Ospedale Pediatrico Bambino Gesù di Roma.',
      en: 'Advice from pediatricians at Rome\'s Bambino Gesù Hospital.',
      ko: '로마 Bambino Gesù 소아과 전문의 조언.',
    },
    source: { it: 'Ospedale Bambino Gesù', en: 'Bambino Gesù Hospital', ko: 'Bambino Gesù 병원' },
    link: 'https://www.bambinogesu.it/assistenza/svezzamento',
  },
  {
    id: 'it-article-4',
    sort_order: 4,
    title: { it: 'Pampers IT — Autosvezzamento', en: 'Pampers IT — Baby-Led Weaning', ko: 'Pampers IT — 자율 이유식' },
    description: {
      it: 'Autosvezzamento: consigli pratici e ricette per tutta la famiglia.',
      en: 'Baby-led weaning: practical tips and family recipes.',
      ko: '자율 이유식 실전 팁과 가족 레시피.',
    },
    source: { it: 'Pampers Italia', en: 'Pampers Italy', ko: 'Pampers Italia' },
    link: 'https://www.pampers.it/neonato/alimentazione/svezzamento',
  },
];

export const RECOMMENDED_ARTICLES_BY_MARKET: Record<RecommendedContentMarket, RecommendedArticleEntry[]> = {
  KR: KR_ARTICLES,
  DE: DE_ARTICLES,
  FR: FR_ARTICLES,
  IT: IT_ARTICLES,
};

export function resolveRecommendedMarket(countryCode: string | undefined | null): RecommendedContentMarket {
  if (countryCode === 'DE' || countryCode === 'FR' || countryCode === 'IT') return countryCode;
  return 'KR';
}

export function getRecommendedBooks(countryCode: string | undefined | null): RecommendedBookEntry[] {
  return RECOMMENDED_BOOKS_BY_MARKET[resolveRecommendedMarket(countryCode)];
}

export function getRecommendedArticles(countryCode: string | undefined | null): RecommendedArticleEntry[] {
  return RECOMMENDED_ARTICLES_BY_MARKET[resolveRecommendedMarket(countryCode)];
}
