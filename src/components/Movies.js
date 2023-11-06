import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie, movieIndex) => (
          <li key={movieIndex}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time} minutes</p>
            <ul>
              {movie.genres.map((genre, genreIndex) => (
                <li key={genreIndex}>{genre}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
