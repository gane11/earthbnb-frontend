import merge from "lodash/merge";
import { LOAD_SAVED, DELETE_SAVED } from "../actions/savedHomesAction";

const CLEAR_SAVED= 'CLEAR_SAVED';

export const clearAllSaved = () => ({
    type: CLEAR_SAVED,
});

export default function reducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case LOAD_SAVED: {
            let savedHomes = action.savedHomes.map((savedHome) => ({ [savedHome.id]: savedHome}));
            return merge({}, state, ...savedHomes)
        }

        case DELETE_SAVED: {

            delete state[action.id]
        }

        case CLEAR_SAVED: {
            return {};
        }
        default:
            return state
    }
}