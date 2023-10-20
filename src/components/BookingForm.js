import { useEffect, useState } from 'react';

//styles
import "../App.css"


function BookingForm() {

  let availableTimes = [
    { time: '17:00', available: true },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
    { time: '20:00', available: true },
    { time: '21:00', available: true },
    { time: '22:00', available: true },
  ]

  const [date, setDate] = useState({})
  const [time, setTime] = useState({})
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(date)
  }

  

  return (
    <form>
      <label htmlFor="res-date">Choose Date</label>
      <input
        onChange={e => setDate(e.target.value)}
        type="date"
        id="res-date"
        required
        value={date}
      />
      <label htmlFor="res-time">Choose Time</label>
      <select onChange={e => setTime(e.target.value)} id="res-time" required>
        {availableTimes.map(time => (
          <option>{time.time}</option>
        ))}
      </select>
      <label htmlFor="guests" required>Number of guests</label>
      <input onChange={e => setGuests(e.target.value)} type="number" placeholder='1' min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select onChange={e => setOccasion(e.target.value)} id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input onSubmit={handleSubmit} type="submit" value="Make your reservation" />
      <button onClick={console.log(date)}>ConsoleLogIt</button>
    </form>
  )
}

export default BookingForm;