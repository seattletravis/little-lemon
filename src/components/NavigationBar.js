import React from 'react';
import logo from "../images/littlelemon_logo.png"

//style
import "../App.css"
import { Link } from 'react-router-dom';

function NavigationBar(){

  const menuItems = [
    {id: 1, link: '/', title: 'Home'},
    {id: 2, link: '/about', title: 'About'},
    {id: 3, link: '/menu', title: 'Menu'},
    {id: 4, link: '/reservations', title: 'Reservations'},
    {id: 5, link: '/order', title: 'Order Online'},
    {id: 6, link: '/login', title: 'Login'},
  ]

return(
  <div>
      <nav className='navBar'>
          <ul>
            <img className="navLogo" src={logo} alt='little lemon logo'></img>
            {menuItems.map(menu => (
              <Link key={menu.id} to={`${menu.link}`}>
                <li className='navButtons'>{menu.title}</li>
              </Link>
            ))}
          </ul>
      </nav>
    </div>
  )
}

export default NavigationBar;