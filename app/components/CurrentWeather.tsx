// components/CurrentWeather.tsx
import React from 'react';
import { WeatherData } from '@/types';

interface CurrentWeatherProps {
  current: WeatherData | null;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current }) => {
  if (!current) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-500">
        Loading current weather...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 w-full max-w-sm mx-auto text-center transition-all duration-300">
      {current.icon && (
        <img
          src={current.icon}
          alt={current.description}
          className="w-20 h-20 mx-auto mb-4"
        />
      )}
      <div className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
        {current.temperature}°
      </div>
      <div className="text-lg text-gray-500 dark:text-gray-300 capitalize">
        {current.description}
      </div>
    </div>
  );
};

export default CurrentWeather;
