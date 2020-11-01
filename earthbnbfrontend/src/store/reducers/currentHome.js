import {SET_CURRENT} from '../actions/currentHome'

export default function reducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT: {
      return action.current.id
    }

    default:
      return state;
  }
}