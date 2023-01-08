import "./Home.css";
import Results from "./Results/Results";

import React, { useEffect, useState } from "react";
import useMoviesData from "../../middlewares/customFetchingHooks";

function Home() {
  const dataResult = useMoviesData();

  // // A la création du composant
  // useEffect(() => {
  //   fetchMoviesData();
  // }, []);

  return (
    // <DataProvider>
    <Results data={dataResult} />
    // </DataProvider>
  );
}

export default Home;
