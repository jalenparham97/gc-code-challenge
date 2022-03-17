export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  id: number;
  name: string;
};

export type GeoResponse = [{ lat: number; lon: number }];

export type CityGeo = {
  lat: number;
  lon: number;
};

export type WeatherData = {
  description?: string;
  feels_like?: number;
  temp?: number;
  wind_speed?: number;
  city_name?: string;
};
