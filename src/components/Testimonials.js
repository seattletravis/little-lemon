import bgImage from "../images/lemon dessert.jpg"
import image2 from "../images/food1.avif"
import image3 from "../images/restaurant chef B.jpg"
import image4 from "../images/restauranfood.jpg"

//style 
import "../App.css"

function Testimonials() {
  return (
    <>
      <h2 className='testimonialHeader'>What our customers say about us:</h2>
      <div className='testimonials'>
        <div className='testimonialTile'>
          <div>
            <img src={image2} alt="image" />
          </div>
          <div className='testimonialTileText'>
            <h2>5 Stars!</h2>
            <h2>Danny Lovitz</h2>
            <h2>You have to try the Greek Salad</h2>
          </div>
        </div>

        <div className='testimonialTile'>
          <div>
            <img src={image3} alt="image" />
          </div>
          <div className='testimonialTileText'>
            <h2>5 Stars!</h2>
            <h2>Martha Gold</h2>
            <h2>Best in town!!! Great service too!</h2>
          </div>
        </div>

        <div className='testimonialTile'>
          <div>
            <img src={image4} alt="image" />
          </div>
          <div className='testimonialTileText'>
            <h2>5 Stars!</h2>
            <h2>Lucy Towder</h2>
            <h2>We come here to celebrate!</h2>
          </div>
        </div>

        <div className='testimonialTile'>
          <div>
            <img src={bgImage} alt="image" />
          </div>
          <div className='testimonialTileText'>
            <h2>5 Stars!</h2>
            <h2>Bob Hutch</h2>
            <h2>They're so nice and accomodating.</h2>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Testimonials