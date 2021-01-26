import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {reserve} from '../store/actions/reserveAction'
import './Reservations.css'
import InputFields from './InputFields'


const Reservations = ({home}) =>{
  let token = localStorage.getItem('TOKEN_KEY')
  const history = useHistory();
  const dispatch = useDispatch();

  const today = new Date()

  let startDate = localStorage.getItem('startDate')
  let endDate = localStorage.getItem('endDate')

  const [homePrice, setHomePrice] = useState(home.price)
  const [numPeople, setNumPeople] = useState(2)
  let homeId = home.id
  let userId = localStorage.getItem('userId')

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
      alert('Thanks!')

    } else {
      history.push('/login')
    }
  }
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(startDate)
  const secondDate = new Date(endDate)

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  
  const updateNumPeople = (e) => {
    setNumPeople(e.target.value)
    console.log(numPeople)
    setHomePrice(diffDays * home.price)
  }






  return (
   <>
    <div className="reservation_container">
      <form onSubmit={handleSubmit}>
      <h2>{`$${home.price} / night`}</h2>
          <InputFields />
          <h3>Guests</h3>
        {/* <label for="num_guests">GUESTS</label> */}
        <select onChange={updateNumPeople} name="num_guests" id="num_guests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h3>Price: $ {homePrice}</h3>
        <Button type="submit" variant="contained" color="secondary"
        >Reserve</Button>
      </form>
    </div>
  </>
  )
}



export default Reservations