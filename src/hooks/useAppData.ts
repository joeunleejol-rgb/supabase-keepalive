import { useEffect, useState } from 'react';
import { applyToolTextContent } from '../data/toolsData';
import { resolveIngredients } from '../data/ingredientsData';
import { resolveGuideQuestions } from '../data/questions';
import { resolveFoodTypes } from '../data/foodTypesData';
import { resolveTools } from '../data/toolsCatalogData';
import { supabase } from '../lib/supabase';
import type { GuideQuestion, Tool, FoodType, Ingredient } from '../types';

export function useAppData() {
  const [questions, setQuestions] = useState<GuideQuestion[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [foodTypes, setFoodTypes] = useState<FoodType[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [qRes, tRes, fRes, iRes] = await Promise.all([
          supabase.from('guide_questions').select('*').order('sort_order'),
          supabase.from('tools').select('*').order('sort_order'),
          supabase.from('food_types').select('*').order('sort_order'),
          supabase.from('ingredients').select('*').order('sort_order'),
        ]);

        setQuestions(resolveGuideQuestions(qRes.error ? null : (qRes.data as GuideQuestion[])));
        setTools(resolveTools(tRes.error ? null : (tRes.data as Tool[])).map(applyToolTextContent));
        setFoodTypes(resolveFoodTypes(fRes.error ? null : (fRes.data as FoodType[])));
        setIngredients(resolveIngredients(iRes.error ? null : (iRes.data as Ingredient[])));
      } catch (err) {
        setError(err instanceof Error ? err.message : '데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { questions, tools, foodTypes, ingredients, loading, error };
}
