import React, { useState } from 'react';
import { useWeatherData } from '../../hooks/useWeatherData';
import './Form.css';

export default function Form() {
  const { searchWeather } = useWeatherData();
  const [city, setCity] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    return await searchWeather(city);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>
          City
          <input placeholder="Enter your city" onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
