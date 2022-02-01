import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {
    storeDate: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default covidDataSlice.reducer;

export const { storeDate } = covidDataSlice.actions;
