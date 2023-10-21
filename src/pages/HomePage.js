import React from "react";
import food1 from "../images/food1.avif"
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import Highlights from '../components/Highlights';

//style


function HomePage() {
  return(
    <div>
        <NavigationBar />
        <Header />
        <Highlights />
    </div>
  )
}

export default HomePage;