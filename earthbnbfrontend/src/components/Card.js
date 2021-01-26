import React from 'react' 
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({home}) => {
  return (
    <>
      <NavLink to={`/homes/${home.id}`} style={{ textDecoration: 'none' }}>
    <div className="card"> 
      <img src={home.image} alt=""></img>
      <div className="card__info">
        <h2 className='home-detail__link'>{home.name}</h2>
        {/* <h4>{home.description}</h4> */}
        <h3 className='home-detail__link'>{`$${home.price}`}</h3>
      </div>
    </div>
    </NavLink>
    </>
      
  )
}

export default Card
