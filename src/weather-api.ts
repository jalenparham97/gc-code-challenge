import { config } from './config';
import { CityGeo, GeoResponse, WeatherData, WeatherResponse } from './types';

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const geo = await getCityCoordinates(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${config.weatherApiKey}&units=imperial`;
  const response = await fetch(url);
  const data: WeatherResponse = await response.json();
  return {
    city_name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    wind_speed: data.wind.speed,
  };
};

export const getCityCoordinates = async (city: string = 'Detroit'): Promise<CityGeo> => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},{US}&limit=1&appid=${config.weatherApiKey}`;
  const response = await fetch(url);
  const data: GeoResponse = await response.json();
  return data[0];
};
