export type GuideQuestion = {
  id: string;
  question: string;
  question_en: string | null;
  question_de: string | null;
  question_fr: string | null;
  question_it: string | null;
  category: 'baby_ready' | 'mom_ready' | 'general';
  description: string | null;
  description_en: string | null;
  description_de: string | null;
  description_fr: string | null;
  description_it: string | null;
  sort_order: number;
};

export type Tool = {
  id: string;
  name: string;
  name_en: string | null;
  name_de: string | null;
  name_fr: string | null;
  name_it: string | null;
  description: string | null;
  description_en: string | null;
  description_de: string | null;
  description_fr: string | null;
  description_it: string | null;
  category: 'essential' | 'recommended' | 'optional';
  icon_name: string | null;
  image_url: string | null;
  sort_order: number;
  product_name: string | null;
  product_name_en: string | null;
  product_link: string | null;
  product_image_url: string | null;
  detail_description: string | null;
  detail_description_en: string | null;
  detail_description_de: string | null;
  detail_description_fr: string | null;
  detail_description_it: string | null;
};

export type FoodType = {
  id: string;
  name: string;
  name_en: string | null;
  name_de: string | null;
  name_fr: string | null;
  name_it: string | null;
  description: string | null;
  description_en: string | null;
  description_de: string | null;
  description_fr: string | null;
  description_it: string | null;
  icon_name: string | null;
  color_theme: string | null;
  sort_order: number;
  steps: string | null;
  steps_en: string | null;
  steps_de: string | null;
  steps_fr: string | null;
  steps_it: string | null;
  tips: string | null;
  tips_en: string | null;
  tips_de: string | null;
  tips_fr: string | null;
  tips_it: string | null;
};

export type Ingredient = {
  id: string;
  name: string;
  name_en: string | null;
  name_de: string | null;
  name_fr: string | null;
  name_it: string | null;
  category: 'grain' | 'vegetable' | 'fruit' | 'protein' | 'etc';
  description: string | null;
  description_en: string | null;
  recommended_month: number;
  icon_name: string | null;
  color_theme: string | null;
  sort_order: number;
  is_starter_recommended: boolean;
};

export type GuideAnswer = {
  questionId: string;
  answer: boolean;
};

export type Book = {
  id: string;
  title_ko: string;
  title_en: string;
  author_ko: string | null;
  author_en: string | null;
  description_ko: string | null;
  description_en: string | null;
  link: string | null;
  cover_image_url: string | null;
  rank: number;
};

export type Article = {
  id: string;
  title_ko: string;
  title_en: string;
  description_ko: string | null;
  description_en: string | null;
  link: string | null;
  source_ko: string | null;
  source_en: string | null;
  sort_order: number;
  language: string;
};

export type AllergyTest = {
  id: string;
  session_token: string;
  ingredient_id: string | null;
  ingredient_name: string;
  test_date: string;
  reaction: 'none' | 'mild' | 'severe';
  notes: string | null;
  photo_url: string | null;
  created_at: string;
};

export type MealPlan = {
  id: string;
  session_token: string;
  plan_type: 'weekly' | 'monthly';
  plan_data: Record<string, unknown>;
  created_at: string;
};

export type Subscription = {
  id: string;
  user_id: string;
  plan: 'monthly' | 'yearly';
  status: 'active' | 'canceled' | 'expired';
  started_at: string;
  expires_at: string | null;
  created_at: string;
};

export type ToolProductLink = {
  id: string;
  tool_id: string;
  country_code: string;
  product_name: string | null;
  product_link: string | null;
  store_name: string;
};

export type BabyProfile = {
  id: string;
  user_id: string;
  baby_name: string | null;
  baby_age_months: number | null;
};

export type AppStep = 'intro' | 'guide' | 'tools' | 'foodType' | 'ingredients' | 'summary' | 'plan' | 'allergy' | 'books' | 'subscription';

export type StageType = 'early' | 'mid' | 'late' | 'toddler';
