import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDetails from './WeatherDetails';
import mockData from '../../mockData/mockData';
import insults from '../../data/data';

const MockWeatherDetails = () => {
  const data = mockData;
  const cityFillerWord = insults.fillerWords[0];
  const weatherConFillerWord = insults.fillerWeatherConText[0];
  const temperatureFillerWord = insults.fillerTempText[0];
  const displayedText = insults.cold[0];
  const degToCompass = jest.fn();

  return (
    <WeatherDetails
      data={data}
      degToCompass={degToCompass}
      displayedText={displayedText}
      cityFillerWord={cityFillerWord}
      temperatureFillerWord={temperatureFillerWord}
      weatherConFillerWord={weatherConFillerWord}
    />
  );
};

describe('WeatherDetails', () => {
  test('Should display City Name', () => {
    render(<MockWeatherDetails />);
    const cityName = screen.getByText(/denver/i);
    expect(cityName).toBeInTheDocument();
  });

  test('Should display City Name Filler Word', () => {
    render(<MockWeatherDetails />);
    const cityNameFillerWord = screen.getByText(/maybe/i);
    expect(cityNameFillerWord).toBeInTheDocument();
  });

  test('Should display Current Temperature', () => {
    render(<MockWeatherDetails />);
    const currentTemp = screen.getByText(/29/i);
    expect(currentTemp).toBeInTheDocument();
  });

  test('Should display Current Temperature Filler Word', () => {
    render(<MockWeatherDetails />);
    const currentTempFillerWord = screen.getByText(
      /i dunno, look for yourself/i
    );
    expect(currentTempFillerWord).toBeInTheDocument();
  });

  test('Should display Current Weather Condition', () => {
    render(<MockWeatherDetails />);
    const weatherCondition = screen.getByText(/light snow/i);
    expect(weatherCondition).toBeInTheDocument();
  });

  test('Should display Current Weather Condition Filler Word', () => {
    render(<MockWeatherDetails />);
    const weatherConditionFillerWord = screen.getByText(
      /depending on who you talk to/i
    );
    expect(weatherConditionFillerWord).toBeInTheDocument();
  });

  test('Should display High and Low Temperatures', () => {
    render(<MockWeatherDetails />);
    const highTemp = screen.getByText(/40/i);
    expect(highTemp).toBeInTheDocument();
    const lowTemp = screen.getByText(/19/i);
    expect(lowTemp).toBeInTheDocument();
  });

  test('Should display a box with further weather details', () => {
    render(<MockWeatherDetails />);
    const weatherDetailsBox = screen.getByTestId(/display-box/i);
    expect(weatherDetailsBox).toBeInTheDocument();
  });

  test('Should display "Feels Like" text, displayed on page as "Other\'s say it\'s"', () => {
    render(<MockWeatherDetails />);
    const feelsLikeText = screen.getByText(/others say it's/i);
    expect(feelsLikeText).toBeInTheDocument();
  });

  test('Should display "Feels Like" temperature', () => {
    render(<MockWeatherDetails />);
    const feelsLikeTemp = screen.getByText(/26/i);
    expect(feelsLikeTemp).toBeInTheDocument();
  });

  test('Should display "Humidity" text, displayed on page as "Air Wetness"', () => {
    render(<MockWeatherDetails />);
    const humidityText = screen.getByText(/air wetness/i);
    expect(humidityText).toBeInTheDocument();
  });

  test('Should display "Humidity" percentage', () => {
    render(<MockWeatherDetails />);
    const humidityPercentage = screen.getByText(/48/i);
    expect(humidityPercentage).toBeInTheDocument();
  });

  test('Should display "Wind Speed" text, displayed on page as "It\'s this windy"', () => {
    render(<MockWeatherDetails />);
    const windSpeedText = screen.getByText(/it's this windy/i);
    expect(windSpeedText).toBeInTheDocument();
  });

  test('Should display "Wind Speed" details', () => {
    render(<MockWeatherDetails />);
    const windSpeedDetails = screen.getByText(/3 mph/i);
    expect(windSpeedDetails).toBeInTheDocument();
  });

  test('Should display a container that holds some sassy text to the user', () => {
    render(<MockWeatherDetails />);
    const rudeTextContainer = screen.getByTestId(/rude-container/i);
    expect(rudeTextContainer).toBeInTheDocument();
    const rudeText = screen.getByText(
      /you'll probably die out there... go find out/i
    );
    expect(rudeText).toBeInTheDocument();
  });
});
