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
        <div className='specialCard'></div>
        <div className='specialCard'></div>
        <div className='specialCard'></div>
      </div>
    </div>
  )
}

export default Highlights