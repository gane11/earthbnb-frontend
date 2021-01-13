import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from '../store/actions/reviews'

const Reviews = ({getAllReviews,reviews , homeId }) => {
  // const { id } = useParams();
  useEffect(() => {
    getAllReviews(homeId)
  }, [homeId])

  console.log(homeId)
  // const homeId = Number.parseInt(id);


  if(!reviews) return null
  return (
    <div>
      <div className='review__section'>
        {reviews.map((review) => {
          return (
          <>
            <p>review:</p>
            <div>{review.description}</div>
            <p>rating:</p>
            <div>{review.rating}</div>
          </>
          )
        })}
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
