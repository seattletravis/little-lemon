import food1 from "../images/bruchetta.svg"
import food2 from "../images/lemon dessert.jpg"
import { Link } from 'react-router-dom'

//style
import '../App.css'

function About() {
  return (
    <div className='about'>
      <section className='aboutSection'>
        <div className='aboutContainer'>
          <div className='aboutLeft'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/about"><button className='yellowButton'>About Little Lemon</button></Link>
          </div>
          <div className='aboutRight'>
            <img className="aboutImage1" src={food1} alt='menu item image' />
            <img className="aboutImage2" src={food2} alt='menu item image' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;