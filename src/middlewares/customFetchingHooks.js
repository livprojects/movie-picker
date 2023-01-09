import axios from "axios";
import { useState, useEffect } from "react";

function useMoviesData(language) {
  const [dataResult, setData] = useState([]);

  const fetchMoviesData = (language) => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/discover/tv?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=${language}&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((e) => {
        console.log("Error message", e.message);
      });
  };

  useEffect(() => {
    fetchMoviesData(language);
  });

  return dataResult;
}

function useMovieDetails(movieId, language) {
  const [movieDetails, setMovieDetails] = useState();

  const fetchMovieDetails = (movieId, language) => {
    axios
      .get(
        `https://${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_ACCESS_KEY}&language=${language}&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
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
  });

  return movieDetails;
}

export { useMoviesData, useMovieDetails };
