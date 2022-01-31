import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default covidSlice.reducer;
console.log(covidSlice.reducer);

// export const { add } = covidSlice.actions;
