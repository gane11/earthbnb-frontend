import React, {useState}from 'react'
import './Header.css'
import DatePicker from './DatePicker'
import {useHistory,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../store/actions/authentication'
// import LanguageIcon from "@material-ui/icons/Language";
import InputBase from '@material-ui/core/InputBase';
// import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { DateRangePicker } from "react-date-range";



const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ loginButtonHandler, signUpButtonHandler}) => {
  const [searchValue, setSearchValue] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const dispatch = useDispatch()



  const updateSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const logOutButtonHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }


  const token = useSelector(store => store.authentication.token)
  const classes = useStyles();
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className='header__center'>
        <div className={classes.search}>
          <InputBase
            placeholder="Where are you going?"
            onChange={updateSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className="date_picker">
          {showDatePicker && <DatePicker searchValue={searchValue}/>}
          <Button color="secondary"
          onClick={() =>setShowDatePicker(!showDatePicker)}
          >Choose Date</Button>
      </div>
      </div>
      {token 
        ? <div className='header__right'> 
          <p className="welcome_letters">Welcome</p>
          <Button variant="contained" color="secondary"
            onClick={logOutButtonHandler}
          >LogOut</Button>
         </div>
        : <div className='header__right'>
          <Button variant="contained" color="secondary"
            onClick={loginButtonHandler}
          >Login</Button>
          <Button variant="contained" color="secondary"
            onClick={signUpButtonHandler}
          >Sign Up</Button>
        </div>
      }
    </div>
  )
}


const HeaderContainer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const logOutButtonHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }
  const signUpButtonHandler = (e) => {
    e.preventDefault()
    history.push('/sign-up')
  }
  const loginButtonHandler = (e) => {
    e.preventDefault()
    history.push('/login')
  }
  return (
    <Header
      signUpButtonHandler={signUpButtonHandler}
      loginButtonHandler={loginButtonHandler}
      logOutButtonHandler={logOutButtonHandler}
    />
  )
}

export default HeaderContainer