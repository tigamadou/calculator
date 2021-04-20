import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('App component tests', () => {
  test('renders App component ', () => {
    render(<App />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Let’s do some math!')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
