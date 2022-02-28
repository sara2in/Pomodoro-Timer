import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Strong from './Strong'

beforeEach(() => {
  render(<Strong />);
});

test('There is an h1 that gives you an order',() => {
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
 });

test('There is an href back to the welcome page',() => {
  expect(screen.getByRole('link')).toBeInTheDocument();
 });

test('Verify photo is there',() => {
  const image = screen.getByAltText('Arnold');
  expect(image).toBeInTheDocument()
 });

 test('There is a text field for pushups',() => {
  expect(screen.getByTestId('pushups', {name: "inputs"})).toBeInTheDocument();
});

 test('There is a submit button ',() => {
  expect(screen.getByRole('button', {name: "Submit"})).toBeInTheDocument();
});


