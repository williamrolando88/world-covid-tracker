import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './reducers/countries';

const reducer = {
  countries: countriesReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
