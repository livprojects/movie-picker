import React from "react";
import PropTypes from "prop-types";
import Others from "./Others/Others";

function Result({ basicData, handleLanguage }) {
  // const translatedData = useMovieDetails();

  return (
    <>
      <Others movieId={basicData.movieId} />
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
};

export default Result;
