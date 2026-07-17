import { useCallback, useRef, useState } from 'react';
import type { AppStep } from '../types';

const STEP_RANK: Record<AppStep, number> = {
  intro: 0,
  guide: 10,
  tools: 20,
  foodType: 30,
  ingredients: 40,
  summary: 50,
  subscription: 55,
  plan: 60,
  allergy: 60,
  books: 60,
};

export type NavDirection = 'forward' | 'back';

export function useAppNavigation(initialStep: AppStep = 'intro') {
  const [step, setStepState] = useState<AppStep>(initialStep);
  const [direction, setDirection] = useState<NavDirection>('forward');
  const rankRef = useRef(STEP_RANK[initialStep]);

  const navigate = useCallback((next: AppStep) => {
    const nextRank = STEP_RANK[next];
    const prevRank = rankRef.current;
    setDirection(nextRank >= prevRank ? 'forward' : 'back');
    rankRef.current = nextRank;
    setStepState(next);
  }, []);

  return { step, direction, navigate };
}
