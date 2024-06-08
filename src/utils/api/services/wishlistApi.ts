import { api } from './api';

export const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    wishlist: builder.query<ProductInWishlist[], void>({
      query: () => ({
        url: '/products-wishlist',
        method: 'Get'
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
    })
  })
});

export const {
  useLazyWishlistQuery,
  useWishlistQuery,
  useDeleteProductInWishlistMutation,
  useProductToWishlistMutation
} = wishlistApi;

export const { productToWishlist, deleteProductInWishlist, wishlist } = wishlistApi.endpoints;
