import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

const MockFormDetails = () => {
  const setCityName = jest.fn();
  const searchLocation = jest.fn();
  return <Form setCityName={setCityName} searchLocation={searchLocation} />;
};

describe('Form', () => {
  test('render', () => {
    render(<MockFormDetails />);
    const inputElement = screen.getByPlaceholderText(/enter city name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('Should have a label with helpful text', () => {
    render(<MockFormDetails />);
    const labelElement = screen.getByRole(/none/i);
    expect(labelElement).toBeInTheDocument();
  });
});
