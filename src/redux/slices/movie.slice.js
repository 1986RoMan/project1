import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {genreService} from "../../services/genre.service";

const initialState={
    movies:[],
    prev:null,
    next:null,
    genres:[]
}
const allMovie=createAsyncThunk(
    'movieSlice/allMovie',
    async ({page})=>{
      const {data}= await movieService.getAll(page)
        return data
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
            state.movies=action.payload
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(allMovie.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                state.prev=action.payload.prev
                state.next=action.payload.next
                 console.log(JSON.stringify(action.payload))
            })
            .addCase(genre.fulfilled,(state, action)=>{
          state.genres=action.payload[0].genres
               // console.log(JSON.stringify(state.genres[0].genres))
            })
})


const {reducer:movieReducer,actions:{filterMov}} = movieSlice;
const movieAction={
    allMovie,
    genre,
    filterMov
}
export {movieReducer,movieAction}