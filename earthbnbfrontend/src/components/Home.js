import React,{ useState, useEffect } from 'react' 
import {getAllHomes} from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, Redirect, useHistory, Switch  } from 'react-router-dom';
import { Route } from 'react-router-dom';

import miamiMansion1 from './images/miamiMansion1.jpg'
import HomeDetail from './HomeDetail'



const Home = ({getAllHomes, home, loginButtonHandler, signUpButtonHandler }) => {
  useEffect(()=> {
    getAllHomes();
  },[])
  const {id} = useParams();
  const homeId = Number.parseInt(id);

  if(!home) return null

  return (
    <main>
      <button
        onClick={loginButtonHandler}
        >Login</button>
      <button
        onClick={signUpButtonHandler}
        >Sign Up</button>
      <nav>
        {home.map((home)=> {
          return (
            <NavLink key={home.id} to={`/homes/${home.id}`}>
              <div
                className={
                  homeId === home.id
                  ? "nav-entery is-selected"
                  : "nav-entry"
                }
              ></div>
                <div 
                  className="nav-entry-image"
                  style={{
                    backgroundImage: `url('${miamiMansion1}')`
                  }}
                  ></div>
                  <div>
                    <div className="primary-text">{home.name}</div>
                  </div>
            </NavLink>
          )
        })}
      </nav>
        <Switch>
          <Route
            exact={true}
            path="/homes/:id"
            render={(props)=> <HomeDetail {...props}/>}
          />
          {/* <Redirect to="/"/> */}
        </Switch>
    </main>
  )
}

const HomeContainer = () => {
  const home = useSelector((state) => Object.values(state.homes))
  const dispatch = useDispatch()
  const history = useHistory()
  const signUpButtonHandler =(e) => {
    e.preventDefault()
    history.push('/sign-up')
  }
  const loginButtonHandler = (e) => {
    e.preventDefault()
    history.push('/login')
  }
  return (
    <Home
      signUpButtonHandler={signUpButtonHandler}
      loginButtonHandler={loginButtonHandler}
      home={home}
      getAllHomes={()=> dispatch(getAllHomes())}
    />
  )
}

export default HomeContainer
