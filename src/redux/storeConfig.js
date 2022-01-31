import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covidReducer from './reducers/covid';

const reducer = {
  covid: covidReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
