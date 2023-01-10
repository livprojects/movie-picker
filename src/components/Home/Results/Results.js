import React from "react";
import PropTypes from "prop-types";
import Result from "./Result/Result";
import "./results.css";

function Results({ moviesList, handleLanguage }) {
  const languages = [
    ["en-EN", "English"],
    ["fr-FR", "Français"],
    ["de-DE", "Deutsch"],
    ["es-ES", "Español"],
  ];
  return (
    <div className="results">
      <div className="results-language-bar">
        {languages.map((language) => (
          <button key={language[0]} onClick={() => handleLanguage(language[0])}>
            language[1]
          </button>
        ))}
      </div>
      <div className="results-list">
        {moviesList.map((result, index) => (
          <Result basicData={result} key={result.title} />
        ))}
      </div>
      <div className="results-additional-info">
        <span>
          Les résultats sont triés par popularité et ordre décroissant et
          limités à une page de résultats.
        </span>
      </div>
    </div>
  );
}

Results.propTypes = {
  moviesList: PropTypes.array,
  handleLanguage: PropTypes.func,
  additionalDetails: PropTypes.object,
  handleMoreDetails: PropTypes.func,
};

export default Results;
