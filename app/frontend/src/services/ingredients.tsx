import axios from 'axios'
import { IngredientsQueryResponse } from '../types/interfaces';
const baseUrl = '/api/ingredients' //http://localhost:3000/api/ingredients/


const getQuery = async (query: string): Promise<IngredientsQueryResponse> => {
  console.log('Initialising GET ingredients query request...')

  const queryUrl = `${baseUrl}/${query}`;
  const response = await axios.get(queryUrl)

  const parsed : IngredientsQueryResponse = response.data

  console.log('Success GET', parsed)
  console.log('Total entries: ', parsed.items.length)
  return parsed
}


export default { getQuery }