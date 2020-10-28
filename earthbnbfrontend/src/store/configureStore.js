import authentication from './reducers/authentication';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ authentication});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk))
  )
}

export default configureStore;