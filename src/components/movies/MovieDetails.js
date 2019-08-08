import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";
import * as moment from "moment";


const MovieDetails = props => {
  const [movie, setMovie] = useState({});
  const { match } = props;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_POPULAR_KEY}`
      )
      .then(res => {
        let movie = res.data;
        console.log(movie);
        setMovie({ movie });
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  if (movie === undefined || Object.keys(movie).length === 0) {
    return <Spinner/>;
  } else {
     const hours = Math.round(movie.movie.runtime / 60);
     const minutes = movie.movie.runtime % 60;
    return (
      <>
        <header>
          <div className="row">
            <div className="bg-image w-100">
              <Link to="/" className="mb-5">
                <i className="fa fa-arrow-left arrow-position text-white" ></i>
              </Link>
              <img src={"https://image.tmdb.org/t/p/w1280" + movie.movie.backdrop_path}
                   alt={"could not be loaded"} className="img-responsive" width="100%"/>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={"https://image.tmdb.org/t/p/w185" + movie.movie.poster_path}
                   className="poster img-responsive poster-w img-shadow"/>
            </div>
            <div className="col-6">
              <h3 className="titles">{movie.movie.original_title}</h3>
              <div className="row">
                <div className="col-xs-6 overview mx-1">
                  <Moment format="YYYY">
                    {movie.movie.release_date}
                  </Moment>
                </div>
                <span className="overview mx-1">&middot;</span>
                <div className="col-xs-6 overview mx-1">
                  {movie.movie.vote_average * 10} % User Score
                </div>
              </div>
              <div className="col-xs-6 overview">
                {hours} hr {minutes} min
              </div>
            </div>
          </div>
          <hr/>
          <div>
            <h3 className="font-weight-bold my-3 titles">
              Overview
            </h3>
            <div className="overview">
              {movie.movie.overview}
            </div>
          </div>

        </div>
      </>
    );
  }
};

export default MovieDetails;
