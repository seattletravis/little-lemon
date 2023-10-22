import React from "react";
import food1 from "../images/restauranfood.jpg"
import { Link } from 'react-router-dom';
import NavigationMat from './NavigationMat';
import logo from "../images/small_logo.png"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithubAlt, FaTiktok, FaReddit, FaPinterest, FaSnapchat, FaLinkedin } from 'react-icons/fa'




//style
import "../App.css"

function Footer() {
  return(
    <footer className='footer'>
      <section className='footerSection'>
        <div>
          <img className="navMatLogo" src={logo} alt='little lemon logo'></img>
        </div>
        <div>
          <h1>Navigation</h1>
          <NavigationMat />
        </div>
        <div className='contactInfo'>
          <h1>Contact Information</h1>
          <h4>Little Lemon <br></br>10 lemon lane<br></br> Chicago IL</h4>
          <h4>555-555-5555</h4>
          <h4>adrian@littlelemon.com</h4>
        </div>
        <div className='socialMedia'>
          <h1>Social</h1>
          <div className='socialIcons'>
            <FaFacebook className='grid-item'/>
            <FaTwitter className='grid-item' />
            <FaInstagram className='grid-item' />
            <FaYoutube className='grid-item' />
            <FaTiktok className='grid-item' />
            <FaReddit className='grid-item' />
            <FaPinterest className='grid-item' />
            <FaSnapchat className='grid-item' />
            <FaLinkedin className='grid-item' />
          </div>
        </div>


      </section>
    </footer>
  )
}

export default Footer;