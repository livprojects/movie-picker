import React from "react";
import PropTypes from "prop-types";
import Result from "./Result/Result";

function Results({ moviesList, handleLanguage }) {
  return (
    <>
      <span>
        <div>
          <button onClick={() => handleLanguage("en-EN")}>English</button>
          <button onClick={() => handleLanguage("fr-FR")}>Français</button>
          <button onClick={() => handleLanguage("de-DE")}>Deutsch</button>
          <button onClick={() => handleLanguage("es-ES")}>Español</button>
        </div>
        {moviesList.map((result, index) => (
          <Result basicData={result} key={result.title} />
        ))}
      </span>
      <span>Les résultats sont triés par popularité et ordre décroissant.</span>
    </>
  );
}

Results.propTypes = {
  moviesList: PropTypes.array,
  handleLanguage: PropTypes.func,
  additionalDetails: PropTypes.object, 
  handleMoreDetails: PropTypes.func
};

export default Results;
