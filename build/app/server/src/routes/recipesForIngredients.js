"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipesService_1 = __importDefault(require("../services/recipesService"));
const router = express_1.default.Router();
router.get('/:ids', (req, res) => {
    console.log(req.params.ids);
    const array = req.params.ids.split(',');
    console.log(array);
    res.send(recipesService_1.default.getQueryEntry(array));
});
exports.default = router;
