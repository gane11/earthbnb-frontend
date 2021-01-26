import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../store/actions/authentication'
import { Redirect } from 'react-router-dom';


//material ui
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//material ui


const LoginPanel = (props)  => {
  const classes = useStyles()
  const [email, setEmail] = useState("demo@dftm.com")
  const [password, setPassword] = useState('demo123');
  const dispatch = useDispatch()

  const token = useSelector(store => store.authentication.token)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(email,password))
  }

  const signInDemoUser = async (e) => {
    e.preventDefault()
    dispatch(login("demo@dftm.com", "demo123"))
  }
  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  // const handleClik = (e) => {
  //   e.preventDefault()
  //   return <Redirect to="/sign-up"/>
  // }
  
  if(token) {
    return <Redirect to="/" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            color="secondary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={updatePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            onClick={signInDemoUser}
          >
            Demo User
          </Button>
          <Grid container>
            <Grid item>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClik}
                > Sign Up
                </Button> */}
              <Link href="/sign-up" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginPanel
