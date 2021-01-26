import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews , deleteReview } from '../store/actions/reviews'
import "./Reviews.css"
import { Button } from "@material-ui/core";
import { createReview } from '../store/actions/createReviewAction'
import { clearAllReviews } from "../store/reducers/reviews"

const Reviews = ({homeId, reviews, getAllReviews, users}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  let token = localStorage.getItem('TOKEN_KEY')
  let userId = 1

    const [addReview, setAddReview] = useState(false)
  const [description, setDescription] = useState('')


  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setAddReview(false)
  }

  const addReviewButton = async (e) => {

    e.preventDefault()
    if (token) {
      const payload = {
        description,
        userId,
        homeId
      }
      await dispatch(createReview(payload))
      getAllReviews(homeId)
      setAddReview(false)

    } else {
      history.push('/login')
    }

  }

  const handleClikc = () => {
    setAddReview(!addReview)
  }

  const onDelete = async (id) => {
    await dispatch(deleteReview(id))
    getAllReviews(homeId)
  };
  
useEffect(() => {
  dispatch(clearAllReviews())
  getAllReviews(homeId)
},[homeId, dispatch])



  if(!reviews) return null
  return (
    <>
    <div className="add-review__button">
      <Button
        href="#move-here"
        onClick={handleClikc}
        fullWidth
        variant="contained"
        color="secondary"
        className="add-review__button"
      >
        Add Review
          </Button>
    </div>


      <div className='review__section'>
        {reviews.length > 0 ? 
        (reviews.map((review) => {
          if(review.homeId === homeId) {

          return (
          <>
            <div className="review__container">
              <div>
                <h2>{users[review.userId].firstName}</h2>
              </div>
              <div>
                {review.description}
                </div>
            {review.userId === userId ? (
            <div className="delete-review__button" >
            <Button variant="contained" color="secondary" onClick={() => onDelete(review.id)} >
              Delete
            </Button>
                </div>
            ): (
              null
            )}
            </div >
          </>
          )
        }})
        ) : (
          <h2 className="no-reviews">No reviews (yet)</h2>
        )}
        {/* <div>{reviewsObj.description}</div> */}
      </div>
      <div id="move-here">
    {addReview ? (
      <form onSubmit={addReviewButton}>
            <div >
          <textarea required onChange={updateDescription} className="review-input"  cols="5" rows="5" maxlength="150"></textarea>
        </div>
        <div className="button__container">
              <div className="cancel-button">
                <Button variant="contained" color="secondary" onClick={handleCancel}
                >X</Button>
              </div>
        <div className="post-button">
          <Button type="submit" variant="contained" color="secondary"
          >Post</Button>
        </div>

        </div>
      </form>
    ) : (
        null
      )}
      </div>
    <div>
    </div>
    </>
  )
}


export const ReviewContainer = ({homeId, users}) => {
  const reviews = useSelector((state) => Object.values(state.reviews))
  const dispatch = useDispatch()
  return (
    <Reviews
      reviews={reviews}
      getAllReviews={(id) => dispatch(getAllReviews(id))}
      homeId={homeId}
      users={users}
    />
  );
}



export default ReviewContainer