import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";
import { getAllUsers } from "../store/actions/users"



const UserProfile = ({users, getAllUsers}) => {

    let userId = localStorage.getItem('userId') - 1
    let user
    if (users) {
        user = users[userId]
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
        <Header/>
    <div>{user? 'hello' : null}</div>
        <Footer/>
        </>
    )

}


const UserProfileContainer = () => {
    const users = useSelector((state) => Object.values(state.users))
    const dispatch = useDispatch()
    return (
        <UserProfile 
            users={users}
            getAllUsers={() => dispatch(getAllUsers())}
        />
    )
}


export default UserProfileContainer