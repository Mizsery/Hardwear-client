import { api } from './api';

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    orders: builder.query<Order[], void>({
      query: () => ({
        url: `/orders`,
        method: 'Get'
      })
    }),

    productToOrder: builder.mutation<Order, Address>({
      query: (body) => ({
        url: '/order',
        method: 'post',
        body
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

export const { useProductToOrderMutation, useOrdersQuery, useOrderByIdQuery } = orderApi;

export const { productToOrder, orders, orderById } = orderApi.endpoints;
