import { api } from './api';

interface ProductWithCategories {
  products: ProductWithoutRelation[];
  categories: Omit<Category[], 'product'>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<ProductWithCategories, { type: string }>({
      query: (type) => ({
        url: `/products`,
        method: 'Get',
        params: type
      })
    }),

    productById: builder.query<ProductWithoutRelation, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'get'
      })
    }),

    productsByCategory: builder.query<ProductWithCategories, { id: string; type: string }>({
      query: ({ id, type }) => ({
        url: `/products/${id}?type=${type}`,
        method: 'get'
      })
    })
  })
});

export const {
  useProductsQuery,
  useProductByIdQuery,
  useProductsByCategoryQuery,
  useLazyProductsByCategoryQuery
} = productApi;

export const { products, productById, productsByCategory } = productApi.endpoints;
