import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import App from '../App'

beforeEach(() => {
    render(<App />);
  });

  test('There is an h1 that describes the app',() => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
   });

   test('There is an h3 that asks the user a question',() => {
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
   });

   test('There is a button for a strong view',() => {
    expect(screen.getByRole('button', {name: "Strong"})).toBeInTheDocument();
   });

   test('There is a button for a smart view',() => {
    expect(screen.getByRole('button', {name: "Smart"})).toBeInTheDocument();
  });
    test('Button takes me to Strong page',() => {
    userEvent.click(screen.getByText('Strong'));
    expect(screen.getByText('Get to the ground, now!')).toBeInTheDocument();
   });


