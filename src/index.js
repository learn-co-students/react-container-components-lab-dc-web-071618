import React from "react";
import ReactDOM from "react-dom";

import LatestMovieReviewsContainer from "./components/LatestMovieReviewsContainer";
import SearchableMovieReviewsContainer from "./components/SearchableMovieReviewsContainer";

ReactDOM.render(
  <div className="app">
    <div class="row">
      <div className="column">
        <SearchableMovieReviewsContainer />
      </div>
      <div className="column">
        <LatestMovieReviewsContainer />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
