import "./Home.css";
import Results from "./Results/Results";

import React from "react";
import PropTypes from "prop-types";
import { useMoviesData } from "../../middlewares/customFetchingHooks";

function Home() {
  const [useLanguage, setLanguage] = useState("en-US");
  const moviesList = useMoviesData(useLanguage);

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
