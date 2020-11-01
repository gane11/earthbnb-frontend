import React from 'react' 
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({home}) => {
  return (
    <>
    <NavLink to={`/homes/${home.id}`}>
    <div className="card"> 
      <img src={home.image} alt=""></img>
      <div className="card__info">
        <h2>{home.name}</h2>
        <h4>{home.description}</h4>
        <h3>{`$${home.price}`}</h3>
      </div>
    </div>
    </NavLink>
    </>
      
  )
}

export default Card
