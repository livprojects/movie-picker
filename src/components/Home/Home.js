import "./Home.css";
import Results from "./Results/Results";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { usePopularMovies } from "../../middlewares/customFetchingHooks";
import Search from "./Search/Search";

function Home() {
  const [useLanguage, setLanguage] = useState("en-US");
  const [useQuery, setQuery] = useState("year");
  const [useData, setData] = useState(1994);

  const moviesList = usePopularMovies(useLanguage, useQuery, useData);

  function handleLanguage(language) {
    setLanguage(language);
  }

  function handleQuery(query) {
    setQuery(query);
  }

  function handleData(data) {
    setData(data);
  }


  return (
    // Images
    <>
      <Search handleQuery={handleQuery} handleData={handleData}/>
      <Results moviesList={moviesList} handleLanguage={handleLanguage}/>
    </>
  );
}

Home.propTypes = {
  moviesList: PropTypes.array,
};

export default Home;
