import {axiosInstance} from "./axios.service";

import {urls} from "../constans";

const movieService= {
   getAll:(page=1)=> axiosInstance.get(urls.movie,{params:{page}})
}
export {movieService}