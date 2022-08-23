import React from 'react';

const MoviePageSearch = ({movie}) => {
    const {id,backdrop_path,title,vote_average} =movie
    return (
        <div >
                <div><img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt={title}/>
                </div>
                <div>
                    {title}
                </div>
        </div>
    );
};

export {MoviePageSearch};