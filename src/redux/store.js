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

import { todoReducer } from './todoSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    todo: persistedReducer,
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
