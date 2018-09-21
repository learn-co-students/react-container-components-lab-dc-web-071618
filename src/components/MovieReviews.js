// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list ui grid">
      {props.reviews.map(review => (
        <div className="review">
          <div className="ui card">
            <h3 className="header">
              <a href={review.link.url}>{review.headline}</a>
            </h3>
            <p className="sub header">{review.byline}</p>
            {/* <img src={review.multimedia.src} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
