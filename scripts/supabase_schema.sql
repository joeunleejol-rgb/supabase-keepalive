-- =============================================================================
-- 2U 이유식 — Supabase 초기 스키마
-- 대상: 새 Supabase 프로젝트 (ojgxncvubiwxxnqmvibx)
-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run
--
-- 포함:
--   • 8개 테이블 (guide_questions, tools, food_types, ingredients,
--     tool_product_links, allergy_tests, baby_profiles, subscriptions)
--   • RLS 정책 (앱 동작에 맞춤)
--   • allergy-photos Storage 버킷
--
-- 참고: 식단(meal plan)은 클라이언트에서 생성되며 DB에 저장하지 않습니다.
--       도서/기사 추천도 로컬 파일(recommendedData.ts)을 사용합니다.
-- =============================================================================

BEGIN;

-- ---------------------------------------------------------------------------
-- 1. guide_questions — 이유식 가이드 설문 (9단계)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.guide_questions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question        text NOT NULL,
  question_en     text,
  question_de     text,
  question_fr     text,
  question_it     text,
  category        text NOT NULL CHECK (category IN ('baby_ready', 'mom_ready', 'general')),
  description     text,
  description_en  text,
  description_de  text,
  description_fr  text,
  description_it  text,
  sort_order      integer NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS guide_questions_sort_order_idx
  ON public.guide_questions (sort_order);

-- ---------------------------------------------------------------------------
-- 2. tools — 이유식 도구 카탈로그
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tools (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name                    text NOT NULL,
  name_en                 text,
  name_de                 text,
  name_fr                 text,
  name_it                 text,
  description             text,
  description_en          text,
  description_de          text,
  description_fr          text,
  description_it          text,
  detail_description      text,
  detail_description_en   text,
  detail_description_de   text,
  detail_description_fr   text,
  detail_description_it   text,
  category                text NOT NULL CHECK (category IN ('essential', 'recommended', 'optional')),
  icon_name               text,
  image_url               text,
  sort_order              integer NOT NULL DEFAULT 0,
  product_name            text,
  product_name_en         text,
  product_link            text,
  product_image_url       text
);

CREATE INDEX IF NOT EXISTS tools_sort_order_idx
  ON public.tools (sort_order);

CREATE INDEX IF NOT EXISTS tools_category_idx
  ON public.tools (category);

-- ---------------------------------------------------------------------------
-- 3. food_types — 이유식 타입 카탈로그
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.food_types (
  id              text PRIMARY KEY,
  name            text NOT NULL,
  name_en         text,
  name_de         text,
  name_fr         text,
  name_it         text,
  description     text,
  description_en  text,
  description_de  text,
  description_fr  text,
  description_it  text,
  icon_name       text,
  color_theme     text,
  sort_order      integer NOT NULL DEFAULT 0,
  steps           text,
  steps_en        text,
  steps_de        text,
  steps_fr        text,
  steps_it        text,
  tips            text,
  tips_en         text,
  tips_de         text,
  tips_fr         text,
  tips_it         text
);

CREATE INDEX IF NOT EXISTS food_types_sort_order_idx
  ON public.food_types (sort_order);

