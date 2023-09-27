import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/forecast/Forecast";
import Inputs from "./components/inputs/Inputs";
import TempratureDetails from "./components/tempratureDetails/TempratureDetails";
import TimeLocation from "./components/time&location/Time&Location";
import TopNav from "./components/topnav/TopNav";
import getWeatherDataFormatted from "./service/FetchApi";

import Loader from "./components/loader/Loader";
import { backGround } from "./components/backGrounds/BackGrounds";

function App() {
  const [location, setLocation] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeId = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const fetchWeather = async () => {
      await getWeatherDataFormatted({ ...location, units })
        .then((data) => {
          console.log(data);
          setWeather(data);
        })
        .catch(() => {
          setWeather(false);
        });
    };
    fetchWeather();

    return () => {
      clearTimeout(timeId);
    };
  }, [location, units]);

  return (
    <div>
      {loading && <Loader />}
      <div
        className="w-full border-none py-5 px-14 bg-cover bg-center h-full bg-no-repeat "
        style={{ backgroundImage: `url(${backGround(weather)})` }}
      >
        <TopNav setLocation={setLocation} />
        <Inputs setLocation={setLocation} setUnits={setUnits} />
        {weather ? (
          <div>
            <TimeLocation weather={weather} />
            <TempratureDetails weather={weather} units={units} />
            <Forecast
              title={"3 Hours Forecast"}
              weather={weather.hourly}
              units={units}
            />
            <Forecast
              title={"Daily Forecast"}
              weather={weather.daily}
              units={units}
            />
          </div>
        ) : (
          <div className="flex justify-center h-screen items-start text-white text-2xl">
            No Results Were Found
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
