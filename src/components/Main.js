import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";
import AboutPage from "../pages/AboutPage"


function Main() {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchData = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };


    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = {availableTimes:  fetchData(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    function updateTimes(state, date) {
        return {availableTimes: fetchData(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    console.log(initializeTimes)

    return(
        <main>
            <Routes>
                <Route exact path="/" element={<Header />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/menu" element={<Header />} />
                <Route path="/reservations" element={<Bookings availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route exact path="/order" element={<Header />} />
                <Route exact path="/login" element={<Header />} />

                <Route path="/confirmation" element={<ConfirmedBooking/> } />


            </Routes>
        </main>


    )
}

export default Main;