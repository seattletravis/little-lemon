import BookingForm from "../components/BookingForm"
// import Heading from '../sections/reservePages/Heading';
// import ReservationForm from '../sections/reservePages/BookingForm';
import {useReducer} from 'react';
import {fetchAPI} from '../components/BookingsAPI'


//styles
import "./BookingPage.css"

function BookingPage() {

  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className='flex'>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </div>
  )
}

export default BookingPage;
