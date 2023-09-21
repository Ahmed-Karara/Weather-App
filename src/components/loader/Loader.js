import React from "react";

const Loader = () => {
  return (
    <div className="fixed w-full h-screen flex flex-col justify-center items-center gap-5 bg-slate-400 z-10">
      <div className="flex">
        <img
          src="http://openweathermap.org/img/wn/10n@2x.png"
          alt="cloud"
          className="animate-pulse duration-200"
        ></img>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="cloud"
          className="animate-pulse duration-200"
        ></img>
      </div>
      <span className="text-cyan-200 animate-bounce duration-300 text-4xl">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
