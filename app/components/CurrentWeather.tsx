// components/CurrentWeather.tsx
import React from 'react';
import { WeatherData } from '@/types';

interface CurrentWeatherProps {
  current: WeatherData | null;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current }) => {
  if (!current) {
    return (
      <div className="flex items-center justify-center h-48 text-content2 italic">
        Loading current weather...
      </div>
    );
  }

  return (
    <div className="card bg-base-100 p-6 shadow-xl w-full max-w-sm mx-auto text-center animate-in fade-in duration-500">
      {current.icon && (
        <img
          src={current.icon}
          alt={current.description}
          className="w-24 h-24 object-contain mx-auto mb-4"
        />
      )}
      <h2 className="text-5xl font-extrabold text-primary mb-2">
        {current.temperature}°
      </h2>
      <p className="text-content2 capitalize text-base">
        {current.description}
      </p>
    </div>
  );
};

export default CurrentWeather;
