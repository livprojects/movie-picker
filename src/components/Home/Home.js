import "./Home.css";
import Results from "./Results/Results";

import React, { useState } from "react";
import { usePopularMovies, useAdditionalMovieDetails } from "../../middlewares/customFetchingHooks";
import Search from "./Search/Search";

function Home() {
  const [useLanguage, setLanguage] = useState("en-US");
  const [useQuery, setQuery] = useState("year");
  const [useData, setData] = useState(1994);
  const [useMovieId, setMovieId] = useState(315162);

  const moviesList = usePopularMovies(useLanguage, useQuery, useData);
  const additionalDetails = useAdditionalMovieDetails(useMovieId);

  function handleLanguage(language) {
    setLanguage(language);
  }

  function handleQuery(query) {
    console.log(query);
    setQuery(query);
  }

  function handleData(data) {
    console.log(data);
    setData(data);
  }

  function handleMoreDetails(movieId) {
    console.log(movieId);
    setMovieId(movieId);
  }

  return (
    // Images / Logo
    <>
      <Search handleQuery={handleQuery} handleData={handleData} />
      <Results
        moviesList={moviesList}
        handleLanguage={handleLanguage}
        handleMoreDetails={handleMoreDetails}
        additionalDetails={additionalDetails}
      />
    </>
  );
}

export default Home;
