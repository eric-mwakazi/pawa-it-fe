// components/DateLocation.tsx
import React from 'react';

interface DateLocationProps {
  date: string | undefined;
  city: string | undefined;
}

const DateLocation: React.FC<DateLocationProps> = ({ date, city }) => {
  if (!date || !city) {
    return null; // Or a placeholder if needed
  }

  // Format the date to a more readable format (e.g., "20th May 2027")
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-sm text-gray-700">{formattedDate}</div>
      <div className="text-sm text-gray-900 font-semibold">{city}</div>
    </div>
  );
};

export default DateLocation;