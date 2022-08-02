import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import css from './MovieList.module.css'
import {movieAction} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

const MoviesList = () => {

    const {movies,prev,next,genres, moviesFilter}=useSelector(state => state.movieReducer);
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
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button  onClick={nextPage}>Next</button>
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select  {...register('genre')} >
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
                <option onClick={() => dispatch(movieAction.filterMov(null))}>Всі жанри</option>
               </select>
                <button >Вибрати Жанр</button>
            </form>
            <button onClick={() => dispatch(movieAction.filterMov(null))}>Всі Жанр</button>
            <div className={css.moviesModule} >
                {
                    (moviesFilter)
                    ?
                    moviesFilter.map(movi => <MovieListCard key={movi.id} movi={movi}/>)
                    :
                    movies.map(movi=> <MovieListCard key={ movi.id } movi={movi}/>)
                }
        </div>
        </div>
    );
};

export {MoviesList};