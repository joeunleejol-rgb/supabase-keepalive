import { EU_COUNTRY_CODES } from '../data/constants';
import { EU_FOOD_TYPES, KR_FOOD_TYPES } from '../data/foodTypesData';
import type { FoodType } from '../types';

export type FoodTypeRegion = 'KR' | 'EU';

export function resolveFoodTypeRegion(countryCode: string | null | undefined): FoodTypeRegion {
  return countryCode === 'KR' ? 'KR' : 'EU';
}

export function isEuropeCountry(countryCode: string | null | undefined): boolean {
  return EU_COUNTRY_CODES.includes(countryCode as (typeof EU_COUNTRY_CODES)[number]);
}

export function getRegionalFoodTypes(countryCode: string | null | undefined): FoodType[] {
  return resolveFoodTypeRegion(countryCode) === 'KR' ? KR_FOOD_TYPES : EU_FOOD_TYPES;
}

export function isValidFoodTypeForCountry(
  foodTypeId: string | null | undefined,
  countryCode: string | null | undefined,
): boolean {
  if (!foodTypeId) return false;
  return getRegionalFoodTypes(countryCode).some((ft) => ft.id === foodTypeId);
}
