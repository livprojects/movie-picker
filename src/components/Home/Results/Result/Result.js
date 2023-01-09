import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useMovieDetails } from "../../middlewares/customFetchingHooks";

function Result({ basicData }) {

  
  const translatedData = useMovieDetails();

  return (
    <div>
      <span>{translatedData.name}</span>
    </div>
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
};

export default Result;
