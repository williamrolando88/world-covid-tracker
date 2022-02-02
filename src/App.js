import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TodayDetails from './components/TodayDetails';

const App = () => {
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
