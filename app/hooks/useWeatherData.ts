// hooks/useWeatherData.ts
import { useEffect, useState, useCallback } from 'react';
import { WeatherData, ForecastDay } from '@/types';
import { fetchCurrentWeather, fetchForecast } from '@/utils/api';

export const useWeatherData = (lat: number | undefined, lon: number | undefined, unit: 'metric' | 'imperial' = 'metric') => {
  const [current, setCurrent] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async (currentLat?: number, currentLon?: number, currentUnit: 'metric' | 'imperial' = 'metric') => {
    if (!currentLat || !currentLon) return;

    setLoading(true);
    setError(null);
    try {
      const [currentData, forecastData] = await Promise.all([
        fetchCurrentWeather(currentLat, currentLon, currentUnit),
        fetchForecast(currentLat, currentLon, currentUnit),
      ]);
      setCurrent({
        temperature: currentData.temp,
        description: currentData.description,
        icon: `https://openweathermap.org/img/wn/${currentData.icon}.png`,
        windSpeed: currentData.wind_speed,
        windDirection: '',
        humidity: currentData.humidity,
        date: currentData.date,
        city: currentData.location,
      });

      const dailyForecasts: ForecastDay[] = [];
      if (Array.isArray(forecastData)) {
        forecastData.forEach((dailyChunk) => {
          if (Array.isArray(dailyChunk) && dailyChunk.length > 0) {
            const firstReading = dailyChunk[0];
            dailyForecasts.push({
              date: new Date(firstReading.date).toLocaleDateString(),
              temperatureMin: Math.min(...dailyChunk.map(item => item.temp)),
              temperatureMax: Math.max(...dailyChunk.map(item => item.temp)),
              icon: `https://openweathermap.org/img/wn/${firstReading.icon}.png`,
            });
          }
        });
        setForecast(dailyForecasts.slice(0, 3));
      } else {
        console.error('Forecast data is not in the expected array format:', forecastData);
        setError('Invalid forecast data format');
      }

    } catch (err: any) {
      console.error('Error loading weather data:', err.message);
      setError(err.message || 'Failed to load weather data');
    } finally {
      setLoading(false);
    }
  }, [fetchCurrentWeather, fetchForecast]);

  useEffect(() => {
    loadData(lat, lon, unit);
  }, [lat, lon, unit, loadData]);

  const refetch = useCallback((newLat: number, newLon: number, newUnit: 'metric' | 'imperial') => {
    loadData(newLat, newLon, newUnit);
  }, [loadData]);

  return { current, forecast, loading, error, refetch }; // Ensure 'refetch' is included here
};