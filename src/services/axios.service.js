import axios from "axios";

import {baseURL} from "../constans";

const axiosInstance = axios.create({baseURL});
axiosInstance.interceptors.request.use((config)=>{
    const access='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWU3NjhkMWJlYjBlNzA1N2Y4MDdmMmY1NmZmZDYyMSIsInN1YiI6IjYyZTJlMGJmNjdlMGY3MDA2MTdmNTkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.skKCQqfNp809e8S-GyK9a5aqIurHRw9QH6lqKtvvYX4';
    if(access){
        config.headers.Authorization=`Bearer ${access}`
    }
    return config
})

export {axiosInstance}