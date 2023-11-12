import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import countryReducer from './slice/countrySlice/countrySlice';
import favoritesReducer from './slice/favoritesSlice/favoritesSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();

export const store = configureStore({
  reducer: {
    api: api.reducer,
    countries: countryReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;