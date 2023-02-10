import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDetails from './WeatherDetails';
import mockData from '../../mockData/mockData';

afterEach(cleanup);

const MockWeatherDetails = () => {
  const data = mockData;
  const displayedText = '';
  const temperatureFillerWord = '';
  const weatherConFillerWord = '';
  const degToCompass = jest.fn();

  return (
    <WeatherDetails
      data={data}
      degToCompass={degToCompass}
      displayedText={displayedText}
      temperatureFillerWord={temperatureFillerWord}
      weatherConFillerWord={weatherConFillerWord}
    />
  );
};

describe('WeatherDetails', () => {
  test('should render the correct city name', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText('Denver')).toBeInTheDocument();
  });

  test('should display the current temperature', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/29/i)).toBeInTheDocument();
  });

  test('should display the current weather condition', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/light snow/i)).toBeInTheDocument();
  });

  test('should display the high and low temperatures', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/40/i)).toBeInTheDocument();
    expect(screen.getByText(/19/i)).toBeInTheDocument();
  });

  test('should display a box with further weather details', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByTestId(/display-box/i)).toBeInTheDocument();
  });

  test('should display "Feels Like" text, displayed on page as "Other\'s say it\'s"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/others say it's/i)).toBeInTheDocument();
  });

  test('should display "Feels Like" temperature', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/26/i)).toBeInTheDocument();
  });

  test('should display "Humidity" text, displayed on page as "Air Wetness"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/air wetness/i)).toBeInTheDocument();
  });

  test('should display "Humidity" percentage', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/48/i)).toBeInTheDocument();
  });

  test('should display "Wind Speed" text, displayed on page as "It\'s this windy"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/it's this windy/i)).toBeInTheDocument();
  });

  test('should display "Wind Speed" details', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/3 mph/i)).toBeInTheDocument();
  });

  test('should display a container that holds some rude text to the user', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByTestId(/rude-container/i)).toBeInTheDocument();
  });
});
