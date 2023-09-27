import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Main from "./components/Main";
import Box from "./components/Box";

const API_KEY = "ef37cf99f41ff0b9af576c001200c50d";
const API_URL = "https://api.themoviedb.org/3/search/movie";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `${API_URL}?api_key=${API_KEY}&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query) {
      searchMovies();
    }
  }, [query]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };



  return (
    <>
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Main>
        <Box>
          <Movies
            movies={movies}
            handleMovieClick={handleMovieClick}
            IMG_BASE_URL={IMG_BASE_URL}
          />
        </Box>
        <Box>
          <MovieDetails selectedMovie={selectedMovie}/>
        </Box>
      </Main>
    </>
  );
}
