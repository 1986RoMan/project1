import {axiosInstance} from "./axios.service";

import {urls} from "../constans";

const genreService={
    getAll:()=>axiosInstance.get(urls.genre)
}
export {genreService}