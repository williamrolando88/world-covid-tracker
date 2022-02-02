import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const TodayDetails = () => {
  const navigate = useNavigate();
  const { status, data } = useSelector(
    (store) => store.covidData.countrySingleDay,
  );

  if (!status) {
    return <Navigate to="/" />;
  }

  console.log('status', status);
  if (status === 'fulfilled') {
    console.log('data', data);
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return status === 'pending' ? (
    <div>Fetching...</div>
  ) : status === 'fulfilled' ? (
    <div className="flex flex-col items-stretch text-center">
      <div className="flex flex-col items-center">
        <button className="h-6 w-6 self-start" onClick={() => navigate(-1)}>
          <ArrowCircleLeftIcon />
        </button>
        <h2>{data.name}</h2>
        <p className="self-end text-xs">{`Source: ${data.source}`}</p>
      </div>
      <p>{`Today's data (${data.date})`}</p>
      {/* Total data */}
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <div>{formatNumber(data.today_confirmed)}</div>
          <div className="text-xs capitalize">
            Total <br /> confirmed
          </div>
        </div>
        <div className="flex flex-col">
          <div>{formatNumber(data.today_recovered)}</div>
          <div className="text-xs capitalize">
            Total <br /> Recovered
          </div>
        </div>
        <div className="flex flex-col">
          <div>{formatNumber(data.today_open_cases)}</div>
          <div className="text-xs capitalize">
            Total <br /> Open Cases
          </div>
        </div>
        <div className="flex flex-col">
          <div>{formatNumber(data.today_deaths)}</div>
          <div className="text-xs capitalize">
            Total <br /> Deaths
          </div>
        </div>
      </div>
      {/* Growing rate */}
      <div className="grid grid-cols-2">
        <div>
          <div>Total New Confirmed</div>
          <div>{formatNumber(data.today_new_confirmed)}</div>
        </div>
        <div>
          <div>Total New Recovered</div>
          <div>{formatNumber(data.today_new_recovered)}</div>
        </div>
        <div>
          <div>Total New Open Cases</div>
          <div>{formatNumber(data.today_new_open_cases)}</div>
        </div>
        <div>
          <div>Total New Deaths</div>
          <div>{formatNumber(data.today_new_deaths)}</div>
        </div>
      </div>
    </div>
  ) : status === 'rejected' ? (
    <div>Internal error</div>
  ) : null;
};

export default TodayDetails;
