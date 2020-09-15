import React from "react";

function Movies(props) {
  console.log(props.movies);
  const movies = props.movies
    .filter((movie) => movie.poster_path)
    .map((movie) => (
      <div className="movie-container" key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt="poster"
        />
        <div className="movie-information">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="overview">{movie.overview}</p>
          <div className="movie-information-footer">
            <p>Vote: {movie.vote_average} </p>
            <p>Release date: {movie.release_date}</p>
          </div>
        </div>
      </div>
    ));
  return <div className="movies-container">{movies}</div>;
}

export default Movies;
