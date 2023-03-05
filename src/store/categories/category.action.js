import { createAction } from "../../ulils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = function (categoriesArray) {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
