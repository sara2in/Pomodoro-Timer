import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Strong from './Strong'

beforeEach(() => {
  render(<Strong />);
});

test('Verify photo is there',() => {
  const image = screen.getByAltText('Arnold');
  expect(image).toBeInTheDocument()
 });

test('What to verify that the pushup textbox takes numbers', async () => {
  userEvent.click(screen.getByTestId('pushups'));
  await userEvent.type(100)
  expect().toBeInTheDocument()
 });

  test('What to verify that the timer textbox takes numbers', async () => {
    
    userEvent.click(screen.getByTestId('time'));
  await userEvent.type(60)
  expect().toBeInTheDocument() 
 });

//  test('When submit button is click data is stored', async () => {
//   userEvent.click(screen.getByRole('button'));
//  });

