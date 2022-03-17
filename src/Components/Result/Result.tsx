import { useWeatherData } from '../../hooks/useWeatherData';
import './Result.css';

export default function Result() {
  const { weatherData } = useWeatherData();

  return (
    <div className="result-container">
      {Object.values(weatherData).length !== 0 && (
        <>
          <h2>{weatherData?.city_name}</h2>
          <p>Description: {weatherData?.description}</p>
          <p>Current temp: {weatherData?.temp} &#8457;</p>
          <p>Feels like: {weatherData?.feels_like} &#8457;</p>
          <p>Wind speed: {weatherData?.wind_speed} mph</p>
        </>
      )}
    </div>
  );
}
