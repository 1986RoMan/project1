import React, {useEffect} from 'react';
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const MoviesList = () => {
   const {movies,prev,next,genres}=useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const {query,setQuery} = useSearchParams({page:'1'});
    console.log(query)
         useEffect(()=>{
             dispatch(movieAction.genre())
         },[])
    useEffect(()=>{
       dispatch(movieAction.allMovie({page:('page')}))
    },[query])

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };

    const {register,handleSubmit} = useForm();

    const submit = async (opo) => {
         let filterMovies=''
         filterMovies= movies.filter((value)=>value.genre_ids.includes(+opo.genres))
        await dispatch(movieAction.filterMov(filterMovies))
         //filterMovies=movies
    }
        // for (const movi of movies) {
        //     const genreids=movi.genre_ids
        //     console.log(genreids)
        //     for (const genreid of genreids) {
        //         console.log(opo.genres)
        //         if(opo.genres!==genreid){
        //             console.log('rrrrrr')
        //
        //         }
        //     }
        // }

return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select {...register('genres')} >
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
               </select>
                <button>send</button>
            </form>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
            {movies.map(movi=><MovieListCard key={movi.id} movi={movi}/>)}
        </div>
    );
};

export {MoviesList};