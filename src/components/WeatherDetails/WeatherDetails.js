import './WeatherDetails.css';

const WeatherDetails = ({
  data,
  degToCompass,
  displayedText,
  cityFillerWord,
  temperatureFillerWord,
  weatherConFillerWord,
}) => {
  return (
    <div className="info-div-container">
      <div className="city-name-container">
        <h1 className="city-name">{data.name}</h1>
        <p className="maybe">{cityFillerWord}</p>
        <h2 className="current-temp">{data.main.temp.toFixed()}°F</h2>
        <p className="current-temp-p">{temperatureFillerWord}</p>
        <h2 className="weather-description">
          {data.weather[0].description
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(' ')}
        </h2>
        <p className="weather-description-p">{weatherConFillerWord}</p>
        <p className="high-and-low-temps">
          <span className="high-and-low">High: </span>
          {data.main.temp_max.toFixed()}°F <span className="separator">|</span>{' '}
          <span className="high-and-low">Low: </span>
          {data.main.temp_min.toFixed()}°F
        </p>
      </div>
      <div className="rude-text-and-display">
        <div className="display-box">
          <div>
            <p className="feels-like">Others say it's:</p>
            <p className="data">{data.main.feels_like.toFixed()}°F</p>
          </div>
          <div>
            <p className="humidity">Air Wetness:</p>
            <p className="data">{data.main.humidity}% </p>
          </div>
          <div>
            <p className="wind-speed">It's this windy:</p>
            <p className="data">{`${data.wind.speed.toFixed()} mph ${degToCompass(
              data.wind.deg
            )} `}</p>
          </div>
        </div>
        <div className="rude-text-container">
          <p className="rude-text">{displayedText}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
