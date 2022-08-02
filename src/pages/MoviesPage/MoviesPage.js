import React from 'react';
import {Outlet} from 'react-router-dom'

import {MoviesList} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
        <MoviesList/>
        </div>
    );
};

export {MoviesPage};