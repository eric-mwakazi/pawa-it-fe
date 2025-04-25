export interface WeatherData {
    temperature: number
    description: string
    icon: string
    windSpeed: number
    windDirection: string
    humidity: number
    date: string
    city: string
  }
  
  export interface ForecastDay {
    date: string
    temperatureMin: number
    temperatureMax: number
    icon: string
  }
  
  export interface GeocodeResult {
    lat: number
    lon: number
  }
  
  export interface GeocodeResponse {
    latitude: number;
    longitude: number;
  }