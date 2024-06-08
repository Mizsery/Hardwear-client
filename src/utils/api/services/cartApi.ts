import { api } from './api';

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
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

    deleteProductInCart: builder.mutation<
      void,
      { body: { productId: string; size: string }; typeDelete: string }
    >({
      query: ({ body, typeDelete }) => ({
        url: `/product-cart?typeDelete=${typeDelete}`,
        method: 'Delete',
        body
      })
    })
  })
});

export const {
  useDeleteProductInCartMutation,
  useCartQuery,
  useLazyCartQuery,
  useProductToCartMutation
} = cartApi;

export const { cart, productToCart, deleteProductInCart } = cartApi.endpoints;
