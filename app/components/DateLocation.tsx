// components/DateLocation.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

interface DateLocationProps {
  date: string | undefined;
  city: string | undefined;
}

const DateLocation: React.FC<DateLocationProps> = ({ date, city }) => {
  if (!date || !city) return null;

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col items-center text-center mb-4 animate-in fade-in duration-500 delay-100">
      <span className="text-sm text-content2">{formattedDate}</span>
      <span className="flex items-center gap-1 text-base font-semibold text-content1">
        <MapPin className="w-4 h-4 text-primary" />
        {city}
      </span>
    </div>
  );
};

export default DateLocation;
