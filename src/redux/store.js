import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
  movieReducer,
    themeReducer,
});

const setupStore=()=>configureStore({
    reducer:rootReducer
})
export {setupStore}