-- ---------------------------------------------------------------------------
-- 4. ingredients — 이유식 재료 카탈로그
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ingredients (
  id                      text PRIMARY KEY,
  name                    text NOT NULL,
  name_en                 text,
  name_de                 text,
  name_fr                 text,
  name_it                 text,
  category                text NOT NULL CHECK (category IN ('grain', 'vegetable', 'fruit', 'protein', 'etc')),
  description             text,
  description_en          text,
  recommended_month       integer NOT NULL DEFAULT 6,
  icon_name               text,
  color_theme             text,
  sort_order              integer NOT NULL DEFAULT 0,
  is_starter_recommended  boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS ingredients_sort_order_idx
  ON public.ingredients (sort_order);

CREATE INDEX IF NOT EXISTS ingredients_category_idx
  ON public.ingredients (category);

-- ---------------------------------------------------------------------------
-- 5. tool_product_links — 국가별 도구 상품 링크
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tool_product_links (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id       uuid NOT NULL REFERENCES public.tools (id) ON DELETE CASCADE,
  country_code  text NOT NULL,
  product_name  text,
  product_link  text,
  store_name    text NOT NULL DEFAULT 'Coupang',
  UNIQUE (tool_id, country_code)
);

CREATE INDEX IF NOT EXISTS tool_product_links_country_code_idx
  ON public.tool_product_links (country_code);

-- ---------------------------------------------------------------------------
-- 6. allergy_tests — 알레르기 테스트 기록
--     session_token: 로그인 시 auth.users.id, 비로그인 시 'babyfood-session'
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.allergy_tests (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token    text NOT NULL,
  ingredient_id    text,
  ingredient_name  text NOT NULL,
  test_date        date NOT NULL DEFAULT CURRENT_DATE,
  reaction         text NOT NULL CHECK (reaction IN ('none', 'mild', 'severe')),
  notes            text,
  photo_url        text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS allergy_tests_session_token_idx
  ON public.allergy_tests (session_token);

CREATE INDEX IF NOT EXISTS allergy_tests_test_date_idx
  ON public.allergy_tests (test_date DESC);

-- ---------------------------------------------------------------------------
-- 7. baby_profiles — 회원가입 시 아기 프로필
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.baby_profiles (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           uuid NOT NULL UNIQUE REFERENCES auth.users (id) ON DELETE CASCADE,
  baby_name         text,
  baby_age_months   integer,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS baby_profiles_user_id_idx
  ON public.baby_profiles (user_id);

-- ---------------------------------------------------------------------------
-- 8. subscriptions — 식단 플랜 구독
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  plan        text NOT NULL CHECK (plan IN ('monthly', 'yearly')),
  status      text NOT NULL CHECK (status IN ('active', 'canceled', 'expired')),
  started_at  timestamptz NOT NULL DEFAULT now(),
  expires_at  timestamptz,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS subscriptions_user_id_idx
  ON public.subscriptions (user_id);

CREATE INDEX IF NOT EXISTS subscriptions_user_status_idx
  ON public.subscriptions (user_id, status);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
ALTER TABLE public.guide_questions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.food_types           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ingredients          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tool_product_links   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.allergy_tests        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.baby_profiles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions        ENABLE ROW LEVEL SECURITY;

-- 공개 콘텐츠: 누구나 읽기
DROP POLICY IF EXISTS "guide_questions_public_read" ON public.guide_questions;
CREATE POLICY "guide_questions_public_read"
  ON public.guide_questions FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "tools_public_read" ON public.tools;
CREATE POLICY "tools_public_read"
  ON public.tools FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "food_types_public_read" ON public.food_types;
CREATE POLICY "food_types_public_read"
  ON public.food_types FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "ingredients_public_read" ON public.ingredients;
CREATE POLICY "ingredients_public_read"
  ON public.ingredients FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "tool_product_links_public_read" ON public.tool_product_links;
CREATE POLICY "tool_product_links_public_read"
  ON public.tool_product_links FOR SELECT
  TO anon, authenticated
  USING (true);

-- 알레르기 기록: 게스트/로그인 사용자 모두 앱과 동일하게 CRUD
DROP POLICY IF EXISTS "allergy_tests_select" ON public.allergy_tests;
CREATE POLICY "allergy_tests_select"
  ON public.allergy_tests FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "allergy_tests_insert" ON public.allergy_tests;
CREATE POLICY "allergy_tests_insert"
  ON public.allergy_tests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "allergy_tests_delete" ON public.allergy_tests;
CREATE POLICY "allergy_tests_delete"
  ON public.allergy_tests FOR DELETE
  TO anon, authenticated
  USING (true);

-- 아기 프로필: 본인만
DROP POLICY IF EXISTS "baby_profiles_select_own" ON public.baby_profiles;
CREATE POLICY "baby_profiles_select_own"
  ON public.baby_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "baby_profiles_insert_own" ON public.baby_profiles;
CREATE POLICY "baby_profiles_insert_own"
  ON public.baby_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "baby_profiles_update_own" ON public.baby_profiles;
CREATE POLICY "baby_profiles_update_own"
  ON public.baby_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 구독: 본인만
DROP POLICY IF EXISTS "subscriptions_select_own" ON public.subscriptions;
CREATE POLICY "subscriptions_select_own"
  ON public.subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "subscriptions_insert_own" ON public.subscriptions;
CREATE POLICY "subscriptions_insert_own"
  ON public.subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

COMMIT;

-- ---------------------------------------------------------------------------
-- Storage: allergy-photos 버킷 (알레르기 반응 사진)
-- ---------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'allergy-photos',
  'allergy-photos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "allergy_photos_public_read" ON storage.objects;
CREATE POLICY "allergy_photos_public_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'allergy-photos');

DROP POLICY IF EXISTS "allergy_photos_auth_upload" ON storage.objects;
CREATE POLICY "allergy_photos_auth_upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'allergy-photos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "allergy_photos_auth_update" ON storage.objects;
CREATE POLICY "allergy_photos_auth_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'allergy-photos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "allergy_photos_auth_delete" ON storage.objects;
CREATE POLICY "allergy_photos_auth_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'allergy-photos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );
