import "./Home.css";
import Results from "./Results/Results";

import React, { useEffect, useState } from "react";
import useMoviesData from "../../middlewares/customFetchingHooks";

function Home() {
  const [moviesList, setMoviesList] = useState(useMoviesData());

  // A la création du composant
  useEffect(() => {}, []);

  return (
    // <DataProvider>
    <Results moviesList={moviesList} />
    // </DataProvider>
  );
}

Home.propTypes = {
  moviesList: PropTypes.array,
};

export default Home;
