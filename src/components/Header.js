import React from "react";
import food1 from "../images/food1.avif"

//style
// import "../pages/HomePage.css"
import "../App.css"

function Header() {
    return(
        <header className='header'>
        <section className='headerSection'>
        <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
        </div>
        <div>
            <img className="headerimage" src={food1} alt='menu item image' />
        </div>
        </section>
        </header>
    )
}

export default Header;