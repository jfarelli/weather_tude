import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

const MockHeaderDetails = () => {
  return <Header />;
};

describe('Header', () => {
  test('Should display "Weather-Tude" title in the Header', () => {
    render(<MockHeaderDetails />);
    const titleElement = screen.getByText(/weather-/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Should display "Weather-Tude" tag-line in the Header', () => {
    render(<MockHeaderDetails />);
    const textElement = screen.getByText(
      /the imperfect weather app that tells it like it is/i
    );
    expect(textElement).toBeInTheDocument();
  });
});
