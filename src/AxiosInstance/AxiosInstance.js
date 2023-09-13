// import React from 'react'
import axios from 'axios'

    const axiosInstance=axios.create({
        baseURL:"https://api.themoviedb.org/3/movie",
        params:{
            "api_key":"585c9df48b585c27f47b0ca2cf34ea31"
        }
    })
  
export default axiosInstance