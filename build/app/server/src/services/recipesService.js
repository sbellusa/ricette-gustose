"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const all_recipes_full_json_1 = __importDefault(require("../data/all_recipes_full.json"));
const ingredients_json_1 = __importDefault(require("../data/ingredients.json"));
// import { IngredientEntry, IngredientQuery } from '../../types/ingredientModels';
// import { RecipeEntry, RecipeQuery } from '../../types/recipeModels';
const recipes = all_recipes_full_json_1.default;
const getEntries = () => {
    const response = {
        count: recipes.length,
        total: recipes.length,
        items: recipes
    };
    return response;
};
const getEntry = (ids) => {
    const all = recipes.filter((o1) => ids.some((o2) => o1.id === o2));
    const sliced = all.slice(0, 16);
    const response = {
        count: sliced.length,
        total: all.length,
        items: sliced
    };
    return response;
};
const getQueryEntry = (ingredients) => {
    console.log(ingredients);
    const filtered = ingredients_json_1.default.filter((o1) => ingredients.some((o2) => o1.name === o2));
    console.log(`Found ${filtered.length}/${recipes.length} recipes`);
    let commonRecipes = filtered[0].recipe_ids;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const intersect = (a, b) => a.filter(Set.prototype.has, new Set(b));
    filtered.forEach(i => commonRecipes = intersect(i.recipe_ids, commonRecipes));
    return getEntry(commonRecipes);
};
exports.default = {
    getEntries,
    getEntry,
    getQueryEntry
};
