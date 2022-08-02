import React, {useEffect} from 'react';
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

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
    // const filtered = async (valuee) => {
    //     console.log(valuee)
    //          let filterMovies = movies.filter((value) => value.genre_ids.includes(valuee))
    //     console.log(filterMovies)
    //    await dispatch(movieAction.filterMov(filterMovies))
    //      };
    console.log(moviesFilter, 'here')
    return (
        <div >
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button  onClick={nextPage}>Next</button>
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select  {...register('genre')} >
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
               </select>
                <button >send</button>
            </form>
            <button onClick={() => dispatch(movieAction.filterMov(null))}>all</button>
            <div style={{display:"flex",flexWrap:"wrap"}} >
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