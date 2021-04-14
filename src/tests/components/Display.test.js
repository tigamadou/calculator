import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../../components/Display';

describe('Display compoent tests', () => {
  test('It renders Display component with the text 0', () => {
    render(<Display />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('0')).toBeInTheDocument;
  });
});
