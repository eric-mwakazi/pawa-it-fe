// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import TemperatureToggle from '@/components/TemperatureToggle';
import CurrentWeather from '@/components/CurrentWeather';
import DateLocation from '@/components/DateLocation';
import Forecast from '@/components/Forecast';
import WindStatus from '@/components/WindStatus';
import Humidity from '@/components/Humidity';
import { fetchGeocode } from '@/utils/api';
import { GeocodeResult } from '@/types';
import { useWeatherData } from '@/hooks/useWeatherData';

export default function Home() {
  const [city, setCity] = useState<string>('Nairobi');
  const [geocodeResult, setGeocodeResult] = useState<GeocodeResult | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const { current, forecast, loading, error: weatherError, refetch } = useWeatherData(
    geocodeResult?.lat,
    geocodeResult?.lon,
    unit
  );

  useEffect(() => {
    handleCitySearch(city);
  }, []);

  const handleCitySearch = async (searchedCity: string) => {
    setSearchError(null);
    setGeocodeResult(null);
    setCity(searchedCity);

    try {
      const data: GeocodeResult = await fetchGeocode(searchedCity);
      setGeocodeResult(data);
      console.log('Geocode Result:', data);
    } catch (err: any) {
      console.error('Error fetching geocode:', err.message);
      setSearchError(err.message || 'Failed to find city');
    }
  };

  const handleTemperatureUnitChange = (selectedUnit: 'metric' | 'imperial') => {
    setUnit(selectedUnit);
    if (geocodeResult?.lat && geocodeResult?.lon && refetch) {
      refetch(geocodeResult.lat, geocodeResult.lon, selectedUnit);
    }
  };

  return (
    <main className="p-4 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <SearchBar onSearch={handleCitySearch} />
        <TemperatureToggle onToggle={handleTemperatureUnitChange} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center">
          <CurrentWeather current={current} />
          <DateLocation date={current?.date} city={current?.city} />
        </div>

        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <Forecast forecast={forecast} />
        </div>

        <div className="flex flex-col space-y-4">
          <WindStatus windSpeed={current?.windSpeed} windDirection={current?.windDirection} />
          <Humidity humidity={current?.humidity} />
        </div>
      </div>

      {searchError && <p className="text-red-500">{searchError}</p>}
      {loading && <p>Loading weather data...</p>}
      {weatherError && <p className="text-red-500">Error loading weather: {weatherError}</p>}
    </main>
  );
}