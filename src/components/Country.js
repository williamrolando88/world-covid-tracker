import React from 'react';
import Region from './Region';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Country = (props) => {
  const { id, name } = props.country;

  return (
    <div className="flex items-center px-2 py-1 gap-2">
      <button className="h-6 w-6 border rounded-full">
        <ChevronDownIcon />
      </button>
      <h2>{name}</h2>
      <Region />
    </div>
  );
};

export default Country;
