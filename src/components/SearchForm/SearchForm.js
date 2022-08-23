import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {movieAction, movieReducer} from "../../redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button} from "reactstrap";

const SearchForm = () => {
        const {handleSubmit,register} = useForm();
        const dispatch = useDispatch();
        const navigate = useNavigate();

   const [query,setQuery]=useSearchParams({page:'1'})

    const mySubmit = async (searcho) => {
        await dispatch(movieAction.sortMove({searcho}))
        //await dispatch(movieAction.sortMove({page:query.get('page')}))
        console.log(searcho)

    }
    useEffect(()=>{
      dispatch(movieAction.sortMove({page:query.get('page')}))
    console.log(query.get('page'))
    },[query])

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };
    return (
        <div >
            <div>
                <form onSubmit={handleSubmit(mySubmit)}>
                    <input type="text" {...register('search')}/>
                    <button>Пошук</button>
                </form>
            </div>
                    <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPage}>nextPage</button>

        </div>
    );
};

export {SearchForm};
