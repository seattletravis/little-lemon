import React from "react";
import food1 from "../images/food1.avif"
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import Highlights from '../components/Highlights';
import About from '../components/About'
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

//style


function HomePage() {
  return(
    <div>
        <NavigationBar />
        <Header />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
    </div>
  )
}

export default HomePage;