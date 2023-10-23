import NavigationBar from '../components/NavigationBar';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import {useReducer} from 'react';
import {fetchAPI} from '../components/BookingsAPI'


function BookingPage() {

    function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <div>
            <NavigationBar />
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
            <Footer />
        </div>
    );
}

export default BookingPage