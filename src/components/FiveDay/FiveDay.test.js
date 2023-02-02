import React from 'react';
import FiveDay from './FiveDay';
import mockData from '../../mockData/mockData';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import fiveDayWeather from '../../mockData/fiveDayWeatherData';

afterEach(cleanup);

describe('FiveDay component', () => {
  const data = { name: 'Denver' };
  const fiveDayForecast = fiveDayWeather;

  test('it should display a 5-Day Weather Forecast div', () => {
    render(<FiveDay data={data} fiveDayForecast={fiveDayForecast} />);
    expect(screen.getByTestId(/five-day-div/i)).toBeInTheDocument();
    expect(screen.getByText(/5-day forecast for/i)).toBeInTheDocument();
  });

  test('it should display the 5-day forecast for the given city name', () => {
    render(<FiveDay data={data} fiveDayForecast={fiveDayForecast} />);
    expect(screen.getByText(/denver/i)).toBeInTheDocument();
  });

  test('it should list the days of the week', () => {
    render(<FiveDay data={data} fiveDayForecast={fiveDayForecast} />);
    expect(screen.getByText(/wednesday/i)).toBeInTheDocument();
    expect(screen.getByText(/thursday/i)).toBeInTheDocument();
    expect(screen.getByText(/friday/i)).toBeInTheDocument();
    expect(screen.getByText(/saturday/i)).toBeInTheDocument();
    expect(screen.getByText(/sunday/i)).toBeInTheDocument();
  });

  test('it should format the description with capitalized words', () => {
    render(<FiveDay data={data} fiveDayForecast={fiveDayForecast} />);
    expect(screen.getAllByText(/clear sky/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/overcast clouds/i)[0]).toBeInTheDocument();
  });
});
