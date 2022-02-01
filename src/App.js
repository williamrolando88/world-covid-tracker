import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';
import getToday from './functions/getToday';
import { fetchToday } from './redux/reducers/covidData';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToday(getToday()));
  }, []);

  return (
    <div>
      <HomePage />
      {/* <Details /> */}
    </div>
  );
};

export default App;
