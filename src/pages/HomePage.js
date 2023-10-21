import React from "react";
import food1 from "../images/food1.avif"
import NavigationBar from '../components/NavigationBar';

//style
import "./HomePage.css"
import Header from '../components/Header';

function HomePage() {
  return(
    <div className='home'>
      <header>
        <NavigationBar />
        <Header />
        {/* <section className='homeSection'>
        <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
        </div>
        <div>
            <img className="image" src={food1} alt='menu item image' />
        </div>
        </section> */}
      </header>
    </div>
  )
}

export default HomePage;