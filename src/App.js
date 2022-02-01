import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Details from './components/Details';
import HomePage from './components/HomePage';
import { fetchCountries } from './redux/reducers/countries';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCountries());
  //   return () => {
  //     // unmounting
  //   };
  // }, []);

  return (
    <div>
      <HomePage />
      {/* <Details /> */}
    </div>
  );
};

export default App;
