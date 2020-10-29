import authentication from './reducers/authentication';
import homes from './reducers/homes'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import currentHome from './reducers/currentHome'


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ authentication, homes, currentHome});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk))
  )
}

export default configureStore;