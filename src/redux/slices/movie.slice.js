import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {genreService} from "../../services/genre.service";

const initialState={
    movies:[],
    moviesFilter:null,
    genres:[],
    errors:null,
    prev:null
}

const allMovie=createAsyncThunk(
    'movieSlice/allMovie',
    async ({page},{rejectWithValue})=>{
        try {
      const {data}= await movieService.getAll(page)
        return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genre = createAsyncThunk(
    'movieSlice/genre',
    async ()=>{
        const {data}=await genreService.getAll()
        return [data]
    }
);

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        filterMov:(state, action)=>{
            state.moviesFilter=action.payload
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(allMovie.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.prev=action.payload.page
            })
            .addCase(genre.fulfilled,(state, action)=>{
          state.genres=action.payload[0].genres
            })
            .addDefaultCase((state, action)=>{
                const [type] = action.type.split('/').splice(-1);
                if(type==='rejected'){
                    state.errors=action.payload
                }else
                    state.errors=null
            })
})

const {reducer:movieReducer,actions:{filterMov}} = movieSlice;
const movieAction={
    allMovie,
    genre,
    filterMov
}


export {movieReducer,movieAction}