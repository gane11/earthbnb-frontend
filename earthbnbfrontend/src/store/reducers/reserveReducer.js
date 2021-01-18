import {RESERVE_HOME} from '../actions/reserveAction'


export default function reducer(state = {}, action) {
    switch(action.type) {
        case RESERVE_HOME: {
            return {
                ...state,
                id: action.id,
                homeId: action.id,
                userId: action.id,
                numPeople: action.numPeople,
                startDate: action.startDate,
                endDate: action.endDate
            }
        }

        default:
            return state;
    }
}