import React, {useState, useEffect}from 'react'
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
import alexLogo from './images/alexbnblogo.png'
import { getSearchValue } from '../store/actions/searchValueAction';
import { getAllUsers } from "../store/actions/users"
import alex from './images/0.jpg'




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

const Header = ({ loginButtonHandler, signUpButtonHandler, searchValue, getSearchValue, users, getAllUsers}) => {
  const [asearchValue, setSearchValue] = useState('s')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const dispatch = useDispatch()

  let userId = localStorage.getItem('userId') - 1
  let user
  if(users) {
    user = users[userId]
  }

    
  useEffect(() => {
    getAllUsers()
  }, [])

  const updateSearch = (e) => {
    setSearchValue(e.target.value)
    localStorage.removeItem('searchValue')
    localStorage.setItem('searchValue', e.target.value)
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
          src={alexLogo}
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
          {showDatePicker && <DatePicker searchValue={asearchValue} datePicker={showDatePicker}/>}
          <Button color="secondary"
          onClick={() =>setShowDatePicker(!showDatePicker)}
          >Choose Date</Button>
      </div>
      </div>
      {token 
        ? <div className='header__right'> 
          <Link to={`/users/${userId + 1}`} style={{ textDecoration: 'none' , marginRight: '20%'}}>
            <div className="header-picture__container">
            <div>
              <p className="welcome_letters" >{user? `Welcome   ${user.firstName}` : null} </p>
            </div>
            <div className="header-picture__container2">
              <img src={alex} className="header-picture " /> 
            </div>

            </div>
          </Link>
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
  const users = useSelector((state) => Object.values(state.users))

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
  const searchValue = useSelector((state) => state.searchValue)
  return (
    <Header
      users={users}
      getAllUsers={() => dispatch(getAllUsers())}
      signUpButtonHandler={signUpButtonHandler}
      loginButtonHandler={loginButtonHandler}
      logOutButtonHandler={logOutButtonHandler}
      searchValue={searchValue}
      getSearchValue={(searchValue) => dispatch(getSearchValue(searchValue))}
    />
  )
}

export default HeaderContainer