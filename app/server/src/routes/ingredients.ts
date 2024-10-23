import express from 'express';
import { Response } from 'express';
import ingredientsService from '../services/ingredientsService';
import { IngredientsQueryResponse, IngredientsResponse } from "@models/responseModel";

const router = express.Router();

router.get('/', (_req, res: Response<IngredientsResponse>) => {
  res.send(ingredientsService.getEntries());
});


router.get('/:id', (req, res: Response<IngredientsQueryResponse>) => {
  const id = req.params.id;
  res.send(ingredientsService.getQueryEntry(id));
});

export default router;