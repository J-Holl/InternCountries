import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';

const countrySlice = createSlice({
  name: 'countries',
  initialState: {} as any,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getCountries.matchFulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default countrySlice.reducer;