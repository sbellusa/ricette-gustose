import { Col, Row } from 'react-bootstrap'
import { IngredientItem, RecipesResponse } from '../../types/interfaces'
import RecipesListItem from './RecipesListItem'

interface RecipesListProps {
  recipes: RecipesResponse,
  ingredients: IngredientItem[]
}

const RecipesList = (props: RecipesListProps) => {

  return (
    <>
      <small>Displaying {props.recipes.count} of {props.recipes.total} recipes</small>

      <Row xs={1} md={1} lg={2} xl={3} xxl={4} className="g-4">

        {props.recipes.items.map(r =>
          <Col>
            <RecipesListItem key={r.id} recipe={r} ingredients={props.ingredients} />
          </Col>
        )}

      </Row>
    </>
  )
}

export default RecipesList