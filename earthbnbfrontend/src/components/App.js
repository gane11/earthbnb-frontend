import React, { useState, useEffect }  from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {loadToken} from '../store/actions/authentication';
// import {ProtectedRoute, PrivateRoute} from '../util/route-util';
import { useSelector, useDispatch } from "react-redux";
import LoginPanel from './LoginPanel';
import Home from './Home'
import HomeDetail from './HomeDetail'
import SignUpPanel from "./SignUpPanel"
import Map from './Map'
// import LoginWithModal from './LoginWithModal'
import Header from './Header'
import ShowAllHomes from './ShowAllHomes'
import SearchResult from './SearchResults'
import HomeDetailContainer from './HomeDetail';
import UserProfile from './UserProfile'
import My404Component from './My404Component'
import Footer from './Footer'

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
        {/* <PrivateRoute 
          path="/sign-up"
          exact={true}
          component={SignUpPanel}
        /> */}
        {/* <PrivateRoute
          path='/'
          needLogin={needLogin}
          component={Home}
        /> */}
        <Route path="/search"
        component={SearchResult}
        />
        <Route exact path='/'
        component={Home}
        />
        <Route exact path='/homes/:id'>
          <HomeDetailContainer/>
          <Footer />
        </Route>
        <Route
          path='/login'
          component={LoginPanel}
        />
        <Route
          path='/sign-up'
          component={SignUpPanel}
        />
        <Route
          path='/showall'
          component={ShowAllHomes}
        />
        <Route 
          path='/search-result/:searchValue'
          component={SearchResult}
        />
        <Route 
          exact path='/users/:id'
          component={UserProfile}
        />
        <Route path='*' exact={true} component={My404Component} />
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

