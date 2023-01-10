import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Others({
  handleMoreDetails,
  movieId,
  similarMovies,
  alternativeTitles,
}) {
  const [useToggle, setToggle] = useState(false);
  const isNullUndefinedOrEmpty = (array) => {
    return array === null || array === undefined || array.length > 0;
  };

  const areMovies = isNullUndefinedOrEmpty(similarMovies);
  const areTitles = isNullUndefinedOrEmpty(alternativeTitles);

  const handleOnClick = () => {
    setToggle(!useToggle);
    handleMoreDetails(movieId);
  };

  return (
    <div className="others">
      <button className="others-button" onClick={handleOnClick}>
        Plus de détails
      </button>
      <div className="others-block">
        {useToggle && (
          <div className="others-map-element">
            <div id="others-alt-titles">Titres alternatifs : </div>
            {areTitles &&
              alternativeTitles.map((elem, index) => {
                return index >= alternativeTitles.length - 1 ? (
                  <span key={elem}>{elem}</span>
                ) : (
                  <>
                    <span key={elem}>{elem}</span>
                    <span> - </span>
                  </>
                );
              })}
          </div>
        )}
      </div>
      <div className="others-block">
        {useToggle && (
          <div className="others-map-element">
            <div id="others-similar-movies">Films similaires :</div>
            {areMovies &&
              similarMovies.map((elem, index) => {
                return index >= alternativeTitles.length - 1 ? (
                  <span key={elem}>{elem}</span>
                ) : (
                  <>
                    <span key={elem}>{elem}</span>
                    <span> - </span>
                  </>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

Others.propTypes = {
  movieId: PropTypes.number,
  handleMoreDetails: PropTypes.func,
  similarMovies: PropTypes.arrayOf(PropTypes.string),
  alternativeTitles: PropTypes.arrayOf(PropTypes.string),
};

export default Others;
