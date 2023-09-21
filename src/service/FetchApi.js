import { DateTime } from "luxon";

const API_KEY = "eb3e8c9f3a5131c4c0f6e9b79ab0dc23";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appId: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        return false;
      }
      return data;
    });
};

const weatherFormat = (data) => {
  const {
    coord: { lat, lon },
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    name,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    dt,
    country,
    sunrise,
    sunset,
    timezone,
    name,
    details,
    icon,
  };
};

const weatherForecastFormat = (data) => {
  let {
    city: { timezone },
    list,
  } = data;

  let hourly = list.slice(0, 5).map((h) => {
    return {
      title: timeFormat(h.dt + timezone - 10800, "hh:mm a"),
      temp: h.main.temp,
      icon: h.weather[0].icon,
      description: h.weather[0].main,
    };
  });

  let daily = list
    .filter((d) => {
      return d.dt_txt.includes("15:00:00");
    })
    .map((d) => {
      return {
        title: timeFormat(d.dt + timezone - 10800, "cccc"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
        description: d.weather[0].main,
      };
    });

  return { timezone, hourly, daily };
};

const getWeatherDataFormatted = async (searchParams) => {
  const weatherData = await getWeatherData("weather", searchParams).then(
    weatherFormat
  );

  const WeatherForecast = await getWeatherData("forecast", searchParams).then(
    weatherForecastFormat
  );

  return { ...weatherData, ...WeatherForecast };
};

export const timeFormat = (
  secs,
  format = "cccc, dd LLLL yyyy' | Local Time 'hh:mm a"
) => DateTime.fromSeconds(secs).toFormat(format);

export const imgCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getWeatherDataFormatted;
