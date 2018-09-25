// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    // console.log('props are ', props)
    // debugger
    return (
        <div className="review-list">
            {props.reviews.map(review => <div className="review">
            {review.display_title}
            <ul>
                <li>{review.mpaa_rating}</li>
                <li>{review.byline}</li>
                <li>{review.summary_short}</li>
            </ul>
            {review.multimedia ? <img src={review.multimedia.src}/> : ''}
            </div>)}
        </div>
    )
}

export default MovieReviews