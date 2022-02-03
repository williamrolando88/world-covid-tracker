import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import { MenuIcon, MicrophoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

const TodayDetails = () => {
  const navigate = useNavigate();
  const { status, data } = useSelector(
    (store) => store.covidData.countrySingleDay,
  );

  if (!status) {
    return <Navigate to="/" />;
  }

  const formatNumber = (number) => new Intl.NumberFormat().format(number);

  const totalStats = {
    Confirmed: { value: 0 },
    Recovered: { value: 0 },
    'Open Cases': { value: 0 },
    Deaths: { value: 0 },
  };

  if (status === 'fulfilled') {
    totalStats.Confirmed.value = data.today_confirmed;
    totalStats.Recovered.value = data.today_recovered;
    totalStats['Open Cases'].value = data.today_open_cases;
    totalStats.Deaths.value = data.today_deaths;
  }

  return status === 'pending' ? (
    <LoadingScreen />
  ) : status === 'fulfilled' ? (
    <div className="h-screen bg-[#24243e]">
      {/* Navbar */}
      <nav className="font-gill-sans flex items-center justify-between bg-gradient-to-b from-[#0f0c29] via-[#302b63]  to-[#24243e] px-2 py-2 text-white">
        <button
          type="button"
          className="flex items-center rounded-md border py-1 px-2 uppercase"
          onClick={() => navigate(-1)}
        >
          <ArrowCircleLeftIcon className="h-6 w-6" />
          <span>BACK</span>
        </button>
        <h1 className="text-lg capitalize">Country details</h1>
        <div className="flex items-center gap-2">
          <button className="h-6 w-6" type="button">
            <MicrophoneIcon />
          </button>
          <button className="h-6 w-6" type="button">
            <MenuIcon />
          </button>
        </div>
      </nav>
      {/* Main container */}
      <article className="font-lato flex flex-col items-stretch text-center text-slate-100">
        {/* Header */}
        <section className="h-48 w-screen bg-[url(./assets/covid.jpg)] bg-cover bg-center bg-no-repeat text-white">
          <div className="flex h-full flex-col items-center bg-black/60">
            <div className="grid grow content-center">
              <h2 className="font-gill-sans text-center text-2xl">
                {data.name}
              </h2>
            </div>
            <p className="m-1 self-end text-xs">{`Source: ${data.source}`}</p>
          </div>
        </section>
        {/* Separator */}
        <p className="font-gill-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-1 text-center text-sm  uppercase">{`Today's data (${data.date})`}</p>
        {/* Total data */}
        <div className="flex justify-evenly bg-[#302b63] py-2">
          {Object.keys(totalStats).map((key) => (
            <div key={key} className="flex flex-col">
              <h4>{formatNumber(totalStats[key].value)}</h4>
              <h3 className="font-gill-sans text-xs capitalize">
                {`Total
                ${key}`}
              </h3>
            </div>
          ))}
        </div>
        {/* Growing rate */}
        <div className="grid grid-cols-2">
          <div className="bg-[url(./assets/total.webp)] bg-contain bg-center bg-no-repeat">
            <div className="flex h-36 flex-col items-stretch justify-center bg-[#302b63]/80">
              <h3>Total New Confirmed</h3>
              <h4>{formatNumber(data.today_new_confirmed)}</h4>
            </div>
          </div>
          <div className="bg-[url(./assets/recovered.webp)] bg-contain bg-center bg-no-repeat">
            <div className="flex h-36 flex-col items-stretch justify-center bg-[#24243e]/80">
              <h3>Total New Recovered</h3>
              <h4>{formatNumber(data.today_new_recovered)}</h4>
            </div>
          </div>
          <div className="bg-[url(./assets/confirmed.webp)] bg-contain bg-center bg-no-repeat">
            <div className="flex h-36 flex-col items-stretch justify-center bg-[#24243e]/80">
              <h3>Total New Open Cases</h3>
              <h4>{formatNumber(data.today_new_open_cases)}</h4>
            </div>
          </div>
          <div className="bg-[url(./assets/dead.webp)] bg-contain bg-center bg-no-repeat">
            <div className="flex h-36 flex-col items-stretch justify-center bg-[#302b63]/80">
              <h3>Total New Deaths</h3>
              <h4>{formatNumber(data.today_new_deaths)}</h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  ) : (
    <ErrorScreen />
  );
};

export default TodayDetails;
