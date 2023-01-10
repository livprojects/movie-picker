import React from "react";
import PropTypes from "prop-types";

function Others({ additionalDetails }) {
  // const [additionalInfo, setAdditionalInfo] = useState();

  // getMoreDetails = () => {
  //   // Remplacer le hook appelé par une autre requête
  //   setAdditionalInfo = useMovieDetails();
  // };
  const isNullUndefinedOrEmpty = (array) => {
    return array === null || array === undefined || array.length > 0;
  };

  const areMovies = isNullUndefinedOrEmpty(additionalDetails.similarMovies);
  const areTitles = isNullUndefinedOrEmpty(additionalDetails.alternativeTitles);

  return (
    // Alternative titles
    // Providers
    // Similar movies (titles)
    <div>
      <span>Films similaires : </span>
      <details>
        <summary>
          {areMovies &&
            additionalDetails.similarMovies.map((elem) => (
              <span key={elem}>{elem}</span>
            ))}

          {areTitles &&
            additionalDetails.alternativeTitles.map((elem) => (
              <span key={elem}>{elem}</span>
            ))}
        </summary>
      </details>
    </div>
  );
}

Others.propTypes = {
  additionalInfo: PropTypes.object,
  movieId: PropTypes.number,
  handleMoreDetails: PropTypes.func,
  additionalDetails: PropTypes.object,
};

export default Others;
