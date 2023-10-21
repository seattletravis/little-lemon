import React from "react";
import ReservationsForm from "./ReservationsForm";

function Bookings(props){

    return (
        <ReservationsForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Bookings;