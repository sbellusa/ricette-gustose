"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import path from 'path';
const router = express_1.default.Router();
/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index');
// });
// router.get('/', (req,res) => {
//   res.render(path.join(__dirname, '../../../../build/frontend'));
// });  
exports.default = router;
