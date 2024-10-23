import express from 'express';
import { Response } from 'express';
import recipesService from '../services/recipesService';
import { RecipesResponse } from '@models/responseModel';

const router = express.Router();

router.get('/:ids', (req, res: Response<RecipesResponse>) => {
  console.log(req.params.ids);
  const array = req.params.ids.split(',');
  console.log(array);
  res.send(recipesService.getQueryEntry(array));
});

export default router;