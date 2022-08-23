import {axiosInstance} from "./axios.service";

import {urls} from "../constans";

const movieService= {
   getAll:(page=1)=> axiosInstance.get(urls.movie,{params:{page}}),
   getAllGanre:(page=1,ganre)=> axiosInstance.get(`${urls.movie}?with_genres=${ganre}`,{params:{page}}),
   sortMovie:(searcho,page=1)=>axiosInstance.get(`${urls.search}?query=${searcho}`,{params:{page}})
}
export {movieService}