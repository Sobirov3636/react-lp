export const selectCategoriesMap = (state) => {
  return state.categories.categories.reduce(function (sum, category) {
    const { title, items } = category;

    sum[title.toLowerCase()] = items;

    return sum;
  }, {});
};
