import './Header.css';
import Form from '../Form/Form';

const Header = ({ cityName, setCityName, searchLocation }) => {
  return (
    <div className="header-container" data-testid='header'>
      <div className="title">
        <p className="weather-tude-title-text">
          WEATHER-<span className="tude">TUDE</span>
        </p>
        <p className="weather-tude-description">
          "The weather app that tells it like it is."
        </p>
      </div>
      <div>
        <Form
          cityName={cityName}
          setCityName={setCityName}
          searchLocation={searchLocation}
        />
      </div>
    </div>
  );
};

export default Header;
