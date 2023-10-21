import { useState } from 'react';

//styles
import "../App.css"


function BookingForm(props) {

  let availableTimes = [
    { id: 1, time: '17:00', available: true },
    { id: 2, time: '18:00', available: true },
    { id: 3, time: '19:00', available: true },
    { id: 4, time: '20:00', available: true },
    { id: 5, time: '21:00', available: true },
    { id: 6, time: '22:00', available: true },
  ]


  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')
  const [submitText, setSubmitText] = useState('Initial')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitText("Thank you")
    props.submitForm(e)
  }



  return (
    <header>
      <section>
        <form  className="flex" onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="res-date">Choose Date</label>
              <input
                onChange={e => setDate(e.target.value)}
                type="date"
                id="res-date"
                value={date}
                />
            </div>
            <div>
              <label htmlFor="res-time">Choose Time</label>
              <select onChange={e => setTime(e.target.value)} id="res-time">
                {availableTimes.map(time => (
                  <option key={time.id}>{time.time}</option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="guests" required>Number of guests</label>
              <input
                onChange={e => setGuests(e.target.value)}
                type="number"
                placeholder='1'
                min="1"
                max="10"
                id="guests"
                value={guests}
                />
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                onChange={e => setOccasion(e.target.value)}
                id="occasion">
                value={occasion}
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <input on={()=> setSubmitText("changed")} type="submit" id="submit" value={submitText} />
            </div>
            <label>{submitText}</label>
          </fieldset>
        </form>
      </section>

    </header>
  )
}

export default BookingForm;