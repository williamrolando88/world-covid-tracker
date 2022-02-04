import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// *Constants
const baseURL = 'https://api.covid19tracking.narrativa.com';
const initialState = {
  today: { status: '', countries: {} },
  countrySingleDay: { status: '', data: {} },
  date: '',
  country: '',
};

// *Async actions
// Fetch today data
export const fetchToday = createAsyncThunk('fetchToday', async (today) => {
  const URL = `${baseURL}/api/${today}`;
  const response = await fetch(URL, { method: 'GET' });
  return response.json();
});

// Fetch today's country data
export const fetchCountryDay = createAsyncThunk(
  'fetchDay/country',
  async ({ countryId, date }) => {
    const URL = `${baseURL}/api/${date}/country/${countryId}`;
    const response = await fetch(URL, { method: 'GET' });
    return response.json();
  },
);

// *Redux Slice
const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {
    storeCountryDay(state, action) {
      state.country = action.payload.country;
      state.date = action.payload.date;
    },
  },
  extraReducers: {
    // Fetch today's world's data
    [fetchToday.rejected]: (state) => {
      state.today.status = 'rejected';
    },
    [fetchToday.pending]: (state) => {
      state.today.status = 'pending';
    },
    [fetchToday.fulfilled]: (state, action) => {
      state.today.status = 'fulfilled';
      state.today.countries = action.payload.dates[action.meta.arg].countries;
    },
    // Fetch data by country by day
    [fetchCountryDay.rejected]: (state) => {
      state.countrySingleDay.status = 'rejected';
    },
    [fetchCountryDay.pending]: (state) => {
      state.countrySingleDay.status = 'pending';
    },
    [fetchCountryDay.fulfilled]: (state, action) => {
      state.countrySingleDay.status = 'fulfilled';
      state.countrySingleDay.data =
        action.payload.dates[state.date].countries[state.country];
    },
  },
});

export default covidDataSlice.reducer;

export const { storeCountryDay } = covidDataSlice.actions;
