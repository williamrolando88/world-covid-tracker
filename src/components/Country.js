import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { country } = props;
  return (
    <div>
      <div className="flex items-center justify-between gap-2 px-2 py-1">
        <h2 className="">{country.name}</h2>
        <button className="h-5 w-5">
          <ChevronRightIcon />
        </button>
        <h3>{country.today_confirmed}</h3>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
  // onShowData: PropTypes.func.isRequired,
};

export default Country;
