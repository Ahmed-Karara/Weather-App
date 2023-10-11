import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Inputs = ({ setLocation, setUnits }) => {
  const [city, setCity] = useState("");
  const [active, setActive] = useState("celsius");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== "") {
      setLocation({ q: city });
    }
    setCity("");
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setLocation({ lat, lon });
        console.log(lat, lon);
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-6 gap-7 p-2 text-white text-md flex-wrap">
      <form onSubmit={handleSubmit} className="w-80">
        <input
          type="text"
          value={city}
          className="placeholder:lowercase w-full text-black font-light p-1.5 pl-3 shadow-xl focus:outline-none rounded-2xl capitalize"
          placeholder="Search for city..."
          onChange={(e) => setCity(e.currentTarget.value)}
          required
        />
      </form>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-around space-x-3">
          <FaSearch
            className="text-white cursor-pointer transition ease-out hover:scale-150"
            size={18}
            onClick={handleSubmit}
          />
          <GoLocation
            className="text-white cursor-pointer transition ease-out hover:scale-150"
            size={18}
            onClick={handleLocation}
          />
        </div>
        <div className="flex justify-center space-x-1.5 text-lg">
          <button
            onClick={() => {
              setUnits("metric");
              setActive("celsius");
            }}
            className={
              active === "celsius"
                ? "text-red-500 transition ease-out text-xl"
                : ""
            }
          >
            °C
          </button>
          <p>|</p>
          <button
            onClick={() => {
              setUnits("imperial");
              setActive("fahrenheit");
            }}
            className={
              active === "fahrenheit"
                ? "text-red-500 transition ease-out text-xl"
                : ""
            }
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
