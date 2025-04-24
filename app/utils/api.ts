// utils/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL is not defined. Make sure it is set in your .env.local');
}

export const fetchCurrentWeather = async (lat: number, lon: number, units: 'metric' | 'imperial' = 'metric') => {
  try {
    const res = await fetch(`${BASE_URL}/current?lat=${lat}&lon=${lon}&units=${units}`);
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Fetch Current Weather Error:', errorData);
      throw new Error(errorData.message || 'Failed to fetch current weather');
    }
    return await res.json();
  } catch (error: any) {
    console.error('Fetch Current Weather Error:', error);
    throw error;
  }
};

export const fetchForecast = async (lat: number, lon: number, units: 'metric' | 'imperial' = 'metric') => {
  try {
    const res = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}`);
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Fetch Forecast Error:', errorData);
      throw new Error(errorData.message || 'Failed to fetch weather forecast');
    }
    return await res.json();
  } catch (error: any) {
    console.error('Fetch Forecast Error:', error);
    throw error;
  }
};

export const fetchGeocode = async (city: string) => {
  try {
    const res = await fetch(`${BASE_URL}/geocode?city=${city}`);
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Fetch Geocode Error:', errorData);
      throw new Error(errorData.message || 'Could not find city');
    }
    return await res.json();
  } catch (error: any) {
    console.error('Fetch Geocode Error:', error);
    throw error;
  }
};