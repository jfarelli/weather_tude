import Form from './Form';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Form', () => {
  test('Input value changes on change', () => {
    const setCityName = jest.fn();
    const searchLocation = jest.fn();

    render(
      <Form
        cityName=""
        setCityName={setCityName}
        searchLocation={searchLocation}
      />
    );

    const input = screen.getByPlaceholderText('Enter City Name');
    fireEvent.change(input, { target: { value: 'Denver' } });
    expect(setCityName).toHaveBeenCalledWith('Denver');
  });

  test('searchLocation function is called on keyDown', () => {
    const setCityName = jest.fn();
    const searchLocation = jest.fn();

    render(
      <Form
        cityName=""
        setCityName={setCityName}
        searchLocation={searchLocation}
      />
    );

    const input = screen.getByPlaceholderText('Enter City Name');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(searchLocation).toHaveBeenCalled();
  });
});
