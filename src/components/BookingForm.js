//styles
import "../App.css"


function BookingForm() {
  return (
    <form>
      <label htmlFor="res-date">Choose Date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder='1'  />
      <label htmlFor="">Occasion</label>
      <select name="" id="">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make your reservation" />

    </form>
  )
}

export default BookingForm;