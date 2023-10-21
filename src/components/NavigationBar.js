import React from 'react';

//style
import "../App.css"
import { Link } from 'react-router-dom';

function NavigationBar({title}){

  const menuItems = [
    {id: 1, link: '', title: 'Home'},
    {id: 2, link: 'about', title: 'About'},
    {id: 3, link: 'menu', title: 'Menu'},
    {id: 4, link: 'reservations', title: 'Reservations'},
    {id: 5, link: 'order', title: 'Order Online'},
    {id: 5, link: 'login', title: 'Login'},
  ]

return(
      <nav>
          <ul>
            <h1>Little Lemon</h1>
            {menuItems.map(menu => (
              <Link to={`${menu.link}`}>
                <li key={menu.id} className='navButtons'>{menu.title}</li>
              </Link>
            ))}
          </ul>

      </nav>
  )
}

export default NavigationBar;