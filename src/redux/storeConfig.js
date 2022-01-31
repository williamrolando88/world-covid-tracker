import { createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covidReducer from './reducers/covid';

const reducer = {
  covid: covidReducer,
};

const store = createStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

console.log(store);
export default store;
