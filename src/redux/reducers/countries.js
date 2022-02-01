import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const baseURL = 'https://api.covid19tracking.narrativa.com/api';

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const response = await fetch(`${baseURL}/countries`, { method: 'GET' });
  const data = response.json();
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.rejected]: () => {
      return { status: 'rejected' };
    },
    [fetchCountries.pending]: () => {
      return { status: 'pending' };
    },
    [fetchCountries.fulfilled]: (state, action) => {
      const sortedCountries = action.payload.countries.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      console.log(sortedCountries);
      return { status: 'fulfilled', countries: sortedCountries };
    },
  },
});

export default countriesSlice.reducer;
