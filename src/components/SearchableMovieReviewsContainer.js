import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f98593a095b44546bf4073744b540da0&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            reviews: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (searchTerm) => {
        // console.log(searchTerm);
        const slugifiedSearchTerm = searchTerm.split(' ').join('-').toLowerCase()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${slugifiedSearchTerm}`)
        .then(res => res.json())
        .then(json => {
            debugger
            this.setState({
            reviews: json.results
        })
    })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit(this.state.searchTerm)}}>
                    <input name="searchTerm" onChange={this.handleChange} type="text"/>
                    <input type="submit"/>
                </form>
                <div>
                   { this.state.reviews ? <MovieReviews reviews={this.state.reviews}/> : ''}
                </div>
            </div>
        )
    }
}