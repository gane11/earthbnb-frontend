import { CREATE_REVIEW} from '../actions/createReviewAction'


export default function reducer(state = {}, action) {
    switch (action.type) {
        case CREATE_REVIEW: {
            return {
                ...state,
                id: action.id,
                description: action.description,
                userId: action.userId,
                homeId: action.homeId
            }
        }

        default:
            return state;
    }
}