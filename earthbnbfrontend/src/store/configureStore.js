import authentication from './reducers/authentication';
import homes from './reducers/homes'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import currentHome from './reducers/currentHome'
import reviews from './reducers/reviews'
import users from './reducers/users'
import searchValue from './reducers/searchValueReducer'
import createReview from './reducers/createReviewReducer'


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ authentication, homes, currentHome, reviews, users, searchValue, createReview});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk))
  )
}

export default configureStore;