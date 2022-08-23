import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "reactstrap";

import css from './MovieList.module.css'
import {movieAction} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {SearchForm} from "../SearchForm/SearchForm";

const MoviesList = () => {
         const navigate = useNavigate();
    const {movies,genres, moviesFilter,errors}=useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
         useEffect(()=>{
             dispatch(movieAction.genre())
         },[])

    useEffect(()=>{
       dispatch(movieAction.allMovie({page:query.get('page')}))
    },[dispatch,query])


    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };

    const {register,handleSubmit,reset} = useForm();

    const submit = async (genre) => {
        console.log(query.get('page'));
        await dispatch(movieAction.filMove({genre,page:query.get('page')}))

    }

    return (
        <div>
            <button onClick={()=>{navigate('/search')}}>Знайти фільм</button>

            <Button color="secondary" onClick={prevPage}>Попередня сторінка</Button>{' '}
            <Button color="secondary" onClick={nextPage}>Наступна сторінка</Button>{' '}
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select  {...register('genre')} >
                <option>alllll</option>
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
               </select>
                <Button color="secondary">Вибрати Жанр</Button>{' '}
            </form>
            <Button color="secondary" onClick={() =>
                dispatch(movieAction.allMovie(movies))}>Всі Жанр
            </Button>{' '}
            {errors &&<h1>{JSON.stringify(errors)}</h1>}
            <div className={css.moviesModule} >
                {
                    (moviesFilter)
                        ?
                        moviesFilter.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                        :
                        movies.map(movie=> <MovieListCard key={ movie.id } movie={movie}/>)
                }
        </div>
        </div>
    );
};

export {MoviesList};