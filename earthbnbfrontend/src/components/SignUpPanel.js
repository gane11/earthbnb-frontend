import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authentication'
import { Redirect } from 'react-router-dom';
import { createUser } from '../store/actions/authentication'


const LoginPanel = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const token = useSelector(store => store.authentication.token)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }
    dispatch(createUser(payload))
  }

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  }

  if (token) {
    return <Redirect to="/" />
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name..."
          value={firstName}
          onChange={updateProperty(setFirstName)}
        />
        <input
          type="text"
          placeholder="Last Name..."
          value={lastName}
          onChange={updateProperty(setLastName)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateProperty(setEmail)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updateProperty(setPassword)}
        />
        <input 
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={updateProperty(setConfirmPassword)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  )
}

export default LoginPanel