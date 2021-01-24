import merge from "lodash/merge";
import { LOAD_REVIEWS } from "../actions/reviews";

export default function reducer(state = {}, action) {
  // Object.freeze(state);
  switch (action.type) {
    case LOAD_REVIEWS: {
      const reviews = action.reviews.map((review) => ({ [review.id]: review }));
      return merge({}, state, ...reviews)
    }

    default:
      return state
  }
}