import React from 'react';
import {useLocation, useParams,useNavigate} from "react-router-dom";
import css from './MovieInfo.module.css'
import {useSelector} from "react-redux";
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
                    <div>Назва: {state.title}</div>
                    <div>Жанри: {genres.map(value => <div>{state.genre_ids.includes(value.id) ?
                        <div>{`${value.name + ", "}`}</div> : ''}</div>)}
                    </div>
                    <div>Оригінальна мова: {state.original_language}</div>
                    <div>Оригінальна назва: {state.original_title}</div>
                    <div>Коротко про фільм: {state.overview}</div>
                    <div>Популярність: {state.popularity}</div>
                    <div>Дата релізу: {state.release_date}</div>
                </div>
        </div>
            </div>
    );
};

export {MovieInfo};