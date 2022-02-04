import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covidDataReducer from './reducers/covidData';

const reducer = {
  covidData: covidDataReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
