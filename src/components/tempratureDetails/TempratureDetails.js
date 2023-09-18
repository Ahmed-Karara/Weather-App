import React from "react";
import { BsSun, BsSunset } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { RiCloudWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { imgCode, timeFormat } from "../../service/FetchApi";

function TempratureDetails({
  weather: {
    details,
    temp,
    temp_max,
    temp_min,
    speed,
    sunrise,
    sunset,
    feels_like,
    humidity,
    timezone,
    icon,
  },
  units,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8 mt-10 text-white py-2">
      <div className="text-3xl text-cyan-400">
        <p>{details}</p>
      </div>

      <div className="flex justify-center items-center min-w-fit gap-7 flex-wrap">
        <div className="w-56 flex justify-center">
          <img src={imgCode(icon)} alt={icon} title={details} />
        </div>
        <div className="text-4xl text-center w-56">
          <p>
            {temp.toFixed()}
            <sup>°</sup>
            {units === "metric" ? <sup>C</sup> : <sup>F</sup>}
          </p>
          <span className="text-2xl">
            {icon.includes("d") ? "Day" : "Night"}
          </span>
        </div>
        <div className="flex flex-col items-center text-white text-2xl w-56">
          <div className="flex space-x-2 ">
            <CiTempHigh />
            <span className="text-sm">
              Real Fell {feels_like.toFixed()}°{units === "metric" ? "C" : "F"}
            </span>
          </div>

          <div className="flex space-x-2">
            <WiHumidity />
            <span className="text-sm">Humidity {humidity}%</span>
          </div>

          <div className="flex space-x-2">
            <RiCloudWindyLine />
            <span className="text-sm">Wind {speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-3 space-y-4 flex-wrap">
        <div className="flex justify-around items-center flex-wrap w-full gap-y-4">
          <p className="font-light flex gap-4">
            <BsSun className="text-xl" />
            Rise :
            <span className="font-medium ml-1">
              {timeFormat(sunrise + timezone - 10800, "hh:mm a")}
            </span>
          </p>

          <p className="font-light flex gap-4">
            <BsSunset className="text-xl" />
            Set :
            <span className="font-medium ml-1">
              {timeFormat(sunset + timezone - 10800, "hh:mm a")}
            </span>
          </p>
        </div>

        <p className="font-light">
          High :
          <span className="font-medium ml-1">
            {temp_max.toFixed()}°{units === "metric" ? "C" : "F"}
          </span>
        </p>

        <p className="font-light">
          Low :
          <span className="font-medium ml-1">
            {temp_min.toFixed()}°{units === "metric" ? "C" : "F"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TempratureDetails;
