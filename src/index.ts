import express from 'express';
import path from 'path';

import recipeRouter from './routes/recipes';
import recipesService from './services/recipesService';
import recipesForIngredientsRouter from './routes/recipesForIngredients';

import ingredientRouter from './routes/ingredients';
import ingredientsService from './services/ingredientsService';

// Initialise to load large json files in memory
recipesService.getEntries();
ingredientsService.getEntries();

// eslint-disable-next-line @typescript-eslint/no-require-imports
import cors = require('cors');

const app = express();

app.use(express.json());
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/recipes', recipeRouter);
app.use('/api/ingredients', ingredientRouter);
app.use('/api/recipes/forIngredients', recipesForIngredientsRouter);

app.use('/img', express.static(path.join(__dirname, 'public/ingredient-images')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});