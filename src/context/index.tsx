import { createContext, useState } from 'react';
import { WeatherData } from '../types';

interface WeatherContextData {
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

export const WeatherContext = createContext<WeatherContextData>({
  weatherData: {},
  setWeatherData: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function WeatherContextProvider({ children }: Props) {
  const [weatherData, setWeatherData] = useState<WeatherData>({});

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}
