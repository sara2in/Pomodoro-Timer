import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Smart from './Smart'

beforeEach(() => {
    render(<Smart />);
  });

  test('Verify photo is there',() => {
    const image = screen.getByAltText('Arnold-Cigar');
    expect(image).toBeInTheDocument()
   });

   test('There is an h1 that gives you an order',() => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
   });
  
  test('There is an href back to the welcome page',() => {
    expect(screen.getByRole('link')).toBeInTheDocument();
   });
  
   test('Verify that there is a start button', () => {
    expect(screen.getByText('Start')).toBeInTheDocument
   })