import React, { useState, useEffect }  from 'react';
// import './App.css';
import { BrowserRouter, Switch, Redirect} from "react-router-dom";
import {loadToken} from '../store/actions/authentication';
import {ProtectedRoute, PrivateRoute} from '../util/route-util';
import { useSelector, useDispatch } from "react-redux";
import LoginPanel from './LoginPanel';
import Home from './Home'
import SignUpPanel from "./SignUpPanel"

const App = ({needLogin, loadToken}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(()=> {
    setLoaded(true);
    loadToken();
  },[]);

  if(!loaded) return null;

  return(
    <BrowserRouter>
      <Switch>
        {/* <PrivateRoute
          path="/login"
          exact={true}
          component={LoginPanel}
        /> */}
        <PrivateRoute 
          path="/sign-up"
          exact={true}
          component={SignUpPanel}
        />
        <PrivateRoute
          path='/'
          needLogin={needLogin}
          component={Home}
        />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )

}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={()=> dispatch(loadToken())} />
}

export default AppContainer;