import React, { useState } from "react";
import { usePopularMovies } from "../../middlewares/customFetchingHooks";

import Search from "./Search/Search";
import Results from "./Results/Results";

import './style.css';

function Home() {
  const [useLanguage, setLanguage] = useState("en-US");
  const [useQuery, setQuery] = useState("year");
  const [useData, setData] = useState(1994);

  const moviesList = usePopularMovies(useLanguage, useQuery, useData);

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
    <div className="home">
      <div className="header">
        <div className="header-logo">
          <div id="your">
            <span className="handwriting">Your </span>
          </div>
          <div className="bold-title">Canal</div>
        </div>
        <div className="header-title">
          <span>
            Quel film voulez-<div className="handwriting">vous</div> regarder ?
          </span>
        </div>
      </div>
      <Search handleQuery={handleQuery} handleData={handleData} />
      <Results moviesList={moviesList} handleLanguage={handleLanguage} />
      <footer>
        Crédits :{" "}
        <a
          href="https://icons8.com/icons/set/popcorn"
          alt="Lien vers la source du favicon"
        >
          Favicon
        </a>{" "}
        -{" "}
        <a
          href="https://unsplash.com/fr/photos/J39X2xX_8CQ"
          alt="Lien vers la source de l'image d'illustration"
        >
          Header
        </a>
      </footer>
    </div>
  );
}

export default Home;
