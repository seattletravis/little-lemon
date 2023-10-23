import Image from '../images/lemon dessert.jpg';
import {Link} from 'react-router-dom';


export default function Confirmation() {
  return (
    <div className='formDiv'>
    <header className="confirmationHeader">
      <img src={Image} alt="Lemon Desert"></img>
      <section>
        <h1>Your Reservation is Confirmed!</h1>
        <h3>We look forward to your visit.</h3>
        <h3>Thanks!</h3>
      </section>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/">
          <button className='reservationButton'>Back to Home</button>
        </Link>
      </section>
    </header>
    </div>
  );
}