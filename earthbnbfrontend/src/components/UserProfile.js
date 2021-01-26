import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getAllUsers } from "../store/actions/users"
import { getSavedHomes } from "../store/actions/savedHomesAction"
import './UserProfile.css'
import alex from './images/0.jpg'
import ProfileCard from './ProfileCard'



const UserProfile = ({users, getAllUsers, savedHomes, getSavedHomes}) => {
    const { id } = useParams();

    useEffect(() => {
        getAllUsers()
    }, [])

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
            <div className="homes__container">
                <h1>Your Reservations:</h1>
                {savedHomes.length < 0 ? (
                    null
                ): (
                    <>
                    <div className="no-homes">
                        <h1>{`You don't have any reservations yet :( `}</h1>
                    </div>
                    <div className="no-homes">

                            <h1>{`Search for homes in Miami, San Francisco, New York, Los Angeles or Austin`}</h1>
                        </div>
                    </>
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