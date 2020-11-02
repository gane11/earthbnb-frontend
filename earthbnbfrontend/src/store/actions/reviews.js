import { baseUrl } from "../../config";

export const LOAD_REVIEWS = "LOAD_REVIEWS";
export const loadReviews = (reviews) => ({ type: LOAD_REVIEWS, reviews });

export const getAllReviews = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/homes/${id}/reviews`)

  if (response.ok) {
    const {reviews} = await response.json()
    dispatch(loadReviews(reviews))
  }

}