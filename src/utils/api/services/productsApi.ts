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
        url: '/products-wishlist',
        method: 'Get'
      })
    }),

    cart: builder.query<ProductInCart[], void>({
      query: () => ({
        url: '/products-cart',
        method: 'Get'
      })
    }),

    productToCart: builder.mutation<Products, { productId: string; size: string }>({
      query: (body) => ({
        url: `/product-cart`,
        method: 'post',
        body
      })
    }),

    deleteProductInCart: builder.mutation<void, { body: {}; typeDelete: string }>({
      query: ({ body, typeDelete }) => ({
        url: `/product-cart?typeDelete=${typeDelete}`,
        method: 'Delete',
        body
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
  useProductToWishlistMutation,
  useDeleteProductInCartMutation,

  useCartQuery,
  useLazyCartQuery,
  useProductToCartMutation
} = productApi;

export const {
  products,
  productById,
  productToWishlist,
  deleteProductInWishlist,
  wishlist,
  productsByCategory,
  cart,
  productToCart
} = productApi.endpoints;
