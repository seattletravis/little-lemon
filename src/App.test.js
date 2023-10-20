import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

test('renders the Header heading text', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const headingElement = screen.getByAltText("Reserve Table")
  expect(headingElement).toBeInTheDocument()


const reserveButton = screen.getByRole("button")
fireEvent.click(reserveButton)

const headingElementNew = screen.getByText("Choose Date")
expect(headingElementNew).toBeInTheDocument()
});