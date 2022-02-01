import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Country from './Country';

const CountryList = () => {
  const dispatch = useDispatch();

  const { status, countries } = useSelector((store) => store.countries);

  switch (status) {
    case 'pending':
      return <div>Fetching data...</div>;
    case 'fulfilled':
      return (
        <div className="flex flex-col">
          {countries.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </div>
      );
    default:
      return <div>Communication error, cannot fetch data</div>;
  }
};

export default CountryList;
