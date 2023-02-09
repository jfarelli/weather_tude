import Form from './Form';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Form', () => {
  test('should change input value onChange', () => {
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

  test('should call searchLocation function on keyDown', () => {
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
