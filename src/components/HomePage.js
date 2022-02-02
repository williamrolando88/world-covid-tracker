import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const HomePage = () => {
  const { status, countries } = useSelector((store) => store.covidData.today);

  let worldStats = {
    todayConfirmed: 0,
  };

  if (status === 'fulfilled') {
    Object.keys(countries).map((key) => {
      // todo: Here I can add mutating code to add world totals
      worldStats.todayConfirmed += countries[key].today_confirmed;
    });
  }

  return (
    <div>
      <div>
        <h1>Covid Tracker</h1>
        <div>
          <h2>Today World</h2>
          <h3>
            {`Total infections ${new Intl.NumberFormat().format(
              worldStats.todayConfirmed,
            )}`}
          </h3>
        </div>
      </div>
      <div>
        {status === 'rejected' && 'Internal error'}
        {status === 'pending' && 'Fetching data'}
        {status === 'fulfilled' &&
          Object.keys(countries).map((key) => (
            <Country
              key={countries[key].id}
              id={key}
              country={countries[key]}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
