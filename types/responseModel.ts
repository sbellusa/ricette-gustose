import { IngredientEntry, IngredientQuery } from './ingredientModel';
import { Recipe } from "./recipeModels";

export interface ResponseBase {
  count: number,
  total: number
};

export interface IngredientsResponse extends ResponseBase  {
  items: IngredientEntry[]
};

export interface IngredientsQueryResponse extends ResponseBase  {
  items: IngredientQuery[]
};

export interface RecipesResponse extends ResponseBase  {
  items: Recipe[]
};