import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from '../store/actions/reviews'
import { getAllUsers } from "../store/actions/users"
import "./Reviews.css"

const Reviews = ({getAllReviews,reviews , homeId , users, getAllUsers }) => {
  // const { id } = useParams();
  // const homeId = Number.parseInt(id);

  useEffect(() => {
    getAllReviews(homeId)
  }, [homeId])

  useEffect(() => {
    getAllUsers()
  }, [])


  if(!reviews) return null
  return (
    <div>
      <div className='review__section'>
        {reviews.length > 0 ? 
        (reviews.map((review) => {
          return (
          <>
            <div className="review__container">
              <div>
                <h2>{users[review.userId].firstName}</h2>
              </div>
              <div>
                {review.description}
                </div>
            </div>
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
  const users = useSelector((state) => Object.values(state.users))
  const dispatch = useDispatch()
  return (
    <Reviews
    homeId={homeId}
      reviews={reviews}
      getAllReviews={(homeId) => dispatch(getAllReviews(homeId))}
      users={users}
      getAllUsers={() => dispatch(getAllUsers())}
    />
  )
}

export default ReviewsContainer
