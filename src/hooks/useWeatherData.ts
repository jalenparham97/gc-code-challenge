import { useContext } from 'react';
import { WeatherContext } from '../context';
import { getWeatherData } from '../weather-api';

export const useWeatherData = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  const searchWeather = async (city: string) => {
    const weather = await getWeatherData(city);
    setWeatherData(weather);
    return weatherData;
  };

  return {
    weatherData,
    searchWeather,
  };
};
