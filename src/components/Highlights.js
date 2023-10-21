import { Link } from 'react-router-dom'

//styles
import "../App.css"

function Highlights() {
  return (
    <div className='highlightContainer'>
      <div className='highlightTop'>
        <h2>This weeks specials!</h2>
        <Link to="/order">
          <button className='yellowButton'>Online Menu</button>
        </Link>
      </div>
      <div className='highlightBottom'>
        <div className='highlightCard'>
          <img src="" alt="" />

          <div className='price'><h3>Greek salad</h3>
          <h3>$12.99</h3></div>
          <p>The famouse greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
        <div className='highlightCard'>
          <img src="" alt="" />
          <div className='price'><h3>Bruchetta</h3><h3>$5.99</h3></div>
          <p>Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
        <div className='highlightCard'>
          <img src="" alt="" />
          <div className='price'><h3>Lemon Dessert</h3><h3>$5.00</h3></div>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
      </div>
    </div>
  )
}

export default Highlights