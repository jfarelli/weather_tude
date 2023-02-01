import './FiveDay.css';
const dayjs = require('dayjs');

const FiveDay = ({ data, fiveDayForecast }) => {
  return (
    <div className="five-day-div" data-testid='five-day-div'>
      <h1 className="five-day-forecast-title-text">
        5-Day Forecast for <span className="five-day-city">{data.name}</span>
      </h1>
      <div className="five-day-container">
        <div className="individual-day-container">
          <p className="day">
            <b>{dayjs(fiveDayForecast[4]?.dt_txt).format('dddd')}</b>
          </p>
          <p className="day-weather">
            {fiveDayForecast[4]?.weather[0].description
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(' ')}
          </p>
        </div>
        <div className="individual-day-container">
          <p className="day">
            <b>{dayjs(fiveDayForecast[12]?.dt_txt).format('dddd')}</b>
          </p>
          <p className="day-weather">
            {fiveDayForecast[12]?.weather[0].description
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(' ')}
          </p>
        </div>
        <div className="individual-day-container">
          <p className="day">
            <b>{dayjs(fiveDayForecast[20]?.dt_txt).format('dddd')}</b>
          </p>
          <p className="day-weather">
            {fiveDayForecast[20]?.weather[0].description
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(' ')}
          </p>
        </div>
        <div className="individual-day-container">
          <p className="day">
            <b>{dayjs(fiveDayForecast[28]?.dt_txt).format('dddd')}</b>
          </p>
          <p className="day-weather">
            {fiveDayForecast[28]?.weather[0].description
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(' ')}
          </p>
        </div>
        <div className="individual-day-container">
          <p className="day">
            <b>{dayjs(fiveDayForecast[36]?.dt_txt).format('dddd')}</b>
          </p>
          <p className="day-weather">
            {fiveDayForecast[36]?.weather[0].description
              .split(' ')
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(' ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveDay;
