"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipesService_1 = __importDefault(require("../services/recipesService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(recipesService_1.default.getEntries());
});
router.get('/:ids', (req, res) => {
    const ids = req.params.ids.split(',');
    res.send(recipesService_1.default.getEntry(ids));
});
router.get('forIngredients/:ids', (req, res) => {
    console.log(req.params.ids);
    const array = req.params.ids.split(',');
    res.send(recipesService_1.default.getQueryEntry(array));
});
// router.post('/', (_req, res) => {
//   res.send('Saving a diary!');
// });
exports.default = router;
