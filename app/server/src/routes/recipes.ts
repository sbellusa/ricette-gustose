import express from 'express';
import { Response } from 'express';
import recipesService from '../services/recipesService';
import { RecipesResponse } from "@models/responseModel";

const router = express.Router();

router.get('/', (_req, res: Response<RecipesResponse>) => {
  res.send(recipesService.getEntries());
});


router.get('/:ids', (req, res: Response<RecipesResponse>) => {
  const ids = req.params.ids.split(',');
  res.send(recipesService.getEntry(ids));
});


router.get('forIngredients/:ids', (req, res: Response<RecipesResponse>) => {
  console.log(req.params.ids);
  const array = req.params.ids.split(',');
  res.send(recipesService.getQueryEntry(array));
});


// router.post('/', (_req, res) => {
//   res.send('Saving a diary!');
// });

export default router;