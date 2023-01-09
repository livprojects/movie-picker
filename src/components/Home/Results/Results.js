import React from "react";
import PropTypes from "prop-types";

function Results({ moviesList }) {
  return (
    <span>
      {moviesList.map((result, index) => (
        <span key={index}> {result.name} </span>
      ))}
    </span>
  );
}

Results.propTypes = {
  moviesList: PropTypes.array,
};

export default Results;
