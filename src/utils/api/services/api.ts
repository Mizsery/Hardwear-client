/* eslint-disable import/no-cycle */
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { logout, tokenReceived } from '../slices/userSlice';
import { RootState } from '../store';

const BASE_URL = 'http://localhost:3000';

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  credentials: 'include',
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken || localStorage.getItem('token');

    if (token) {
      Headers.set('authorization', `Bearer ${token}`);
    }
    return Headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(tokenReceived(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({})
});
