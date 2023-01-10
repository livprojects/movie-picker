import React, { useState } from "react";
import PropTypes from "prop-types";
import Others from "./Others/Others";
import axios from "axios";

function Result({ basicData }) {
  const [useSimilarMovies, setSimilarMovies] = useState([]);
  const [useAlternativeTitles, setAlternativeTitles] = useState([]);

  const fetchAltTitles = (movieId) => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}/alternative_titles?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&page=1`
      )
      .then((response) => {
        if (response !== null && response !== undefined) {
          setAlternativeTitles(response.data.titles.map((elem) => elem.title));
        }
      })
      .catch((e) => {
        console.log(
          "Une erreur est survenue au niveau de la requête de récupération des titres alternatifs d'un film : ",
          e.message
        );
      });
  };

  const fetchSimilarMovies = async (movieId) => {
    await axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&page=1`
      )
      .then((response) => {
        if (response !== null && response !== undefined) {
          setSimilarMovies(response.data.results.map(
            (elem) => elem.original_title
          ))
        }
      })
      .catch((e) => {
        console.log(
          "Une erreur est survenue au niveau de la requête de récupération des films similaires : ",
          e.message
        );
      });
  };

  const handleMoreDetails = (movieId) => {
    fetchAltTitles(movieId);
    fetchSimilarMovies(movieId);
  }

  return (
    <>
      <Others
        similarMovies={useSimilarMovies}
        alternativeTitles={useAlternativeTitles}
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
