import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  searchFetch() {
    fetch(URL + "&query=" + `${this.state.searchTerm}`)
      .then(r => r.json())
      .then(json =>
        this.setState({
          reviews: json
        })
      );
  }

  searchHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.searchFetch();
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" onChange={e => this.searchHandler(e)} />
        <h1>Searchable Movie Review</h1>
        {!!this.state.reviews.results &&
          this.state.reviews.results.map(review => (
            <MovieReviews review={review} />
          ))}
      </div>
    );
  }
}
