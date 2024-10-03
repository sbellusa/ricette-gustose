export interface IngredientEntry extends IngredientQuery {
  recipe_ids: string[]
};

export interface IngredientQuery {  
  id: string
  name: string
  count: number
}
