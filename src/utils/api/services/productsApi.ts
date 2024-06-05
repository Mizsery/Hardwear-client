/* eslint-disable import/no-cycle */
import { api } from './api';

interface Some {
  products: Products[];
  categories: Omit<Category[], 'products'>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<Some, { type: string }>({
      query: (type) => ({
        url: `/products`,
        method: 'Get',
        params: type
      })
    }),

    productById: builder.query<Products, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'get'
      })
    }),

    productsByCategory: builder.query<Some, { id: string; type: string }>({
      query: ({ id, type }) => ({
        url: `/products/${id}?type=${type}`,
        method: 'get'
      })
    }),

    productToWishlist: builder.mutation<Products, { productId: string }>({
      query: (body) => ({
        url: `/product-wishlist`,
        method: 'post',
        body
      })
    }),

    deleteProductInWishlist: builder.mutation<void, string>({
      query: (productId) => ({
        url: `/product-wishlist/${productId}`,
        method: 'Delete'
      })
    }),

    wishlist: builder.query<ProductInWishlist[], void>({
      query: () => ({
        url: '/product-wishlist',
        method: 'Get'
      })
    })
  })
});

export const {
  useProductsQuery,
  useLazyProductsQuery,

  useProductByIdQuery,
  useLazyProductByIdQuery,
  useProductsByCategoryQuery,
  useLazyProductsByCategoryQuery,

  useLazyWishlistQuery,
  useWishlistQuery,

  useDeleteProductInWishlistMutation,
  useProductToWishlistMutation
} = productApi;

export const {
  products,
  productById,
  productToWishlist,
  deleteProductInWishlist,
  wishlist,
  productsByCategory
} = productApi.endpoints;
