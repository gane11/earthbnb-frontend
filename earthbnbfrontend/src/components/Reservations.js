import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import './Reservations.css'

const Reservations = ({home}) =>{

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [numGuests, setNumGuests] = useState(2)

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      checkIn,
      checkOut,
      numGuests
    };
  }
  console.log('alex')

  return (
   <>
    <div className="reservation_container">
      <h2>{`${home.price}/night`}</h2>
      <form onSubmit={submitHandler}>
        <p>CHECK-IN</p>
        <input onChange={updateProperty(setCheckIn)} type="date"></input>
        <p>CHECK-OUT</p>
        <input onChange={updateProperty(setCheckOut)} type="date"></input>
        <p>GUESTS</p>
        {/* <label for="num_guests">GUESTS</label> */}
        <select onChange={updateProperty(setNumGuests)} name="num_guests" id="num_guests">
          <option value="num_1">1</option>
          <option value="num_1">2</option>
          <option value="num_1">3</option>
          <option value="num_1">4</option>
          <option value="num_1">5</option>
        </select>
        <p></p>
        <Button type="submit" variant="contained" color="secondary"
        >Check avaliability</Button>
      </form>
    </div>
  </>
  )
}



export default Reservations