import Header from './Header';
import Form from '../Form/Form';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../Form/Form', () => {
  return jest.fn(({ cityName, setCityName, searchLocation }) => {
    return (
      <div>
        <input
          type="text"
          defaultValue={cityName}
          onKeyDown={searchLocation}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter City Name"
        ></input>
      </div>
    );
  });
});

describe('Header', () => {
  test('should display "Weather-Tude" title and the tagline in the Header', () => {
    render(
      <Header
        cityName="Denver"
        setCityName={() => {}}
        searchLocation={() => {}}
      />
    );
    expect(screen.getByText(/weather-/i)).toBeInTheDocument();
    expect(
      screen.getByText(/the imperfect weather app that tells it like it is./i)
    ).toBeInTheDocument();
  });

  test('renders the header with the form element', () => {
    render(
      <Header
        cityName="Denver"
        setCityName={() => {}}
        searchLocation={() => {}}
      />
    );
    expect(Form).toHaveBeenCalled();
  });
});
