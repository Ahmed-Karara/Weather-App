import clear from "../../image/clear.jpg";
import clear_night from "../../image/clear-night.jpg";
import clouds from "../../image/clouds.jpg";
import clouds_night from "../../image/clouds-night.jpg";
import rain from "../../image/rain.jpg";
import rain_night from "../../image/rain-night.webp";
import snow from "../../image/snow.jpg";
import snow_night from "../../image/snow-night.jpg";
import haze from "../../image/haze.jpg";
import haze_night from "../../image/haze-night.jpg";
import thunderstorm from "../../image/thunderstorm.jpg";

export const backGround = (weather) => {
  if (!weather) return clear;
  if (weather.details === "Clear" && weather.icon.includes("d")) return clear;
  else if (weather.details === "Clear" && weather.icon.includes("n"))
    return clear_night;
  else if (weather.details === "Clouds" && weather.icon.includes("d"))
    return clouds;
  else if (weather.details === "Clouds" && weather.icon.includes("n"))
    return clouds_night;
  else if (weather.details === "Rain" && weather.icon.includes("d"))
    return rain;
  else if (weather.details === "Rain" && weather.icon.includes("n"))
    return rain_night;
  else if (weather.details === "Snow" && weather.icon.includes("d"))
    return snow;
  else if (weather.details === "Snow" && weather.icon.includes("n"))
    return snow_night;
  else if (
    (weather.details === "Haze" ||
      weather.details === "Mist" ||
      weather.details === "Smoke") &&
    weather.icon.includes("d")
  )
    return haze;
  else if (
    (weather.details === "Haze" ||
      weather.details === "Mist" ||
      weather.details === "Smoke") &&
    weather.icon.includes("n")
  )
    return haze_night;
  else if (weather.details === "Thunderstorm") return thunderstorm;
  else {
    return clear;
  }
};
