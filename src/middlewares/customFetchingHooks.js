import axios from "axios";
import { useState, useEffect } from "react";

function usePopularMovies(language, query, data) {
  const [dataResult, setData] = useState([]);

  const fetchMoviesData = async (language, query, data) => {
    await axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/discover/movie?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=${language}&sort_by=popularity.desc&page=1&${query}=${data}`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((e) => {
        console.error(
          "Une erreur est survenue au niveau de la requête de récupération d'une liste de films : ",
          e.message
        );
      });
  };

  useEffect(() => {
    fetchMoviesData(language, query, data);
  }, [language, query, data]);

  return dataResult;
}

export { usePopularMovies };
