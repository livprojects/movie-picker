import "./Home.css";
import Results from "./Results/Results";

import React from "react";
import PropTypes from "prop-types";
import { useMoviesData } from "../../middlewares/customFetchingHooks";

function Home() {
  const moviesList = useMoviesData();

  // A la création du composant
  //useEffect(() => {}, []);

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
