import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from '../store/actions/reviews'

const Reviews = ({getAllReviews,reviews , homeId }) => {
  // const { id } = useParams();
  // const homeId = Number.parseInt(id);

  useEffect(() => {
    getAllReviews(homeId)
  }, [homeId])


  if(!reviews) return null
  return (
    <div>
      <div className='review__section'>
        {reviews.length > 0 ? 
        (reviews.map((review) => {
          return (
          <>
            <p>review:</p>
            <div>{review.description}</div>
            <p>rating:</p>
            <div>{review.rating}</div>
          </>
          )
        })
        ) : (
          <h2>No reviews (yet)</h2>
        )}
        {/* <div>{reviewsObj.description}</div> */}
      </div>
    </div>
  )
}

const ReviewsContainer = ({homeId}) => {
  const reviews = useSelector((state) => Object.values(state.reviews))
  const dispatch = useDispatch()
  return (
    <Reviews
    homeId={homeId}
      reviews={reviews}
      getAllReviews={(homeId) => dispatch(getAllReviews(homeId))}
    />
  )
}

export default ReviewsContainer
