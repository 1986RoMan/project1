import React from 'react';
import {useSelector} from "react-redux";
import {SearchForm} from "../SearchForm/SearchForm";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

const MoviesPage1 = () => {
    const {searchMovies} = useSelector(state => state.movieReducer);
    console.log(JSON.stringify(searchMovies))
    return (
        <div>
            <SearchForm/>
            {searchMovies.map(movie=><MovieListCard movie={movie}/>)}
        </div>
    );
};

export {MoviesPage1};