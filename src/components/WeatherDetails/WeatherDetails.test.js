import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDetails from './WeatherDetails';
import mockData from '../../mockData/mockData';
import insults from '../../data/data';

afterEach(cleanup);

const MockWeatherDetails = () => {
  const data = mockData;
  const displayedText = '';
  const cityFillerWord = '';
  const temperatureFillerWord = '';
  const weatherConFillerWord = '';
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
  test('renders the correct city name', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText('Denver')).toBeInTheDocument();
  });

  test('displays Current Temperature', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/29/i)).toBeInTheDocument();
  });

  test('displays Current Weather Condition', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/light snow/i)).toBeInTheDocument();
  });

  test('displays High and Low Temperatures', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/40/i)).toBeInTheDocument();
    expect(screen.getByText(/19/i)).toBeInTheDocument();
  });

  test('displays a box with further weather details', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByTestId(/display-box/i)).toBeInTheDocument();
  });

  test('displays "Feels Like" text, displayed on page as "Other\'s say it\'s"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/others say it's/i)).toBeInTheDocument();
  });

  test('displays "Feels Like" temperature', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/26/i)).toBeInTheDocument();
  });

  test('displays "Humidity" text, displayed on page as "Air Wetness"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/air wetness/i)).toBeInTheDocument();
  });

  test('displays "Humidity" percentage', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/48/i)).toBeInTheDocument();
  });

  test('displays "Wind Speed" text, displayed on page as "It\'s this windy"', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/it's this windy/i)).toBeInTheDocument();
  });

  test('displays "Wind Speed" details', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByText(/3 mph/i)).toBeInTheDocument();
  });

  test('displays a container that holds some sassy text to the user', () => {
    render(<MockWeatherDetails />);
    expect(screen.getByTestId(/rude-container/i)).toBeInTheDocument();
  });
});
