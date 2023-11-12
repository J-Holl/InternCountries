import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CountryData } from '../../utils/type';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountries: builder.query<CountryData[], void>({
      query: () => 'all',
    }),
  }),
});

export const { useGetCountriesQuery } = api;