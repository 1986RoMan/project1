import React, {useEffect} from 'react';
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const MoviesList = () => {
   const {movies,prev,next,genres}=useSelector(state => state.movieReducer);
    console.log(genres)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
         useEffect(()=>{
             dispatch(movieAction.genre())
         },[])
    useEffect(()=>{
       dispatch(movieAction.allMovie({page:query.get('page')}))
    },[query])
    console.log(query.get('page'))
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
        let filterMovies = movies.filter((value) => value.genre_ids.includes(+opo.genres))

        await dispatch(movieAction.filterMov(filterMovies))
    }

return (
        <div >
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button  onClick={nextPage}>Next</button>
            <form onSubmit={handleSubmit(submit)}>
                Жанри:<select  {...register('genres')} >
                {genres.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
               </select>
                <button>send</button>
            </form>
            <div style={{display:"flex",flexWrap:"wrap"}} >
            {movies.map(movi=><MovieListCard key={movi.id} movi={movi}/>)}
        </div>
        </div>
    );
};

export {MoviesList};