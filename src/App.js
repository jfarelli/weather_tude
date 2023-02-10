import './App.css';
import axios from 'axios';
import insults from './data/data';
import { useEffect, useState } from 'react';
import useFiveDay from './hooks/useFiveDay';
import useTempText from './hooks/useTempText';
import Header from './components/Header/Header';
import FiveDay from './components/FiveDay/FiveDay';
import useFillerWords from './hooks/useFillerWords';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const [rudeText, displayRudeText] = useTempText(temp, insults);
  const [fiveDayForecast] = useFiveDay(lat, lon);
  const [temperatureFillerWord, weatherConFillerWord, displayFillerWords] =
    useFillerWords(insults);

  useEffect(() => {
    displayRudeText();
  }, [data]);

  const searchLocation = (e) => {
    if (e.key !== 'Enter') return;
    setLoading(true);
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setData(data);
        const { main, coord } = data;
        setTemp(main.temp);
        setLat(coord.lat);
        setLon(coord.lon);
        displayFillerWords();
        setLoading(false);
      })
      .catch((error) => {
        console.error('ERROR!!! ', error.message);
        window.alert(
          "That's not a real place. Try again, but make sure you know how to spell first."
        );
        window.location.reload();
      });
    setCityName('');
  };

  const degToCompass = (num) => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];

    return arr[val % 16];
  };

  return (
    <div className="App">
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          <Header
            cityName={cityName}
            setCityName={setCityName}
            searchLocation={searchLocation}
          />
          {data.main && fiveDayForecast ? (
            <>
              <WeatherDetails
                data={data}
                degToCompass={degToCompass}
                rudeText={rudeText}
                temperatureFillerWord={temperatureFillerWord}
                weatherConFillerWord={weatherConFillerWord}
              />
              <FiveDay data={data} fiveDayForecast={fiveDayForecast} />
            </>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
};

export default App;
