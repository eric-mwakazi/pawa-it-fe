// components/Humidity.tsx
import React from 'react';
import { WeatherData } from '@/types';

interface HumidityProps {
  humidity: number | undefined;
}

const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
  if (humidity === undefined) {
    return <div>Humidity data not available.</div>; // Or a placeholder
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <h3 className="text-sm text-gray-700 font-semibold mb-2">Humidity</h3>
      <div className="text-2xl font-bold">{humidity}%</div>
      <div className="mt-2">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${humidity}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {humidity > 70
            ? 'High humidity'
            : humidity > 30
            ? 'Moderate humidity'
            : 'Low humidity'}
        </div>
      </div>
    </div>
  );
};

export default Humidity;