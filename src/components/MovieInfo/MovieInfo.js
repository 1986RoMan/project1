import React from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Badge, Button} from "reactstrap";

import css from './MovieInfo.module.css'

const MovieInfo = () => {

    const {genres} = useSelector(state =>state.movieReducer);
    console.log(genres)
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(JSON.stringify(state.with_people));
    return (
        <div>
            <div>
                <Button color="primary" onClick={() => navigate('/movies')}>На головну сторінку</Button>{' '}
            </div>
            <h1 className={css.container2}><Badge color="secondary">"Інформація про фільм"</Badge></h1>

            <div className={css.container}>
                <img className={css.carta} src={`https://image.tmdb.org/t/p/original/${state.backdrop_path}`}/>

                <div className={css.container2}>
                    <div><b>Назва:</b> {state.title}</div>
                    <div><b>Жанри:</b> {genres.map(value => <div key={value.id}> {state.genre_ids.includes(value.id)
                        ?
                        <div>{`${value.name + ", "}`}</div> : ''} </div>)}
                    </div>
                    <div><b>Оригінальна мова:</b> {state.original_language}</div>
                    <div><b>Оригінальна назва:</b> {state.original_title}</div>
                    <div><b>Коротко про фільм:</b> {state.overview}</div>
                    <div><b>Популярність:</b> {state.popularity}</div>
                    <div><b>Дата релізу:</b> {state.release_date}</div>
                    <div><b>Сподобалось людям:</b> {state.vote_count}</div>
                </div>
        </div>
            </div>
    );
};

export {MovieInfo};