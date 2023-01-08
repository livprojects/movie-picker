import "./Home.css";
import Results from "./Results/Results";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [dataResult, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMoviesData = () => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/discover/tv?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
      )
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log("Error message", e.message);
      });
  };

  // A la création du composant
  useEffect(() => {
    console.log("key : ", process.env.REACT_APP_API_BASE_URL);
    fetchMoviesData();
  }, []);

  return (
    // <DataProvider>
    <Results data={dataResult} />
    // </DataProvider>
  );
}

export default Home;
