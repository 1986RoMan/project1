import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService, movieService} from "../../services";


const initialState={
    movies:[],
    moviesFilter:null,
    genres:[],
    errors:null,
    searchMovies:[]
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
const sortMove = createAsyncThunk(
    'sortMove',
    async ({searcho,page})=>{
        console.log(JSON.stringify(searcho.search))
        console.log(JSON.stringify(page))
       const {data:{results}}= await movieService.sortMovie(searcho.search,page)
        return results

    }
);
const filMove = createAsyncThunk(
    'filMove',
    async ({page,genre})=>{
        const {data:{results}}= await movieService.getAllGanre(page,genre.genre)
        return results
        console.log(JSON.stringify(results))

    }
);

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{

        sortMov:(state, action)=>{
            state.movies=action.payload
           // console.log(JSON.stringify(state.movies))
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(allMovie.fulfilled,(state, action)=>{
                state.movies=action.payload.results
                //console.log(JSON.stringify(state.movies))
            })
            .addCase(genre.fulfilled,(state, action)=>{
          state.genres=action.payload[0].genres
            })
            .addCase(sortMove.fulfilled,(state, action)=>{
                state.searchMovies=action.payload
                //console.log(JSON.stringify(state.searchMovies))
            })
            .addCase(filMove.fulfilled,(state, action)=>{
                state.moviesFilter=action.payload
                console.log(JSON.stringify(state.moviesFilter))
            })
            .addDefaultCase((state, action)=>{
                const [type] = action.type.split('/').splice(-1);
                if(type==='rejected'){
                    state.errors=action.payload
                }else
                    state.errors=null
            })
})

const {reducer:movieReducer,actions:{sortMov}} = movieSlice;
const movieAction={
    allMovie,
    genre,
    sortMov,
    sortMove,
    filMove
}


export {movieReducer,movieAction}