"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ingredients_json_1 = __importDefault(require("../data/ingredients.json"));
const ingredients = ingredients_json_1.default;
const getEntries = () => {
    const response = {
        count: ingredients.length,
        total: ingredients.length,
        items: ingredients
    };
    return response;
};
const getIngredientsFromId = (id) => {
    return ingredients.filter(entry => entry.name.toLowerCase().includes(id.toLowerCase()));
};
const getEntry = (id) => {
    const all = getIngredientsFromId(id);
    const sliced = all.slice(0, 16);
    const response = {
        count: sliced.length,
        total: all.length,
        items: sliced
    };
    return response;
};
//return filtered.map(x => {
//return <IngredientQuery>{ ...x };
// return filtered.map(x => {
//   return {
//     ...x,
//     recipe_ids: []
//   };
// });
// });
const getQueryEntry = (id) => {
    const all = getIngredientsFromId(id);
    const sliced = all.slice(0, 16);
    const response = {
        count: sliced.length,
        total: all.length,
        items: sliced.map(({ id, name, count }) => ({
            id,
            name,
            count,
            img: `https://ricettegustosestorage.blob.core.windows.net/img-ingredients/${id}.jpg`
        }))
    };
    return response;
};
exports.default = {
    getEntries,
    getEntry,
    getQueryEntry
};
