import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

describe('Header component tests', () => {
  test('Header contains Text', () => {
    render(<Header />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Math Magicians')).toBeInTheDocument;
  });
  test('Header should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
