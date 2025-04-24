import React, { useState } from 'react';

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
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="input input-bordered w-full rounded-md"
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
