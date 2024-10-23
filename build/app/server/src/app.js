"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const ingredients_1 = __importDefault(require("./routes/ingredients"));
const ingredientsService_1 = __importDefault(require("./services/ingredientsService"));
const recipes_1 = __importDefault(require("./routes/recipes"));
const recipesService_1 = __importDefault(require("./services/recipesService"));
const recipesForIngredients_1 = __importDefault(require("./routes/recipesForIngredients"));
// import indexRouter from './routes/index';
const users_1 = __importDefault(require("./routes/users"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors");
// Initialise to load large json files in memory
recipesService_1.default.getEntries();
ingredientsService_1.default.getEntries();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors({}));
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static('@build'));
app.use(express_1.default.static('@frontend'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../../../build')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../../../build/app/frontend')));
// app.use('/', indexRouter);
app.use('/api', users_1.default);
app.use('/api/recipes', recipes_1.default);
app.use('/api/ingredients', ingredients_1.default);
app.use('/api/recipes/forIngredients', recipesForIngredients_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
