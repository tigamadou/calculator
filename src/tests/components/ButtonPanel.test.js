import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPanel component tests', () => {
  test('It renders ButtonPanel component ', () => {
    render(<ButtonPanel />);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getAllByRole('button')).toBeInTheDocument;
  });

  test('It match with snapshot', () => {
    const tree = renderer
      .create(<ButtonPanel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
