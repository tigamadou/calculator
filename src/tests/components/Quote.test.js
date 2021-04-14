import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../../components/Quote';

describe('Quotes', () => {
  test('renders Quotes component ', () => {
    render(<Quotes />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('William Paul Thurston')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
