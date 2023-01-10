import React from "react";
import PropTypes from "prop-types";
import Others from "./Others/Others";

function Result({ basicData, handleMoreDetails, additionalDetails }) {
  // const translatedData = useMovieDetails();

  return (
    <>
      <Others
        additionalDetails={additionalDetails}
        handleMoreDetails={handleMoreDetails}
        movieId={basicData.id}
      />
      {/* Info */}
      <span>{basicData.title}</span>
    </>
    // Utiliser translatedData

    // Infos de base

    // Photo
    // Titre original
    // Résumé
    // Note moyenne sur 10
    // Pays d'origine

    // Loader ou pas pour toggle Details (auquel on passe additional Info)
  );
}

Result.propTypes = {
  basicData: PropTypes.object,
  handleLanguage: PropTypes.func,
  handleMoreDetails: PropTypes.func,
  additionalDetails: PropTypes.object
};

export default Result;
