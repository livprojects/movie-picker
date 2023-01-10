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
        console.log(
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

function useAdditionalMovieDetails(movieId) {
  const [useAltTitles, setAltTitles] = useState([]);
  const [useSimilarMovies, setSimilarMovies] = useState([]);
  // alt titles : https://api.themoviedb.org/3/movie/{movie_id}/alternative_titles?api_key=<<api_key>>&page=1 // titles -> [{ title }]
  // similar movies : https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&page=1  results[{ original_title }]
  // watch providers : https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=<<api_key>>&page=1 / results[FR] -> [{ flatrate }] => [{ provider_name }]
  const fetchAltTitles = async (movieId) => {
    await axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}/alternative_titles?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&page=1`
      )
      .then((response) => {
        if (response !== null && response !== undefined) {
          setAltTitles(response.data.titles.map((elem) => elem.title));
        }
        console.log("Titres alternatifs récupérés : ", useAltTitles);
      })
      .catch((e) => {
        console.log(
          "Une erreur est survenue au niveau de la requête de récupération des titres alternatifs d'un film : ",
          e.message
        );
      });
  };

  const fetchSimilarMovies = async (movieId) => {
    await axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&page=1`
      )
      .then((response) => {
        if (response !== null && response !== undefined) {
          setSimilarMovies(
            response.data.results.map((elem) => elem.original_title)
          );
          console.log("Films similaires récupérés : ", useSimilarMovies);
        }
      })
      .catch((e) => {
        console.log(
          "Une erreur est survenue au niveau de la requête de récupération des films similaires : ",
          e.message
        );
      });
  };

  useEffect(() => {
    fetchAltTitles(movieId);
    fetchSimilarMovies(movieId);
  }, []);

  return { alternativeTitles: useAltTitles, similarMovies: useSimilarMovies };
}

export { usePopularMovies, useAdditionalMovieDetails };
