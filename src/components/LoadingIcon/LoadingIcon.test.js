import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingIcon from './LoadingIcon';

describe('LoadingIcon', () => {
  test('render', () => {
    render(<LoadingIcon />);

    const loadingImg = screen.getByAltText(/loading/i);
    expect(loadingImg).toBeInTheDocument();
  });
});
