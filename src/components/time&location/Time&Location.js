import React from "react";
import { timeFormat } from "../../service/FetchApi";

function TimeLocation({ weather: { dt, name, timezone, country } }) {
  return (
    <div className="text-center">
      <div className="text-white text-lg font-light flex flex-col justify-center mt-8 flex-wrap">
        <p>{timeFormat(dt + timezone - 7200)}</p>
        <p>" Approximate Time "</p>
      </div>
      <div className="text-white text-3xl flex justify-center mt-8 ">
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLocation;
