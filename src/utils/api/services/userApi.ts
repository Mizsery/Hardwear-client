import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; user: { email: User['email']; name: User['name'] } },
      { email: User['email']; password: User['password'] }
    >({
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

    refresh: builder.query<
      { accessToken: string; user: { email: User['email']; name: User['name'] } },
      void
    >({
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
  useLazyRefreshQuery,
  useRefreshQuery,
  useLogoutMutation
} = userApi;

export const { login, signup, refresh, logout } = userApi.endpoints;
