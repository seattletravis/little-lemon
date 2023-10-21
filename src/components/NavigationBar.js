import React from 'react';

//style
import "../App.css"

function NavigationBar({title}){

  const menuItems = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'About'},
    {id: 3, title: 'Menu'},
    {id: 4, title: 'Reservations'},
    {id: 5, title: 'Order Online'},
    {id: 5, title: 'Login'},
  ]

return(
      <nav>
          <ul>
            <h1>Little Lemon</h1>
            {menuItems.map(menu => (
              <li key={menu.id} className='navButtons'>{menu.title}</li>
            ))}
          </ul>

      </nav>
  )
}

export default NavigationBar;