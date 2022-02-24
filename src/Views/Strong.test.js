import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Strong from './Strong'

beforeEach(() => {
  render(<Strong />);
});

test('stores pushup values when entered and submited', async () => {
//   const pushUpBox = screen.getByTestId('pushups')
//   await userEvent.type(pushUpBox, 100)
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Pushups Left:')).toBeInTheDocument();
});

// test('stores work time when entered', async () => {
//   const time = screen.getByLabelText('How many push ups are you going to do today?')
//   await userEvent.type(pushUpBox, 100)
//   expect().toEqual(100);
// });
