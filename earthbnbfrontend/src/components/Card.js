import React from 'react' 
import './Card.css'
const Card = ({home}) => {
  return (
    <div className="card"> 
      <img src={home.image} alt=""></img>
      <div className="card__info">
        <h2>{home.name}</h2>
        <h4>{home.description}</h4>
        <h3>{home.price}</h3>
      </div>
    </div>
      
  )
}

export default Card
