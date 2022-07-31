import React from 'react';

const MovieListCard = ({movi}) => {
    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w500/${movi.backdrop_path}`}/></div>
            <div>{movi.title}</div>
            <div>{movi.genre_ids}</div>
        </div>
    );
};

export {MovieListCard};