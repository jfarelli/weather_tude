import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FiveDay from './FiveDay';
import mockData from '../../mockData/mockData';
import fiveDayForecast from '../../mockData/fiveDayWeatherData';

const MockFiveDayDetails = () => {
  let data = mockData;
  return <FiveDay data={data} fiveDayForecast={fiveDayForecast} />;
};

describe('FiveDay', () => {
  test('Should display a 5-Day Weather Forecast div', () => {
    render(<MockFiveDayDetails />);
    const divElement = screen.getByTestId(/five-day-div/i);
    expect(divElement).toBeInTheDocument();

    const textElement = screen.getByText(/5-day forecast for/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Should display five days ahead', () => {
    render(<MockFiveDayDetails />);
    const day1Element = screen.getByText(/wednesday/i);
    expect(day1Element).toBeInTheDocument();

    const day2Element = screen.getByText(/thursday/i);
    expect(day2Element).toBeInTheDocument();

    const day3Element = screen.getByText(/friday/i);
    expect(day3Element).toBeInTheDocument();

    const day4Element = screen.getByText(/saturday/i);
    expect(day4Element).toBeInTheDocument();

    const day5Element = screen.getByText(/sunday/i);
    expect(day5Element).toBeInTheDocument();
  });
});
