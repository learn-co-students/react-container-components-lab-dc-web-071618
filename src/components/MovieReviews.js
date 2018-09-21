import React from 'react'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews ? reviews.map(review =>
      <div className="review">
        <h3>{review.headline} - {review.byline}</h3>
        <p>{review.summary_short}</p>
      </div>)
      : null }
  </div>
)

export default MovieReviews
