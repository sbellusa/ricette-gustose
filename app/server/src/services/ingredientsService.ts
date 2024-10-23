import ingredientsData from '../data/ingredients.json';
import { IngredientEntry } from "@models/ingredientModel";
import { IngredientsQueryResponse, IngredientsResponse } from "@models/responseModel";

const ingredients: IngredientEntry[] = ingredientsData as unknown as IngredientEntry[];

const getEntries = (): IngredientsResponse => {

  const response: IngredientsResponse = {
    count: ingredients.length,
    total: ingredients.length,
    items: ingredients
  };

  return response;
};

const getIngredientsFromId = (id: string): IngredientEntry[] => {
  return ingredients.filter(entry => entry.name.toLowerCase().includes(id.toLowerCase()));
};


const getEntry = (id: string): IngredientsResponse => {

  const all = getIngredientsFromId(id);
  const sliced = all.slice(0, 16);

  const response: IngredientsResponse = {
    count: sliced.length,
    total: all.length,
    items: sliced
  };

  return response;
};

//return filtered.map(x => {
//return <IngredientQuery>{ ...x };
// return filtered.map(x => {
//   return {
//     ...x,
//     recipe_ids: []
//   };
// });
// });

const getQueryEntry = (id: string): IngredientsQueryResponse => {
  const all = getIngredientsFromId(id);
  const sliced = all.slice(0, 16);

  const response: IngredientsQueryResponse = {
    count: sliced.length,
    total: all.length,
    items: sliced.map(({ id, name, count }) =>
    (
      {
        id,
        name,
        count,
        img: `https://ricettegustosestorage.blob.core.windows.net/img-ingredients/${id}.jpg`
      }))
  };

  return response;
};

export default {
  getEntries,
  getEntry,
  getQueryEntry
};