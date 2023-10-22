import food1 from "../images/food1.avif"

//style
import '../App.css'

function About() {
  return (
    <div>
      <section className='headerSection'>
        <div className='headerContainer'>
          <div className='headerLeft'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
          </div>
          <div className='headerRight'>
            <img className="headerImage" src={food1} alt='menu item image' />
            <img className="headerImage" src={food1} alt='menu item image' />
          </div>
        </div>

      </section>
    </div>
  )
}

export default About;