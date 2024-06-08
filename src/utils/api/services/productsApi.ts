/* eslint-disable import/no-cycle */
import { api } from './api';

interface Some {
  products: Product[];
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

    productById: builder.query<Product, string>({
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

    productToWishlist: builder.mutation<Product, { productId: string }>({
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

    productToCart: builder.mutation<Product, { productId: string; size: string }>({
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
    }),

    productToOrder: builder.mutation<Order, Address>({
      query: (body) => ({
        url: '/order',
        method: 'post',
        body
      })
    }),

    orders: builder.query<Order[], void>({
      query: () => ({
        url: `/orders`,
        method: 'Get'
      })
    }),

    orderById: builder.query<Order, string>({
      query: (id) => ({
        url: `/order/${id}`,
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
  useProductToWishlistMutation,
  useDeleteProductInCartMutation,

  useCartQuery,
  useLazyCartQuery,
  useProductToCartMutation,

  useProductToOrderMutation,
  useOrdersQuery,
  useOrderByIdQuery
} = productApi;

export const {
  products,
  productById,
  productToWishlist,
  deleteProductInWishlist,
  wishlist,
  productsByCategory,
  cart,
  productToCart,
  productToOrder,
  orders,
  orderById
} = productApi.endpoints;
