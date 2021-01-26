import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './ProfileCard.css'
import { NavLink } from 'react-router-dom'
import { getAllHomes } from '../store/actions/homes'

const ProfileCard = ({ savedHome, homes, getAllHomes}) => {
    useEffect(() => {
        getAllHomes();
    }, [])

    return (
        <>
         {homes.map((home) => {
             if(home.id === savedHome.homeId) {
                 return (

            <NavLink to={`/homes/${home.id}`}>
                <div className="card">
                    <img src={home.image} alt=""></img>
                    <div className="card__info">
                        <h2 className='home-detail__link'>{home.name}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3 className='home-detail__link'>{`$${home.price}`}</h3>
                    </div>
                </div>
            </NavLink>
                 )
             }
         })}
        </>

    )
}

const ProfileCardContainer = ({savedHomes}) => {
    const homes = useSelector((state) => Object.values(state.homes))
    const dispatch = useDispatch()
    return (
        <ProfileCard 
            savedHomes={savedHomes}
            homes={homes}
            getAllHomes={() => dispatch(getAllHomes())}
        />
    )
}

export default ProfileCardContainer
