import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SearchSelector from "./SearchSelector/SearchSelector";
import PropTypes from "prop-types";
import "./style.css";

function Search({ handleQuery, handleData }) {
  return (
    <div className="select-bar">
      <SearchSelector
        handleQuery={handleQuery}
        handleData={handleData}
        selectorType="genre"
      />
      <SearchInput
        handleQuery={handleQuery}
        handleData={handleData}
        selectorType="year"
      />
      <SearchSelector
        handleQuery={handleQuery}
        handleData={handleData}
        selectorType="original-language"
      />
    </div>
  );
}

Search.propTypes = {
  handleQuery: PropTypes.func,
  handleData: PropTypes.func,
};

export default Search;
