import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Button component tests', () => {
  test('renders Button component ', () => {
    render(<Button />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getAllByRole('button')).toBeInTheDocument;
  });

  test('It match with snapshot', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
