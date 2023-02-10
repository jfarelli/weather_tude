import { useEffect, useState } from 'react';
import axios from 'axios';

const useFiveDay = (lat, lon) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);

  useEffect(() => {
    if (lat && lon) {
      const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
      axios
        .get(fiveDayURL)
        .then(({ data }) => data)
        .then((data) => setFiveDayForecast(data.list))
        .catch((error) => console.log('ERROR!!!! ', error));
    }
  }, [lat, lon]);

  return [fiveDayForecast];
};

export default useFiveDay;
