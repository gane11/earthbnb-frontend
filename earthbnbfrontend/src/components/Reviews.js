import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from '../store/actions/reviews'

const Reviews = ({getAllReviews,reviews }) => {
  const { id } = useParams();
  useEffect(() => {
    getAllReviews(id)
  }, [id])
  const homeId = Number.parseInt(id);

  console.log(reviews)

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

const ReviewsContainer = () => {
  const reviews = useSelector((state) => Object.values(state.reviews))
  const dispatch = useDispatch()
  return (
    <Reviews
      reviews={reviews}
      getAllReviews={(id) => dispatch(getAllReviews(id))}
    />
  )
}

export default ReviewsContainer
