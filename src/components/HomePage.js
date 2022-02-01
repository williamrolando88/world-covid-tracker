import React, { Fragment } from 'react';
import CountryList from './CountryList';

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Covid Tracker</h1>
        <div>
          <h2>Today </h2>
          <h3>Total infections</h3>
        </div>
      </div>
      <Hello as="fragment">
        <div>Hello</div>
      </Hello>
    </div>
  );
};

export default HomePage;
