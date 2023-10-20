import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


test('renders the Header heading text', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const headingElement = screen.getByAltText("Reserve Table")
  expect(headingElement).toBeInTheDocument()


const reserveButton = screen.getByRole("button")
fireEvent.click(reserveButton)

const headingElementNew = screen.getByText("Choose Date")
expect(headingElementNew).toBeInTheDocument()
});

test('Initalize Update Times Testing', ()=> {
  render(<BrowserRouter><App /></BrowserRouter>)
  const reserveButton = screen.getByRole("Button")
  fireEvent.click(reserveButton)

  const testTime = []
})