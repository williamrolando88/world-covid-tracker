import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRange: false,
  dates: {},
  country: '',
  results: {},
};

const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {
    storeDate: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default covidDataSlice.reducer;

export const { storeDate } = covidDataSlice.actions;
