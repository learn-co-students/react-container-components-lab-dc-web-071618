import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(URL + `${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviews => this.setState(
      { reviews: reviews.results }))
  }

  render() {
      return <div className="searchable-movie-reviews">
        <h1>Searchable Movie Reviews</h1>
        <form onSubmit={this.handleSearch}>
          <input value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})}/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
  }
}
