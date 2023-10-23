import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage"
import MenuPage from '../pages/MenuPage';
import OrderPage from '../pages/OrderPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Confirmation from './Confirmation';
import ReservationsPage from '../pages/BookingPage';




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
            navigate("/confirmation")
        }
    }

    console.log(initializeTimes)

    return(
        <div>
            <main>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/menu" element={<MenuPage />} />
                    <Route path="/reservations" element={<ReservationsPage />} />
                    <Route exact path="/order" element={<OrderPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route path="/confirmation" element={<Confirmation/> } />
                </Routes>
            </main>
        </div>


    )
}

export default Main;