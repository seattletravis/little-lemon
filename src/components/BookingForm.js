import {useState} from 'react';
import qs from 'qs'
import axios from "axios";
import { MdOutlineTableRestaurant } from 'react-icons/md'

function BookingForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      people: people,
      date: date,
      time: "18:00",
      additional_comments: comments
    }


    axios
      .post("http://127.0.0.1:8000/api/book", qs.stringify(info))
      window.location.replace('http://localhost:3000/confirmation');
  };

  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
      props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
      setDate(e.target.value);

      var stringify = e.target.value;
      const date = new Date(stringify);

      props.updateTimes(date);

      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }


  return (
    <div className='loginPage'>
      <h2>Example reservation page. You're info will not be saved and you will not be given a table reservation.</h2>
      <div className='formDiv'>
        <form className="bookingForm" onSubmit={handleSubmit}>
          <div className='bookingPage'>
            <div className='bookingContainer'>
              <h2>reservation page</h2>
              <MdOutlineTableRestaurant className='reserveIcon'/>
              <div>
                <label htmlFor="firstName">First Name</label> <br></br>
                <input type="text" id="firstName" placeholder="First Name"
                required minLength={2} maxLength={50}
                value={firstName}
                onChange={e => setFName(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label> <br></br>
                <input type="text" id="lastName" placeholder="Last Name"
                minLength={2} maxLength={50}
                value={lastName}
                onChange={e => setLName(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="email">Email</label> <br></br>
                <input type="email" id="email" placeholder="Email"
                value={email}
                required minLength={4} maxLength={200}
                onChange={e => setEmail(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label> <br></br>
                <input type="tel" id="phoneNumber" placeholder="(xxx)-xxx-xxxx"
                value={phone}
                required minLength={10} maxLength={25}
                onChange={e => setPhone(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input type="number" id="people" placeholder="Number of People"
                value={people}
                required min={1} max={100}
                onChange={e => setPeople(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input type="date" id="date" required
                value={date}
                onChange={handleDateChange}></input>
              </div>
              <div className='timeOccasion'>
                <div>
                  <label htmlFor="time">Select Time</label> <br></br>
                  <select id="time" required>
                    {finalTime}
                  </select>
                </div>
                <div>
                  <label htmlFor="occasion">Special Occasion</label> <br></br>
                  <select id="occasion"
                  value={occasion}
                  onChange={e => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date Night</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="comments">Personal preferences/accommodations</label> <br></br>
                <textarea  className='occasion' id="comments" rows={8} placeholder="Can I bring my dog?"
                value={comments}
                onChange={e => setComments(e.target.value)}>
                </textarea>
              </div>
              <div>
                <button type="submit" className="reservationButton">Book Table</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;