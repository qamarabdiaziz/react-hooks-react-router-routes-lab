import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      {/*{code here}*/}
      {const movieList = movies.map((movie)=> (
      <div key={movies.title}>
        <h2>{movies.title}</h2>
        <h3>{movies.time}</h3>
        <ul>
          {movies.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
      ))}; return(
      <div>
        <h1>Movies Page</h1>
        {moviesList}
      </div>
      )
    </div>
  );
}

export default Movies;
