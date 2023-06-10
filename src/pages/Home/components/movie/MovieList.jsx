import React from "react";
import MovieData from "./hooks/movie/MovieData";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <ul class="movies-list  has-scrollbar">
      {MovieData.map((movie, index) => (
        <Movie
          key={index}
          image={movie.image}
          title={movie.title}
          duration={movie.duration}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </ul>
  );
};

export default MovieList;
