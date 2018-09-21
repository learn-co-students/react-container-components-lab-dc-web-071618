import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchSomeReviews();
  };

  fetchSomeReviews = () => {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${
        this.state.searchTerm
      }`
    )
      .then(r => r.json())
      .then(json => {
        this.setState({
          reviews: json.results,
          searchTerm: ""
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews</h2>
        <form className="ui action input" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="ui input"
            placeholder="search"
            onChange={this.handleChange}
          />
          <button className="ui button">Search for a review</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
