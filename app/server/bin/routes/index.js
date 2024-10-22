"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// var path = require('path');
const router = express_1.default.Router();
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
// router.get('/', (req,res) => {
//   res.render(path.join(__dirname, '../../../build/index.html'));
// });  
exports.default = router;
