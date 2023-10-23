import {useState} from 'react';
import qs from 'qs'
import axios from "axios";

function BookingForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      first_name: fName,
      last_name: lName,
      email: email,
      phone_number: tel,
      people: people,
      date: date,
      time: "18:00",
      additional_comments: comments
    }
    console.log(info);

    axios
      .post("http://127.0.0.1:8000/api/book", qs.stringify(info))
      window.location.replace('http://localhost:3000/confirmation');
  };

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
      props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
      setDate(e.target.value);

      var stringify = e.target.value;
      const date = new Date(stringify);

      props.updateTimes(date);

      setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }


  return (
    <div className='bookingPage'>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <div booking Container>
          <div>
            <label htmlFor="firstName">First Name</label> <br></br>
            <input type="text" id="firstName" placeholder="First Name"
            required minLength={2} maxLength={50}
            value={fName}
            onChange={e => setFName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label> <br></br>
            <input type="text" id="lastName" placeholder="Last Name"
            minLength={2} maxLength={50}
            value={lName}
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
            value={tel}
            required minLength={10} maxLength={25}
            onChange={e => setTel(e.target.value)}></input>
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
          <div>
            <label htmlFor="comments">Personal preferences/accommodations</label> <br></br>
            <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments"
            value={comments}
            onChange={e => setComments(e.target.value)}>
            </textarea>
          </div>
          <div>
            <button type="submit" className="action-button">Book Table</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;