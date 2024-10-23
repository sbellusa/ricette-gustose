"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ingredientsService_1 = __importDefault(require("../services/ingredientsService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(ingredientsService_1.default.getEntries());
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(ingredientsService_1.default.getQueryEntry(id));
});
exports.default = router;
