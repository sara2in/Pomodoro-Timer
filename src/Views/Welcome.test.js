import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App'

beforeEach(() => {
    render(<App />);
  });

  test('Verify h1 is there',() => {
    expect(screen.getByText('The Pomodoro Timer')).toBeInTheDocument();
   });

// test('When submit button is click data is stored', async () => {
//     userEvent.click(screen.getByRole('button'));
//    });