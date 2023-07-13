import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todo/todoSlice';
import { filterReducer } from './filterSlice';
import { authSlice } from './auth/authSlice';

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
