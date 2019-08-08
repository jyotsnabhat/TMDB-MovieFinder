import React from 'react';
import {Link} from 'react-router-dom';
import Moment from "react-moment";

const Movie = props => {
    const {movie} = props;

    return (
        <div className="col-6">
            <div className="card mb-4 shadow-sm back-color">

                <Link
                    to={`movie/${movie.id}`}
                ><span className={(movie.vote_average >6.9)
                                   ? "score-color-high user-score"
                                   : (movie.vote_average >3.9
                                    ? "score-color-medium user-score"
                                    : "score-color-low user-score")}>{movie.vote_average * 10}%</span><img className="card-img-top img-rounded"
                                                             src={"https://image.tmdb.org/t/p/w185"
                                                             + movie.poster_path} alt="poster"/>
                </Link>
                <div className="card-body back-color px-0">
                    <div className="card-text text-white font-weight-light">
                        <div className="titles">{movie.original_title}</div>
                        <div className="overview">
                            <Moment format="MMMM YYYY">
                                {movie.release_date}
                            </Moment>
                        </div>
                    </div>
                    <Link
                        to={`movie/${movie.id}`}
                    >
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;
