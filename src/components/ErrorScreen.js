import React from 'react';
import error from '../assets/error.svg';

const ErrorScreen = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[#302b63] text-stone-200">
      <img
        className="h-32 w-32 invert"
        src={error}
        alt="Error-icon"
        width="200"
        height="200"
      />
      <h2 className="font-lato text-center text-2xl font-bold">
        ERROR: <br /> Couldn't connect to server
      </h2>
    </div>
  );
};

export default ErrorScreen;
