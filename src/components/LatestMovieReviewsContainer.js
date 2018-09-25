import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }  
    }

    componentDidMount() {
        // console.log('component mounted')
        fetch(`${URL}`).then(res => res.json()).then(json => {
            // console.log(json.results);
            this.setState({
                reviews: json.results
            })
        })
    }

    render() {
        // console.log('in render, this.state.reviews is', this.state.reviews)
        return (
            <div className="latest-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}