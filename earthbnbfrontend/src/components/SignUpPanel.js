import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory  } from 'react-router-dom';
import { createUser } from '../store/actions/authentication'
import { login } from '../store/actions/authentication'

// material-ui

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//material-ui


const LoginPanel = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const token = useSelector(store => store.authentication.token)

  const signInDemoUser = async (e) => {
    e.preventDefault()
    dispatch(login("demo@dftm.com", "demo123"))
    history.push('/')
  }

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
    return <Redirect to="/header" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                type="text"
                value={firstName}
                onChange={updateProperty(setFirstName)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              color="secondary"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                type="text"
                value={lastName}
                onChange={updateProperty(setLastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="text"
                value={email}
                onChange={updateProperty(setEmail)}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                color="secondary"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={updateProperty(setPassword)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                color="secondary"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={updateProperty(setConfirmPassword)}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
            color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              className={classes.submit}
            >
              Sign Up
            </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            className={classes.submit}
            onClick={signInDemoUser}
          >
            Demo User
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
              <Link href="/login" variant="body2" color="secondary">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginPanel