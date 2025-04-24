import { useEffect, useState } from 'react'
import { WeatherData, ForecastDay } from '@/types'
import { fetchCurrentWeather, fetchForecast } from '@/utils/api'

export const useWeatherData = (lat: number, lon: number) => {
  const [current, setCurrent] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [cur, fc] = await Promise.all([
        fetchCurrentWeather(lat, lon),
        fetchForecast(lat, lon),
      ])
      setCurrent(cur)
      setForecast(fc)
      setLoading(false)
    }
    loadData()
  }, [lat, lon])

  return { current, forecast, loading }
}
