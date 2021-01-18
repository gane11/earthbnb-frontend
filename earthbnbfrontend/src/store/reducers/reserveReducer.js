import {RESERVE_HOME} from '../actions/reserveAction'


export default function reducer(state = {}, action) {
    switch(action.type) {
        case RESERVE_HOME: {
            return {
                ...state,
                
            }
        }

        default:
            return state;
    }
}