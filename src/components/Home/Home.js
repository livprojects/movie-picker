import "./Home.css";

import React, { useState } from "react";
import { usePopularMovies } from "../../middlewares/customFetchingHooks";

import Search from "./Search/Search";
import Results from "./Results/Results";


function Home() {
  const [useLanguage, setLanguage] = useState("en-US");
  const [useQuery, setQuery] = useState("year");
  const [useData, setData] = useState(1994);

  const moviesList = usePopularMovies(useLanguage, useQuery, useData);
  let additionalDetails;

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




  return (
    // Images / Logo
    <>
      <Search handleQuery={handleQuery} handleData={handleData} />
      <Results
        moviesList={moviesList}
        handleLanguage={handleLanguage}
      />
    </>
  );
}

export default Home;
