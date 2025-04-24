'use client';

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

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md mx-auto">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search city..."
        className="input input-bordered w-full"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Go
      </button>
    </div>
  );
};

export default SearchBar;
