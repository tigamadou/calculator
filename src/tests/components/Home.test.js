import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

describe('Home component tests', () => {
  test('It renders Home ', () => {
    render(<Home />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument;
  });
  test('It match with snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
