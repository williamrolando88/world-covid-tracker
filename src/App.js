import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CountryList from './components/CountryList';
import DateSelector from './components/DateSelector';
import { fetchCountries } from './redux/reducers/countries';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    return () => {
      // unmounting
    };
  }, []);
  return (
    <div>
      Covid Tracker
      <DateSelector />
      <CountryList />
    </div>
  );
};

export default App;
