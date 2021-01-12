import merge from "lodash/merge";
import { LOAD_USERS } from "../actions/reviews";

export default function reducer(state = {}, action) {

    switch (action.type) {
        case LOAD_USERS: {
            const users = action.users.map((user) => ({ [user.id]: user }));
            return merge({}, state, ...users)
        }

        default:
            return state
    }
}