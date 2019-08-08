import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    movies: [],
    heading: ""
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_POPULAR_KEY}`
      )
      .then(res => {
        setState({
          movies: res.data.results,
          heading: "Popular Movies"
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
