import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountryDay, storeCountryDay } from '../redux/reducers/covidData';
import getToday from '../functions/getToday';

const Country = (props) => {
  const { country, id } = props;
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(storeCountryDay({ country: id, date: getToday() }));
    dispatch(fetchCountryDay({ countryId: country.id, date: getToday() }));
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-2 px-2 py-1">
        <h2 className="">{country.name}</h2>
        <h3>{new Intl.NumberFormat().format(country.today_confirmed)}</h3>
        <Link
          onClick={() => handleDispatch()}
          to={`/today/${country.id}`}
          className="h-5 w-5">
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
  // onShowData: PropTypes.func.isRequired,
};

export default Country;
