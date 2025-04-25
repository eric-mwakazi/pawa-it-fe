'use client';

import React, { useState, useEffect } from 'react';

interface TemperatureToggleProps {
  onToggle: (unit: 'metric' | 'imperial') => void;
}

const TemperatureToggle: React.FC<TemperatureToggleProps> = ({ onToggle }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    onToggle(isCelsius ? 'metric' : 'imperial');
  }, [isCelsius, onToggle]);

  const handleToggle = () => {
    setIsCelsius((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium ${isCelsius ? 'text-primary' : 'text-gray-500'}`}>°C</span>
      <div className="relative">
        <input
          type="checkbox"
          id="temperature-toggle"
          checked={!isCelsius}
          onChange={handleToggle}
          className="sr-only"
        />
        <div
          className={`w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
              isCelsius ? 'translate-x-0' : 'translate-x-6'
            }`}
          ></div>
        </div>
      </div>
      <span className={`text-sm font-medium ${!isCelsius ? 'text-primary' : 'text-gray-500'}`}>°F</span>
    </div>
  );
};

export default TemperatureToggle;
