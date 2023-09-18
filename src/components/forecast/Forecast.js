import React from "react";

import { imgCode } from "../../service/FetchApi";

function Forecast({ title, weather, units }) {
  return (
    <div className="flex flex-col justify-center items-start mt-6 text-white">
      <p className="text-lg">{title}</p>
      <hr className="my-2 w-full" />
      <div className="flex justify-around gap-y-5 items-center flex-wrap w-full">
        {weather.map((item, id) => {
          return (
            <div className="mt-3" key={id}>
              <div className="flex flex-col justify-center items-center space-y-3 text-lg">
                <p className="font-light">{item.title}</p>
                <img
                  src={imgCode(item.icon)}
                  alt={item.description}
                  title={item.description}
                />

                <p className="font-medium text-cyan-400">
                  {item.temp.toFixed()}°{units === "metric" ? "C" : "F"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
