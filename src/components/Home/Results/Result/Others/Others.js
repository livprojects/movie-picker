import React from "react";
import PropTypes from "prop-types";
import { useMovieDetails } from "../../middlewares/customFetchingHooks";

function Others({ movieId }) {
  // const [additionalInfo, setAdditionalInfo] = useState();

  // getMoreDetails = () => {
  //   // Remplacer le hook appelé par une autre requête
  //   setAdditionalInfo = useMovieDetails();
  // };

  return (
    // Alternative titles
    //
    // Similar movies (titles)
    <div></div>
  );
}

Others.propTypes = {
  additionalInfo: PropTypes.object,
};

export default Others;
