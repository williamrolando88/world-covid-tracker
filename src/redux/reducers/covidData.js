import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  today: { status: '', countries: {} },
};

const baseURL = 'https://api.covid19tracking.narrativa.com';

export const fetchToday = createAsyncThunk('fetchToday', async (today) => {
  const response = await fetch(`${baseURL}/api/${today}`, { method: 'GET' });
  return response.json();
});

const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {
    storeDate: (state, action) => ({ ...state, ...action.payload }),
  },
  extraReducers: {
    [fetchToday.rejected]: (state) => {
      state.today.status = 'rejected';
    },
    [fetchToday.pending]: (state) => {
      state.today.status = 'pending';
    },
    [fetchToday.fulfilled]: (state, action) => {
      // console.log(action.payload);
      // console.log(action.payload.dates);
      // console.log(action.payload.dates[action.meta.arg]);
      // console.log(action.payload.dates[action.meta.arg].countries);
      // // const sortedCountries = action.payload.countries.sort((a, b) =>
      // //   a.name.localeCompare(b.name),
      // // );
      return {
        today: {
          status: 'fulfilled',
          countries: action.payload.dates[action.meta.arg].countries,
        },
      };
    },
  },
});

export default covidDataSlice.reducer;

export const { storeDate } = covidDataSlice.actions;
