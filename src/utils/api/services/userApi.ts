/* eslint-disable import/no-cycle */
import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (userData) => ({
        url: '/login',
        method: 'Post',
        body: userData
      })
    }),

    signup: builder.mutation<
      { email: string; password: string; phone: string; name: string },
      { email: string; password: string; phone: string; name: string }
    >({
      query: (userData) => ({
        url: '/signup',
        method: 'Post',
        body: userData
      })
    }),

    users: builder.query<User[], void>({
      query: () => ({
        url: '/users',
        method: 'Get'
      })
    }),

    refresh: builder.query<{ token: string }, void>({
      query: () => ({
        url: '/refresh',
        method: 'Get',
        credentials: 'include'
      })
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'Post'
      })
    })
  })
});

export const {
  useLoginMutation,
  useSignupMutation,
  useUsersQuery,
  useLazyUsersQuery,
  useLazyRefreshQuery,
  useRefreshQuery,
  useLogoutMutation
} = userApi;

export const { login, signup, users, refresh, logout } = userApi.endpoints;
