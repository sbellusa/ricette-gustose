import recipesData from '../data/all_recipes_full.json';
import ingredientsData from '../data/ingredients.json';
import { Recipe } from "@models/recipeModels";
import { RecipesResponse } from "@models/responseModel"
// import { IngredientEntry, IngredientQuery } from '../../types/ingredientModels';
// import { RecipeEntry, RecipeQuery } from '../../types/recipeModels';


const recipes: Recipe[] = recipesData as unknown as Recipe[];

const getEntries = (): RecipesResponse => {
  const response: RecipesResponse = {
    count: recipes.length,
    total: recipes.length,
    items: recipes
  };

  return response;
};

const getEntry = (ids: string[]): RecipesResponse => {
    
  const all = recipes.filter((o1) => ids.some((o2) => o1.id === o2));
  const sliced = all.slice(0, 16);

  const response: RecipesResponse = {
    count: sliced.length,
    total: all.length,
    items: sliced
  };

  return response;
};

const getQueryEntry = (ingredients: string[]): RecipesResponse => {

  console.log(ingredients);

  const filtered = ingredientsData.filter((o1) => ingredients.some((o2) => o1.name === o2));

  console.log(`Found ${filtered.length}/${recipes.length} recipes`);

  let commonRecipes: string[] = filtered[0].recipe_ids;

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const intersect = (a: string[], b: string[]) => a.filter(Set.prototype.has, new Set(b));
  filtered.forEach(i => commonRecipes = intersect(i.recipe_ids, commonRecipes));

  return getEntry(commonRecipes);
};

export default {
  getEntries,
  getEntry,
  getQueryEntry
};