import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import LatestMovieReviewsContainer from "./components/LatestMovieReviewsContainer";
import SearchableMovieReviewsContainer from "./components/SearchableMovieReviewsContainer";

ReactDOM.render(
  <div className="app">
    <div>
      <SearchableMovieReviewsContainer />
    </div>
    <div className="ui divider" />
    <div>
      <LatestMovieReviewsContainer />
    </div>
  </div>,
  document.getElementById("root")
);
