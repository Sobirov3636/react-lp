import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
  return categoriesSlice.categories;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  return categories.reduce(function (sum, category) {
    const { title, items } = category;

    sum[title.toLowerCase()] = items;

    return sum;
  }, {});
});

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
