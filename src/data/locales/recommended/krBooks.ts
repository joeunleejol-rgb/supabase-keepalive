import type { RecommendedBookEntry } from '../../recommendedData';

/** Original KR bestseller catalog — restored from Supabase `books` table (pre-local override) */
export const KR_RECOMMENDED_BOOKS: RecommendedBookEntry[] = [
  {
    id: 'd27a097c-e61f-4268-81cc-d127c61ad062',
    rank: 1,
    title: { ko: '삐뽀삐뽀 119 이유식', en: 'Beep Beep 119 Baby Food' },
    author: { ko: '하정훈', en: 'Ha Jeong-hun' },
    description: {
      ko: '소아과 의사 하정훈이 직접 쓴 이유식 바이블. 월령별 이유식 레시피와 아기 성장·영양에 대한 의학적 조언을 담았어요.',
      en: 'A baby food bible written by pediatrician Ha Jeong-hun. Includes monthly recipes and medical advice on baby growth and nutrition.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000001967752',
    kyoboSaleCmdtId: 'S000001967752',
    coverColor: '#FEF3C7',
  },
  {
    id: 'cbc0d57a-f8cb-43b6-9847-e2b7e5d6c4b6',
    rank: 2,
    title: { ko: '튼이 이유식', en: 'Tuni Baby Food' },
    author: { ko: '정주희', en: 'Jung Ju-hee' },
    description: {
      ko: '인기 이유식 유튜버 튼이 작가의 책. 실용적인 레시피와 초보 엄마를 위한 꼼꼼한 노하우가 담겨 있어요.',
      en: 'By popular baby food YouTuber Tuni. Filled with practical recipes and thorough tips for first-time parents.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000001977607',
    kyoboSaleCmdtId: 'S000001977607',
    coverColor: '#DBEAFE',
  },
  {
    id: '12bb5c50-6a07-4b61-b43d-53872cf12134',
    rank: 3,
    title: { ko: '뿐이 토핑 이유식', en: 'Topping Baby Food by Ppuni' },
    author: { ko: '정주희', en: 'Jung Ju-hee' },
    description: {
      ko: '토핑 이유식 전문가 뿐이 작가의 책. 기본 죽 위에 토핑을 얹는 간편하고 영양 균형 잡힌 이유식 레시피를 소개해요.',
      en: 'By topping baby food expert Ppuni. Introduces easy, nutritionally balanced recipes using toppings on basic porridge.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000212576919',
    kyoboSaleCmdtId: 'S000212576919',
    coverColor: '#D1FAE5',
  },
  {
    id: 'f04012c2-854a-482f-818b-727aa117bded',
    rank: 4,
    title: { ko: '한그릇 뚝딱 이유식', en: 'One-Bowl Baby Food' },
    author: { ko: '오상민, 박현영', en: 'Oh Sang-min, Park Hyeon-yeong' },
    description: {
      ko: '한 그릇에 담긴 간편 이유식 레시피. 바쁜 부모도 쉽게 따라 할 수 있는 영양 가득한 이유식을 소개해요.',
      en: 'Simple one-bowl baby food recipes. Nutritious meals that even busy parents can easily prepare.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000001611137',
    kyoboSaleCmdtId: 'S000001611137',
    coverColor: '#FCE7F3',
  },
  {
    id: '57182809-0704-4a2f-b292-3e71cd015f0d',
    rank: 5,
    title: { ko: '아이주도 고형식 완전 가이드', en: 'Complete Guide to Baby-Led Weaning' },
    author: { ko: '조승연', en: 'Jo Seung-yeon' },
    description: {
      ko: 'BLW(아이주도이유식) 방식의 완전 가이드. 고형식 도입 방법, 안전하게 먹이는 팁, 단계별 레시피를 상세히 안내해요.',
      en: 'A complete guide to baby-led weaning (BLW). Covers how to introduce solids, safe feeding tips, and step-by-step recipes.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000219145734',
    kyoboSaleCmdtId: 'S000219145734',
    coverColor: '#E0E7FF',
  },
  {
    id: '8074cb73-10e5-4e07-8387-9daadae94897',
    rank: 6,
    title: { ko: '아이주도 이유식 유아식 매뉴얼', en: 'Baby-Led Weaning & Toddler Food Manual' },
    author: { ko: 'BLW 연구소', en: 'BLW Institute' },
    description: {
      ko: '이유식부터 유아식까지 아이주도 방식으로 이어가는 매뉴얼. 아기 스스로 먹는 능력을 키우는 방법을 담았어요.',
      en: 'A manual for baby-led weaning from solids through toddler food. Covers how to develop a baby\'s self-feeding skills.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000001965106',
    kyoboSaleCmdtId: 'S000001965106',
    coverColor: '#FFEDD5',
  },
  {
    id: '59693161-7682-4b38-b22f-0a5433798da4',
    rank: 7,
    title: { ko: '아이가 잘먹는 이유식은 따로 있다', en: 'The Baby Food That Makes Kids Eat Well' },
    author: { ko: '김정미(마더스고양이)', en: 'Kim Jeong-mi (Mother\'s Cat)' },
    description: {
      ko: '아이가 편식 없이 잘 먹게 만드는 이유식의 비결을 담은 책. 재료 선택부터 조리법까지 실전 노하우를 알려줘요.',
      en: 'Secrets to making babies eat well without fussiness. Covers everything from ingredient selection to cooking techniques.',
    },
    productUrl: 'https://product.kyobobook.co.kr/detail/S000001868646',
    kyoboSaleCmdtId: 'S000001868646',
    coverColor: '#F3F4F6',
  },
];
