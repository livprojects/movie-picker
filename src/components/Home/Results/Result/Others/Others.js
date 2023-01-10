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
        <div className="others-map-element">
          {areTitles &&
            alternativeTitles.map((elem) => <span key={elem}>{elem}</span>)}
        </div>
      </div>
      <div className="others-similar-movies">
        <span>Films similaires :</span>
        <div className="others-map-element">
          {areMovies &&
            similarMovies.map((elem) => <span key={elem}>{elem}</span>)}
        </div>
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
