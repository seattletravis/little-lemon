import ReservationsForm from "../components/ReservationsForm"
// import Heading from '../sections/reservePages/Heading';
// import ReservationForm from '../sections/reservePages/ReservationsForm';
import {useReducer} from 'react';
import {fetchAPI} from '../components/BookingsAPI'


//styles
import "./ReservationsPage.css"

function ReservationsPage() {

  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div>
      <ReservationsForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </div>
  )
}

export default ReservationsPage;
