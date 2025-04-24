// app/components/SearchBar.tsx
'use client'; // This line makes it a Client Component

import * as React from 'react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      onSearch(city.trim());
      // Optionally clear the input after search
      // setCity('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && city.trim()) {
      onSearch(city.trim());
      // Optionally clear the input after search
      // setCity('');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border border-gray-300 focus:border-primary-500 focus:ring-primary-500 shadow-sm"
      />
      <button
        onClick={handleSearchClick}
        className="btn btn-primary rounded-md"
      >
        Go
      </button>
    </div>
  );
};

export default SearchBar;