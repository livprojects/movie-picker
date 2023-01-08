import React from "react";
import PropTypes from "prop-types";

function Results({ data }) {
  return (
    // <DataProvider>
    <span>
      {data.map((result) => (
        <span key="result"> {result.name} </span>
      ))}
    </span>
    // </DataProvider>
  );
}

Results.propTypes = {
  data: PropTypes.array,
};

export default Results;
