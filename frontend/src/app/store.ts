import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { tripApi } from '../features/trips/tripApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [tripApi.reducerPath]: tripApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;