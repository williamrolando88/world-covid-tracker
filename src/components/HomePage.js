import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import CountryList from './CountryList';

const HomePage = () => {
  const { status, countries } = useSelector((store) => store.covidData.today);
  // console.log('status', status);
  // console.log('todayData', countries);

  let worldTotal = 0;

  const countriesToday =
    status === 'fulfilled'
      ? [
          Object.keys(countries).map((key) => {
            const country = countries[key];
            // todo: Here I can add mutating code to add world totals
            worldTotal += country.today_confirmed;
            return {
              id: country.id,
              name: country.name,
              today: country.today_confirmed,
            };
          }),
        ]
      : [];

  return (
    <div>
      <div>
        <h1>Covid Tracker</h1>
        <div>
          <h2>Today World</h2>
          <h3>
            {`Total infections ${new Intl.NumberFormat().format(worldTotal)}`}
          </h3>
        </div>
      </div>
      <div>
        {status === 'rejected' && 'Internal error'}
        {status === 'pending' && 'Fetching data'}
        {status === 'fulfilled' &&
          Object.keys(countries).map((key) => (
            <Country key={countries[key].id} country={countries[key]} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
