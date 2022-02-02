import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountryDay, storeCountryDay } from '../redux/reducers/covidData';
import getToday from '../functions/getToday';

const Country = (props) => {
  const { country, id, index } = props;
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(storeCountryDay({ country: id, date: getToday() }));
    dispatch(fetchCountryDay({ countryId: country.id, date: getToday() }));
  };

  return (
    <div
      className={`${(index + 1) % 4 >= 2 ? 'bg-[#302b63]' : 'bg-[#24243e]'} `}>
      <div className="flex h-32 flex-col items-center justify-between p-2 text-slate-200">
        <Link
          onClick={() => handleDispatch()}
          to={`/today/${country.id}`}
          className="self-end rounded-full border border-gray-600">
          <ChevronRightIcon className="h-5 w-5" />
        </Link>
        <h2 className="font-gill-sans text-center text-lg">{country.name}</h2>
        <h3 className="self-end text-xs">
          {new Intl.NumberFormat().format(country.today_confirmed)}
        </h3>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
  // onShowData: PropTypes.func.isRequired,
};

export default Country;
