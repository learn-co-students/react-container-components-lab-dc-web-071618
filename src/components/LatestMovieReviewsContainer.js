import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: {}
    };
  }

  componentDidMount = () => {
    this.fetchLatestReviews();
  };

  fetchLatestReviews = () => {
    fetch(URL)
      .then(r => r.json())
      .then(json => {
        this.setState({
          reviews: json
        });
      });
  };

  render() {
    // debugger;
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        {!!this.state.reviews.results &&
          this.state.reviews.results.map(review => (
            <MovieReviews review={review} />
          ))}
      </div>
    );
  }
}
// Code LatestMovieReviewsContainer Here
