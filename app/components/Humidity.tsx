// components/Humidity.tsx
import React from 'react';

interface HumidityProps {
  humidity: number | undefined;
}

const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
  if (humidity === undefined) {
    return (
      <div className="text-center text-content2 italic">
        Humidity data not available.
      </div>
    );
  }

  const level =
    humidity > 70
      ? 'High humidity'
      : humidity > 30
      ? 'Moderate humidity'
      : 'Low humidity';

  return (
    <div className="card bg-base-100 p-4 rounded-xl shadow-md w-full max-w-xs mx-auto animate-in fade-in duration-500">
      <h3 className="text-sm text-content1 font-semibold mb-2">Humidity</h3>
      <div className="text-3xl font-extrabold text-primary mb-1">{humidity}%</div>
      <div className="w-full h-2.5 bg-base-300 rounded-full overflow-hidden mb-1">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>
      <div className="text-xs text-content2">{level}</div>
    </div>
  );
};

export default Humidity;
