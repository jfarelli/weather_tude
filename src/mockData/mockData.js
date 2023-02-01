const mockData = {
  coord: { lon: -104.9847, lat: 39.7392 },
  weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
  base: 'stations',
  main: {
    temp: 29.28,
    feels_like: 26.24,
    temp_min: 18.72,
    temp_max: 39.69,
    pressure: 1021,
    humidity: 48,
  },
  visibility: 10000,
  wind: { speed: 3, deg: 22, gust: 5.99 },
  snow: { '1h': 0.25 },
  clouds: { all: 0 },
  dt: 1675194356,
  sys: {
    type: 2,
    id: 2004334,
    country: 'US',
    sunrise: 1675174138,
    sunset: 1675210657,
  },
  timezone: -25200,
  id: 5419384,
  name: 'Denver',
  cod: 200,
};

export default mockData;