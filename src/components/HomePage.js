import { MicrophoneIcon, MenuIcon } from '@heroicons/react/solid';
import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import LoadingScreen from './LoadingScreen';

const HomePage = () => {
  const { status, countries } = useSelector((store) => store.covidData.today);

  const worldStats = {
    todayConfirmed: 0,
  };

  /* eslint-disable */
  if (status === 'fulfilled') {
    Object.keys(countries).map((key) => {
      // todo: Here I can add mutating code to add world totals
      worldStats.todayConfirmed += countries[key].today_confirmed;
    });
  }
  /* eslint-enable */

  return status === 'pending' ? (
    <LoadingScreen />
  ) : status === 'fulfilled' ? (
    <>
      {/* Navbar */}
      <nav className="font-gill-sans flex items-center justify-between bg-gradient-to-b from-[#0f0c29] via-[#302b63]  to-[#24243e] px-2 py-2 text-white">
        <button type="button" className="rounded-md border py-1 px-2 uppercase">
          Home
        </button>
        <h1 className="text-lg uppercase">Covid Tracker</h1>
        <div className="flex items-center gap-2">
          <button className="h-6 w-6" type="button">
            <MicrophoneIcon />
          </button>
          <button className="h-6 w-6" type="button">
            <MenuIcon />
          </button>
        </div>
      </nav>
      {/* Header section */}
      <section className="h-48 w-screen bg-[url(./assets/covid.jpg)] bg-cover bg-center bg-no-repeat text-white">
        <div className="flex h-full flex-col items-center justify-center gap-4 bg-black/60">
          <h2 className="font-gill-sans text-2xl">World Stats</h2>
          <h3 className="font-lato text-sm">
            {`Total infections: ${new Intl.NumberFormat().format(
              worldStats.todayConfirmed,
            )}`}
          </h3>
        </div>
      </section>
      {/* Separator */}
      <p className="font-gill-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-1 text-center text-sm  uppercase text-white">
        Stats by country
      </p>
      {/* Countries container */}
      <main className="font-lato grid grid-cols-2 bg-[#24243e]">
        {Object.keys(countries).map((key, index) => (
          <Country
            key={countries[key].id}
            id={key}
            index={index}
            country={countries[key]}
          />
        ))}
      </main>
    </>
  ) : (
    <div>Conection error</div>
  );
};

export default HomePage;
