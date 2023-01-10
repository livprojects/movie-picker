import React from "react";
import PropTypes from "prop-types";

function Others({
  handleMoreDetails,
  movieId,
  similarMovies,
  alternativeTitles,
}) {
  const isNullUndefinedOrEmpty = (array) => {
    return array === null || array === undefined || array.length > 0;
  };

  const areMovies = isNullUndefinedOrEmpty(similarMovies);
  const areTitles = isNullUndefinedOrEmpty(alternativeTitles);

  const handleOnClick = () => {
    handleMoreDetails(movieId);
  };

  return (
    <div className="others">
      <button onClick={handleOnClick}>More</button>
      <div className="others-alt-titles">
        <span>Titres alternatifs : </span>
        {areTitles &&
          alternativeTitles.map((elem) => <span key={elem}>{elem}</span>)}
      </div>
      <div className="others-similar-movies">
        {areMovies &&
          similarMovies.map((elem) => <span key={elem}>{elem}</span>)}
      </div>
    </div>
  );
}

Others.propTypes = {
  movieId: PropTypes.number,
  handleMoreDetails: PropTypes.func,
  similarMovies: PropTypes.array,
  alternativeTitles: PropTypes.array,
};

export default Others;
