import express from 'express';
import { ErrorRequestHandler } from 'express';

import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import ingredientRouter from './routes/ingredients';
import ingredientsService from './services/ingredientsService';

import recipeRouter from './routes/recipes';
import recipesService from './services/recipesService';
import recipesForIngredientsRouter from './routes/recipesForIngredients';

// import indexRouter from './routes/index';
import usersRouter from './routes/users';

// eslint-disable-next-line @typescript-eslint/no-require-imports
import cors = require('cors');

// Initialise to load large json files in memory
recipesService.getEntries();
ingredientsService.getEntries();

const app = express();

app.use(express.json());
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('@build'));
app.use(express.static('@frontend'));
app.use(express.static(path.join(__dirname, '../../../../build')));
app.use(express.static(path.join(__dirname, '../../../../build/app/frontend')));

// app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/ingredients', ingredientRouter);
app.use('/api/recipes/forIngredients', recipesForIngredientsRouter);
 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
} as ErrorRequestHandler);

export default app;