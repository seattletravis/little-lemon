import { Link } from 'react-router-dom'
import lemonDessert from "../images/lemon dessert.jpg"
import bruchetta from "../images/bruchetta.svg"
import salad from "../images/greek salad.jpg"

//styles
import "../App.css"

function Highlights() {
  return (
    <div className='highlightContainer'>
      <div className='highlightTop'>
        <h2 className='highlightTitle'>This weeks specials!</h2>
        <Link to="/order">
          <button className='yellowButton'>Online Menu</button>
        </Link>
      </div>
      <div className='highlightBottom'>
        <div className='highlightCard'>
          <img src={salad} alt="" />

          <div className='price'><h3>Greek salad</h3>
          <h3>$12.99</h3></div>
          <p>The famouse greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <Link className="link" to="/order">Order a delivery</Link>
        </div>
        <div className='highlightCard'>
          <img src={bruchetta} alt="" />
          <div className='price'><h3>Bruchetta</h3><h3>$5.99</h3></div>
          <p>Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <Link className="link" to="/order">Order a delivery</Link>
        </div>
        <div className='highlightCard'>
          <img src={lemonDessert} alt="" />
          <div className='price'><h3>Lemon Dessert</h3><h3>$5.00</h3></div>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <Link className="link" to="/order">Order a delivery</Link>
        </div>
      </div>
    </div>
  )
}

export default Highlights