import { baseUrl } from "../../config";

export const CREATE_REVIEW = "CREATE_REVIEW"


export const createReview = (review) => async (dispatch) => {
    try {
        const res = await fetch(`${baseUrl}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(review)
        })

        if (res.ok) {
            const data = await res.json();
            dispatch({
                type: CREATE_REVIEW,

            })

        }
    } catch (error) {
        console.log(error)
    }
}
