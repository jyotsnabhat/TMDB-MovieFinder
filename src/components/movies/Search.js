import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_POPULAR_KEY}&query=${userInput}`
      )
      .then(res => {
        let movies = res.data.results;
        setState({ movies: movies, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  }, [movieTitle]);

  const findTrack = e => {
    e.preventDefault();
    setMovieTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="container mb-5">
      <form onSubmit={findTrack}>
        <div className="form-group search">
          <span><i className="fa fa-search primary-color"></i></span>
          <input type="text" className="form-control form-control-lg border-custom-radius primary-color"
                 placeholder="Search" name="userInput" value={userInput} onChange={onChange}/>
        </div>
      </form>
    </div>
  );
};

export default Search;
