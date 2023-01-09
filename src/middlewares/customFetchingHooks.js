import axios from "axios";
import { useState, useEffect } from "react";

// Genre : https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&page=1&with_genres=53
// Popularité : https://api.themoviedb.org/3/movie/top_rated?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&page=1
// Année : https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&page=1&year=1994
// Langue d'origine : https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&page=1&with_original_language=de

function usePopularMovies(language, query, data) {
  const [dataResult, setData] = useState([]);

  const fetchMoviesData = (language, query, data) => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/discover/movie?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=${language}&page=1&${query}=${data}`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((e) => {
        console.log("Error message", e.message);
      });
  };

  useEffect(() => {
    fetchMoviesData(language, query, data);
  }, [language, query, data]);

  return dataResult;
}

function useMovieDetails(movieId, language) {
  const [movieDetails, setMovieDetails] = useState();

  const fetchMovieDetails = (movieId, language) => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=${language}`
      )
      .then((response) => {
        setMovieDetails(response.data.results);
      })
      .catch((e) => {
        console.log("Error message", e.message);
      });
  };

  useEffect(() => {
    fetchMovieDetails(movieId, language);
  }, []);

  return movieDetails;
}

export { usePopularMovies, useMovieDetails };
