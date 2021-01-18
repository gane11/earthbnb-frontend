import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {reserve} from '../store/actions/reserveAction'
import './Reservations.css'

const Reservations = ({home}) =>{
  let token = localStorage.getItem('TOKEN_KEY')
  const history = useHistory();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [homePrice, setHomePrice] = useState(home.price)
  const [numPeople, setNumPeople] = useState(2)
  let homeId = home.id
  let userId = 1

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(token) {
      const payload = {
        homeId,
        userId,
        numPeople,
        startDate,
        endDate,
      }
      dispatch(reserve(payload))

    } else {
      history.push('/login')
    }
  }

  // const updateProperty = (callback) => (e) => {
  //   callback(e.target.value)
  //   setHomePrice(diffDays * home.price)

  // }

  const updateStartDate = (e) => {
    setStartDate(e.value)
    setHomePrice(diffDays * home.price)
  }

  const updateEndDate = (e) => {
    setEndDate(e.value)

  }

  const updateNumPeople = (e) => {
    setNumPeople(e.value)
  }

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));




  return (
   <>
    <div className="reservation_container">
      <form onSubmit={handleSubmit}>
      <h2>{`${home.price}/night`}</h2>
        <h4>CHECK-IN</h4>
        <input onChange={updateStartDate()} type="date"></input>
        <h4>CHECK-OUT</h4>
        <input onChange={updateEndDate()} type="date"></input>
        <h4>GUESTS</h4>
        {/* <label for="num_guests">GUESTS</label> */}
        <select onChange={updateNumPeople()} name="num_guests" id="num_guests">
          <option value="num_1">1</option>
          <option value="num_1">2</option>
          <option value="num_1">3</option>
          <option value="num_1">4</option>
          <option value="num_1">5</option>
        </select>
        <h3>Price: $ {homePrice}</h3>
        <Button type="submit" variant="contained" color="secondary"
        >Check avaliability</Button>
      </form>
    </div>
  </>
  )
}



export default Reservations