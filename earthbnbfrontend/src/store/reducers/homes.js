import merge from "lodash/merge";
import { LOAD } from "../actions/homes";

const CLEAR_HOMES = 'CLEAR_HOMES';

export const clearAllHomes = () => ({
  type: CLEAR_HOMES,
});


export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD: {
      const homes = action.homes.map((home) => ({[home.id]: home}));
      return merge({}, state, ...homes)
    }

    case CLEAR_HOMES : {
      return {}
    }

    default:
      return state
  }
}