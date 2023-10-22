import React from "react";
import food1 from "../images/restauranfood.jpg"
import { Link } from 'react-router-dom';



//style
// import "../pages/HomePage.css"
import "../App.css"

function Header() {
    return(
        <header className='header'>
        <section className='headerSection'>
        <div className='headerContainer'>
            <div className='headerLeft'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <Link to="/reservations"><button className='yellowButton'>Reserve a Table</button></Link>
            </div>
            <div className='headerRight'>
                <img className="headerImage" src={food1} alt='menu item image' />
            </div>
        </div>

        </section>
        </header>
    )
}

export default Header;