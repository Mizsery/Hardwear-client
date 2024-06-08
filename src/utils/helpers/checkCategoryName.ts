export const checkCategoryName = (categories: Omit<Category[], 'product'>, categoryId: string) => {
  let value = '';
  // eslint-disable-next-line no-return-assign
  categories.map((category) => (category.id === categoryId ? (value = category.category) : ''));
  return value;
};
