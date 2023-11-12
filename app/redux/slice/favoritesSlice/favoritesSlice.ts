import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    countries: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.countries.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const countryToRemoveIndex = state.countries.findIndex(
        (country) => country.name.common === action.payload.name.common
      );

      if (countryToRemoveIndex !== -1) {
        state.countries.splice(countryToRemoveIndex, 1);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
