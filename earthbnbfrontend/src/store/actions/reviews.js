import { baseUrl } from "../../config";

export const LOAD_REVIEWS = "LOAD_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW"

export const loadReviews = (reviews) => ({ type: LOAD_REVIEWS, reviews });

export const getAllReviews = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/homes/${id}/reviews`)

  if (response.ok) {
    const {reviews} = await response.json()
    dispatch(loadReviews(reviews))
  }

}

export const deleteReview = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json()
        return dispatch({
          type: DELETE_REVIEW,
          id: data.id
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}