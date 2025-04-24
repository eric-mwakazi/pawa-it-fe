// components/TemperatureToggle.tsx
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

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCelsius(event.target.checked);
  };

  return (
    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isCelsius}
        onChange={handleToggle}
        id="temperature-toggle"
      />
      <label
        className="peer-checked:translate-x-full peer-checked:bg-primary-500 absolute top-0 left-0 w-6 h-6 rounded-full shadow-md transition-all duration-300 cursor-pointer"
        htmlFor="temperature-toggle"
      ></label>
      <div className="absolute left-1 top-1 text-xs text-gray-700 peer-checked:text-white">°C</div>
      <div className="absolute right-1 top-1 text-xs text-gray-700 peer-checked:text-white">°F</div>
    </div>
  );
};

export default TemperatureToggle;