import React from 'react';
import CountryList from './components/CountryList';
import DateSelector from './components/DateSelector';

const App = () => {
  return (
    <div>
      Covid Tracker
      <DateSelector />
      <CountryList />
    </div>
  );
};

export default App;
