import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TodayDetails from './components/TodayDetails';
import getToday from './functions/getToday';
import { fetchToday } from './redux/reducers/covidData';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToday(getToday()));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/today/:country" element={<TodayDetails />} />
      </Routes>
    </>
  );
};

export default App;
