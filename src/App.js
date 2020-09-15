import React from "react";
import "./styles.css";
import { useState } from "react";
import Movies from "./movies";

export default function App() {
  const [query, setQuery] = useState("jurassic park");
  const [movies, setMovie] = useState([]);
  function handleChange(e) {
    const { value } = e.target;
    setQuery(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6605f1ba59d4fdddf3a84a163b73c1f1&language=en-US&query=${query}&page=1&include_adult=false`;
    const moviData = fetch(url);
    moviData
      .then((response) => response.json())
      .then((value) => setMovie(value.results))
      .catch((error) => console.log(error));

    setQuery("");
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seerch your movie"
          value={query}
          onChange={handleChange}
        />
        <button onSubmit={handleSubmit}></button>
      </form>
      <Movies movies={movies} />
    </div>
  );
}
