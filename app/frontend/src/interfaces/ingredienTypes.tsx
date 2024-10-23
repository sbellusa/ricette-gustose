export interface IngredientQueryResponse{
  count:number,
  total:number,
  items: IngredientQuery[]
}

export interface IngredientQuery {
  id: string
  name: string
  count: number
  img: string
}

export interface IngredientItem extends IngredientQuery {
  selected: boolean  
}
