import React from 'react';
import '@testing-library/jest-dom';
import LoadingIcon from './LoadingIcon';
import { render, screen } from '@testing-library/react';

describe('LoadingIcon component', () => {
  test('LoadingIcon component should render a Header and a loading image', () => {
    render(<LoadingIcon />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  test('LoadingIcon component should render a loading image with the correct class name and source', () => {
    render(<LoadingIcon />);

    expect(screen.getByAltText('loading')).toHaveClass('loading-image');
    expect(screen.getByAltText('loading').getAttribute('src')).toEqual(
      'oval.svg'
    );
  });

  test('LoadingIcon component should render a loading container with the correct class name', () => {
    render(<LoadingIcon />);

    expect(screen.getByTestId('loading-container')).toBeInTheDocument();
    expect(screen.getByTestId('loading-container')).toHaveClass(
      'loading-container'
    );
  });
});
