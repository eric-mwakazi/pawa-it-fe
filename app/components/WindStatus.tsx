import React from 'react';
import { WeatherData } from '@/types';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface WindStatusProps {
  windSpeed: number | undefined;
  windDirection: string | undefined;
}

const WindStatus: React.FC<WindStatusProps> = ({ windSpeed, windDirection }) => {
  if (windSpeed === undefined) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-500">
        Wind data not available.
      </div>
    );
  }

  // Convert wind direction from degrees to a human-readable format (e.g., N, S, E, W, NW, etc.)
  const getWindDirectionText = (degrees: string | undefined): string => {
    if (!degrees) return '';
    const deg = parseInt(degrees, 10);
    if (deg >= 338 || deg <= 22) return 'N';
    if (deg >= 23 && deg <= 67) return 'NE';
    if (deg >= 68 && deg <= 112) return 'E';
    if (deg >= 113 && deg <= 157) return 'SE';
    if (deg >= 158 && deg <= 202) return 'S';
    if (deg >= 203 && deg <= 247) return 'SW';
    if (deg >= 248 && deg <= 292) return 'W';
    if (deg >= 293 && deg <= 337) return 'NW';
    return '';
  };

  const windDirectionText = getWindDirectionText(windDirection);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col transition-all duration-300">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Wind Status</h3>
      <div className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
        {windSpeed} km/h
      </div>
      {windDirectionText && (
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
          <ArrowUpRightIcon
            className="w-4 h-4 mr-1 transform transition-transform duration-300"
            style={{ transform: `rotate(${windDirection}deg)` }}
          />
          {windDirectionText}
        </div>
      )}
    </div>
  );
};

export default WindStatus;
