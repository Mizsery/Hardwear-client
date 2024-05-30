import { createListenerMiddleware } from '@reduxjs/toolkit';

import { userApi } from '../api/services/userApi';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: userApi.endpoints.login.matchFulfilled,
  effect: (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.accessToken) {
      localStorage.setItem('token', action.payload.accessToken);
    }
  }
});
