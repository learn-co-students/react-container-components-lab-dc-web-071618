// Code MovieReviews Here

import React from "react";

const MoviewReview = movie => {
  // debugger;
  return (
    <ul className="review-list">
      <li className="review">{movie.review.display_title}</li>
      <em>{movie.review.headline}</em>
    </ul>
  );
};

export default MoviewReview;
