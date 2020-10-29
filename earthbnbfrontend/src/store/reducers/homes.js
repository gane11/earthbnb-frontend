import merge from "lodash/merge";
import { LOAD } from "../actions/homes";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD: {
      const homes = action.homes.map((home) => ({[home.id]: home}));
      return merge({}, state, ...homes)
    }

    default:
      return state
  }
}