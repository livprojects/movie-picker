// Se baser sur la partie discover de l'api

// Popularité

// Genre
// -> Menu déroulant

// Année spécifique (avec input)

// -> Message d'erreur si pas une année

// D'un pays
// -> Menu déroulant

// 2 sélecteurs
// 1 simple (pas de composant ?)
// 1 avec Input

import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SearchSelector from "./SearchSelector/SearchSelector";
import PropTypes from "prop-types";

function Search({ handleQuery, handleData }) {
//   handleQuery("year");
//   handleData(1994);

  return (
    <>
      <div>Popularité</div>
      <SearchSelector />
      <SearchInput />
      <SearchSelector />
    </>
  );
}

Search.propTypes = {
  handleQuery: PropTypes.func,
  handleData: PropTypes.func,
};

export default Search;
