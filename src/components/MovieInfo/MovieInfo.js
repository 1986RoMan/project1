import React from 'react';
import {useLocation, useParams,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MovieInfo.module.css'

const MovieInfo = () => {

    const {genres} = useSelector(state =>state.movieReducer);
    console.log(genres)
    const navigate = useNavigate();
    const {state} = useLocation();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/movies')}>На головну сторінку</button>
            </div>
            <div className={css.conteiner}>
                <img className={css.kartunka} src={`https://image.tmdb.org/t/p/original/${state.backdrop_path}`}/>

                <div className={css.conteiner2}>
                    <div><b>Назва</b>: {state.title}</div>
                    <div><b>Жанри</b>: {genres.map(value => <div key={value.id}> {state.genre_ids.includes(value.id)
                        ?
                        <div>{`${value.name + ", "}`}</div> : ''} </div>)}
                    </div>
                    <div><b>Оригінальна мова</b>: {state.original_language}</div>
                    <div><b>Оригінальна назва</b>: {state.original_title}</div>
                    <div><b>Коротко про фільм</b>: {state.overview}</div>
                    <div><b>Популярність</b>: {state.popularity}</div>
                    <div><b>Дата релізу</b>: {state.release_date}</div>
                </div>
        </div>
            </div>
    );
};

export {MovieInfo};