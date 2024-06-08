/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from '@reduxjs/toolkit/react';

import { userApi } from '../services/userApi';
import { RootState } from '../store';

interface InitialState {
  user: Pick<User, 'email' | 'name' | 'id'> | null;
  isAuthenticated: boolean;
  accessToken?: string;
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    tokenReceived: (state, action) => {
      localStorage.setItem('token', action.payload.accessToken as string);
      state.isAuthenticated = true;
      state.user = action.payload.user as User;
    }
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuthenticated = true;
        state.user = action.payload.user as Pick<User, 'email' | 'id' | 'name'>;
      })
      .addMatcher(userApi.endpoints.refresh.matchFulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuthenticated = true;
        state.user = action.payload.user as Pick<User, 'email' | 'id' | 'name'>;
      })
      .addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
});

export const { logout, tokenReceived } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
