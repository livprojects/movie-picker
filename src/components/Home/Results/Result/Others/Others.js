import React from "react";
import PropTypes from "prop-types";

function Others({ handleMoreDetails, movieId, similarMovies, alternativeTitles }) {
  // const [additionalInfo, setAdditionalInfo] = useState();

  // getMoreDetails = () => {
  //   // Remplacer le hook appelé par une autre requête
  //   setAdditionalInfo = useMovieDetails();
  // };
  const isNullUndefinedOrEmpty = (array) => {
    return array === null || array === undefined || array.length > 0;
  };

  const areMovies =
    
    isNullUndefinedOrEmpty(similarMovies);
  const areTitles =
    
    isNullUndefinedOrEmpty(alternativeTitles);

  const handleOnClick = () => {
    handleMoreDetails(movieId);
  };


  return (
    // Alternative titles
    // Providers
    // Similar movies (titles)
    <div>
      <span>Films similaires : </span>
      <button onClick={handleOnClick}>More</button>
      <details>
        <summary>
          {areMovies &&
            similarMovies.map((elem) => (
              <span key={elem}>{elem}</span>
            ))}

          {areTitles &&
            alternativeTitles.map((elem) => (
              <span key={elem}>{elem}</span>
            ))}
        </summary>
      </details>
    </div>
  );
}

Others.propTypes = {
  movieId: PropTypes.number,
  handleMoreDetails: PropTypes.func,
  similarMovies: PropTypes.array,
  alternativeTitles: PropTypes.array
};

export default Others;
