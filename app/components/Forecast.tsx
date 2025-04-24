// components/Forecast.tsx
import React from 'react';
import { ForecastDay } from '@/types';

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return (
      <div className="text-center text-content2 italic mt-4">
        No forecast data available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {forecast.slice(0, 3).map((day) => (
        <div
          key={day.date}
          className="card bg-base-100 p-4 shadow-md rounded-xl flex flex-col items-center text-center"
        >
          <div className="text-sm text-content2 mb-2">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          {day.icon && (
            <img
              src={day.icon}
              alt={`Forecast for ${day.date}`}
              className="w-14 h-14 object-contain mb-2"
            />
          )}
          <div className="text-base font-semibold text-content1">
            {day.temperatureMin}° / {day.temperatureMax}°
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
