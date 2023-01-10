import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchInput({ handleData, handleQuery, selectorType }) {

  const [useYear, setYear] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleQuery(selectorType);
    handleData(useYear);
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setYear(parseInt(event.target.value), 10);

  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="select-bar-item">
      <form onSubmit={handleOnSubmit}>
        <input
          id="input"
          name="value-input"
          type="number"
          min="0"
          placeholder="Année ?"
          max={currentYear + 2}
          onChange={handleOnChange}
        ></input>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  handleQuery: PropTypes.func,
  handleData: PropTypes.func,
  selectorType: PropTypes.string,
};

export default SearchInput;
