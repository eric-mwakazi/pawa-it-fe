// components/Forecast.tsx
import React from 'react';
import { ForecastDay } from '@/types'; // Assuming your types folder is correctly configured

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return <div>No forecast data available.</div>; // Or a placeholder
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {forecast.slice(0, 3).map((day) => (
        <div key={day.date} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
          <div className="text-sm text-gray-700 mb-1">{day.date}</div>
          {day.icon && (
            <img
              src={day.icon}
              alt={`Forecast for ${day.date}`}
              className="w-12 h-12 object-contain mb-1" // Adjust size as needed
            />
          )}
          <div className="text-sm text-gray-600">
            {day.temperatureMin}° - {day.temperatureMax}°{/* Unit will be handled in parent */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;