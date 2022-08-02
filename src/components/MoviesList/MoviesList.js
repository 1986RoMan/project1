import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import css from './MovieList.module.css'
import {movieAction} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

const MoviesList = () => {

    const {movies,prev,next,genres, moviesFilter,errors}=useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
         useEffect(()=>{
             dispatch(movieAction.genre())
         },[])

    useEffect(()=>{
       dispatch(movieAction.allMovie({page:query.get('page')}))
    },[query])


    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };
    const {register,handleSubmit,reset} = useForm();

    const submit = async (opo) => {
        console.log(opo.genre)
        let filterMovies = movies.filter((value) => value.genre_ids.includes(+opo.genre))
        await dispatch(movieAction.filterMov(filterMovies))
    }

    return (
        <div >
            <button  onClick={prevPage}>Prev</button>
            <button  onClick={nextPage}>Next</button>
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select  {...register('genre')} >
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
               </select>
                <button >Вибрати Жанр</button>
            </form>
            <button onClick={() => dispatch(movieAction.filterMov(null))}>Всі Жанр
            </button>
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