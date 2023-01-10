import React, { useState } from "react";
import PropTypes from "prop-types";
import Others from "./Others/Others";
import axios from "axios";
import "./result.css";

function Result({ basicData, languages }) {
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
          setSimilarMovies(
            response.data.results.map((elem) => elem.original_title)
          );
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
  };

  const altText = `Image d'illustration du film ${basicData.original_title}`;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${basicData.poster_path}`;
  const releaseDate = new Date(`${basicData.release_date}`).getFullYear();

  return (
    <div className="result-card">
      <div className="result-card-info">
        <div className="result-card-info-poster">
          <img alt={altText} src={imgUrl}></img>
        </div>
        <div className="result-card-info-text">
          <ul>
            <li className="result-card-info-title">{basicData.title}</li>
            <li className="result-card-info-tagline">{basicData.tagline}</li>
            <li>
              <span className="result-card-info-label">
                Langue d&apos;origine :
              </span> 
              <span> 
                {languages.map((lang) => {
                  if (lang[0].slice(0, 2) === `${basicData.original_language}`) {
                    return <span key={basicData.original_language}>` ${lang[1]}`</span>;
                  }
                })}
              </span>
            </li>
            <li>
              <span className="result-card-info-label">Année de sortie : </span>{" "}
              {releaseDate}
            </li>
            <li>
              <span className="result-card-info-label">Résumé : </span>{" "}
              {basicData.overview}
            </li>
          </ul>
        </div>
      </div>
      <Others
        similarMovies={useSimilarMovies}
        alternativeTitles={useAlternativeTitles}
        handleMoreDetails={handleMoreDetails}
        movieId={basicData.id}
      />
    </div>
  );
}

Result.propTypes = {
  basicData: PropTypes.object,
  handleLanguage: PropTypes.func,
  handleMoreDetails: PropTypes.func,
  languages: PropTypes.arrayOf(PropTypes.array),
};

export default Result;
