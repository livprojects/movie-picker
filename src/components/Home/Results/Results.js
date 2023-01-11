import React from "react";
import PropTypes from "prop-types";
import Result from "./Result/Result";
import "./style.css";

function Results({ moviesList, handleLanguage }) {
  const languages = [
    ["en-EN", "English"],
    ["fr-FR", "Français"],
    ["de-DE", "Deutsch"],
    ["es-ES", "Español"],
    ["ja-JA", "Japonais"],
  ];
  return (
    <div className="results">
      <div className="results-language-bar">
        <div>
          <span>
            Affichez les résultats dans{" "}
            <span id="result-handwriting" className="handwriting">
              votre
            </span>
            langue
          </span>
        </div>
        <div className="results-language-bar-buttons">
          {languages.map((language) => (
            <button
              key={language[0]}
              onClick={() => handleLanguage(language[0])}
            >
              {language[1]}
            </button>
          ))}
        </div>
      </div>
      <div className="results-list">
        {moviesList.length > 0 &&
          moviesList.map((result) => {
            return result.adult ? (
              <></>
            ) : (
              <Result
                basicData={result}
                key={result.title}
                languages={languages}
              />
            );
          })}
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

Results.defaultProps = {
  moviesList: [
    {
      adult: false,
      id: 8587,
      original_language: "en",
      original_title: "The Lion King",
      overview:
        "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
      poster_path: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      release_date: "1994-06-23",
      title: "The Lion King",
    },
  ],
};

export default Results;
