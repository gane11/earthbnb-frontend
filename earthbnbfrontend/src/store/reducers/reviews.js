import merge from "lodash/merge";
import { LOAD_REVIEWS, DELETE_REVIEW } from "../actions/reviews";

const CLEAR_REVIEWS = 'CLEAR_REVIEWS';

export const clearAllReviews = () => ({
  type: CLEAR_REVIEWS,
});

export default function reducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_REVIEWS: {
      let reviews = action.reviews.map((review) => ({ [review.id]: review }));
      return merge({}, state, ...reviews)
    }

    case DELETE_REVIEW: {

      delete state[action.id]
    }

    case CLEAR_REVIEWS: {
      return {};
    }
    default:
      return state
  }
}