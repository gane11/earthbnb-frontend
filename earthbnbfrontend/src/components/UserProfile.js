import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getAllUsers } from "../store/actions/users"
import { getSavedHomes } from "../store/actions/savedHomesAction"
import './UserProfile.css'
import alex from './images/0.jpg'
import ProfileCard from './ProfileCard'



const UserProfile = ({users, getAllUsers, savedHomes, getSavedHomes}) => {
    const { id } = useParams();
    const history = useHistory()
    let userId = localStorage.getItem('userId')

    if(!userId) {
        history.push('/')
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    let empety = false
    if (savedHomes.length === 0) {
        empety = true
    }



    useEffect(() => {
        getSavedHomes(id)
    }, [id])

    

    return (
        <>
        <Header/>
        <div className="profile-main">
        <div className="user-profile__container">
            <div className="profile-picture__container">
            <img src={alex} className="profile-picture " /> 
            </div>  
            <h1 className="reservation-header">Your Reservations:</h1>
            <div className="homes__container">
                {empety ? (
                    <>
                    <div className="no-homes">
                        <h1>{`You don't have any reservations yet :( `}</h1>
                    </div>
                    <div className="no-homes">

                            <h1>{`Search for homes in Miami, San Francisco, New York, Los Angeles or Austin`}</h1>
                        </div>
                    </>
                    ): (
                        null
                )}
                {savedHomes.map((savedHome) => {
                    return (
                        <ProfileCard savedHome={savedHome}/>
                    )
                })}
            </div>          
        </div>
            </div>
        <Footer/>
        </>
    )

}


const UserProfileContainer = () => {
    const users = useSelector((state) => Object.values(state.users))
    const savedHomes = useSelector((state) => Object.values(state.savedHomes))
    const dispatch = useDispatch()
    return (
        <UserProfile 
            users={users}
            getAllUsers={() => dispatch(getAllUsers())}
            savedHomes={savedHomes}
            getSavedHomes={(userId) => dispatch(getSavedHomes(userId))}
        />
    )
}


export default UserProfileContainer