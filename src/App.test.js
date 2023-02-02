import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios');

describe('App', () => {
  it('renders the header', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter city name');
    expect(input).toBeInTheDocument();
  });

  it('displays the weather details and 5-day forecast', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        main: {
          temp: 72,
        },
        coord: {
          lat: 37.7749,
          lon: -122.4194,
        },
      },
    });

    render(<App />);
    const input = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(input, { target: { value: 'San Francisco' } });

    const loadingIcon = screen.getByText('Loading...');
    expect(loadingIcon).toBeInTheDocument();

    const weatherDetails = await screen.findByText(
      'The current temperature in San Francisco is 72°F.'
    );
    expect(weatherDetails).toBeInTheDocument();

    const fiveDayForecast = screen.getByText('5-Day Forecast');
    expect(fiveDayForecast).toBeInTheDocument();
  });
});
