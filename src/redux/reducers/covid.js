import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    add(state) {
      state;
    },
  },
  extraReducers: {},
});

export default covidSlice.reducer;

export const { add } = covidSlice.actions;
