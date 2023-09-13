import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../AxiosInstance/AxiosInstance'

export default function Details() {
  let [movie, setMovie] = useState({})
  let { id } = useParams()
  useEffect(function () {
    // axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=585c9df48b585c27f47b0ca2cf34ea31`).then((res) => {
      axiosInstance.get(`/${id}`).then((res) => {
      console.log(res);
      setMovie(res.data)

    }).catch((err) => {
      console.log("error", err);
    })
    console.log(movie)
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className='row my-4' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", maxHeight: "510px" }}>
          <div className='col-3'>
            <img className='col-11 my-4 rounded-3' style={{ maxHeight: "80%" }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
          <div className='col-6 text-light fw-bold'>
            <h3 className='text-light fw-bold'>{movie.title}</h3><br />
            {movie.genres && (<>
              <span className='text-light fs-4'>
                {movie.release_date} {movie.genres.map(function (genre, index) {
                  return <span key={index}>{genre.name},</span>;
                })}
       
              </span>
              <hr/>
                <span>{movie.vote_average*10}userScore</span>
                <h4>
                  Overview
                </h4>
                <span>{movie.overview}</span>
                </> )}
          </div>
        </div>

      </div>
    </>
  )
}
