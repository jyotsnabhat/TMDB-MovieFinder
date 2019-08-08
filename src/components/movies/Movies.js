import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layout/Spinner";
import Movie from "./Movie";

const Movies = () => {
  const [state] = useContext(Context);
  console.log(state);
  const { movies, heading } = state;

  if (movies === undefined || movies.length === 0) {
    return <Spinner/>;
  } else {
    return (
      <>
        <div className="container">
          <h3 className="mb-4 titles">{heading}</h3>
          <div className="row">
            {movies.map(item => (
              <Movie key={item.id} movie={item}/>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Movies;
