import React from "react";
import PropTypes from "prop-types";

function SearchSelector({ handleData, handleQuery, selectorType }) {
  const handleOnChange = (event) => {
    switch (selectorType) {
      case "genre":
        handleQuery("with_genres");
        break;
      case "original-language":
        handleQuery("with_original_language");
        break;
      default:
        console.error("There should be a query parameter.");
        break;
    }

    handleData(event.target.value);
  };

  const genres = [
    [28, "Action"],
    [12, "Aventure"],
    [16, "Animation"],
    [35, "Comédie"],
    [80, "Crime"],
    [99, "Documentaire"],
    [18, "Dramatique"],
  ];
  const languages = [
    ["fr", "Français"],
    ["de", "Allemand"],
    ["en", "Anglais"],
    ["es", "Espagnol"],
  ];

  let optionsMap = [];
  let label = "";

  const isGenres = selectorType === "genre";

  if (isGenres) {
    optionsMap = genres;
    label = "Quel genre ?";
  } else {
    optionsMap = languages;
    label = "Quelle langue d'origine ?";
  }

  return (
    <div>
      <select onChange={handleOnChange} name="query-selector" id="query-select">
        <option value="">{label}</option>
        {optionsMap.map((option) => (
          <option key={option[0]} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
    </div>
  );
}

SearchSelector.propTypes = {
  handleQuery: PropTypes.func,
  handleData: PropTypes.func,
  selectorType: PropTypes.string,
};

export default SearchSelector;
