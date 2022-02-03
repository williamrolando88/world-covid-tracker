import React from 'react';
import loading from '../assets/loading.svg';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center  bg-[#302b63] text-stone-200">
      <img
        className="h-24 w-24 animate-spin invert"
        src={loading}
        alt="Loading-icon"
        width="100"
        height="100"
      />
      <h2 className="font-lato text-3xl font-bold">Loading Data</h2>
    </div>
  );
};

export default LoadingScreen;
