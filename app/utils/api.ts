const BASE_URL = 'http://localhost:8000/api/weather'

export const fetchCurrentWeather = async (lat: number, lon: number) => {
  const res = await fetch(`${BASE_URL}/current?lat=${lat}&lon=${lon}`)
  return res.json()
}

export const fetchForecast = async (lat: number, lon: number) => {
  const res = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}`)
  return res.json()
}

export const fetchGeocode = async (city: string) => {
  const res = await fetch(`${BASE_URL}/geocode?city=${city}`)
  return res.json()
}
