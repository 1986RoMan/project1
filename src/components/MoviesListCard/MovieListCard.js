import React from 'react';
import css from './MoviesListCard.module.css'
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
const MovieListCard = ({movi}) => {

    return (
        <div>
            <Link to={'/movie'} state={movi}>
                <div><img src={`https://image.tmdb.org/t/p/w500/${movi.backdrop_path}`}/></div>
                <div>{movi.title}</div>
                <StarRatings
                    numberOfStars={10}
                    starRatedColor="gold"
                    rating={movi.vote_average}
                    starDimension="25px"
                    starSpacing="10px"
                />
            </Link>
        </div>
    );
};

export {MovieListCard};