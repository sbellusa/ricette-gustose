import { IngredientQuery } from "../../../../types/ingredientModel";
import { ResponseBase, RecipesResponse, IngredientsQueryResponse } from "../../../../types/responseModel";
import { Recipe } from "../../../../types/recipeModels";

interface IngredientItem extends IngredientQuery {
  selected: boolean
}

export type { IngredientQuery, IngredientsQueryResponse, IngredientItem, ResponseBase, RecipesResponse, Recipe };