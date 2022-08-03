import React from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import css from './MoviesListCard.module.css'

const MovieListCard = ({movie}) => {
    const {id,backdrop_path,title,vote_average} =movie
    return (
        <div className={css.card}>
            <Link to={id.toString()} state={movie}>
                <div><img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}/></div>
                <div>{title}</div>
                <StarRatings
                    numberOfStars={10}
                    starRatedColor="gold"
                    rating={vote_average}
                    starDimension="15px"
                    starSpacing="8px"
                />
            </Link>
        </div>
    );
};

export {MovieListCard};