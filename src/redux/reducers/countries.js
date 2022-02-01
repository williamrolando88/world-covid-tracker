import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const baseURL = 'https://api.covid19tracking.narrativa.com/api';

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const response = await fetch(`${baseURL}/countries`, { method: 'GET' });
  return response.json();
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [fetchCountries.rejected]: () => ({ status: 'rejected' }),
    [fetchCountries.pending]: () => ({ status: 'pending' }),
    [fetchCountries.fulfilled]: (state, action) => {
      const sortedCountries = action.payload.countries.sort((a, b) => a.name.localeCompare(b.name));
      return { status: 'fulfilled', countries: sortedCountries };
    },
  },
});

export default countriesSlice.reducer;
