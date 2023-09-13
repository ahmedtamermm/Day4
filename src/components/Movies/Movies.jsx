import  { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "./movies.css"
import { Link } from 'react-router-dom';
import axiosInstance from '../../AxiosInstance/AxiosInstance';
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { addToFavorites, removeFromFavorites } from "../../Redux/FavoritesSlice";
// import { Button } from 'bootstrap';


export default function Movies() {
  let [movies, setMovies] = useState([])
  let [page, setPage] = useState(1)

  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();

  useEffect(function () {
    axiosInstance.get(`/popular?page=${page}`).then((res) => {
      setMovies(res.data.results)
    }).catch((err) => { console.log(err) })
  },)
  // const movies = useLoaderData()
  function previousPage(){
    if (page == 1)
    {
      setPage(page);
    }else{
      setPage(page - 1);
    }
  }
  function nextPage(){
    setPage(page + 1);

  }
  const isFavorite = (movie) => favorites.some((favMovie) => favMovie.id === movie.id);

  const handleAddToFavorites = (movie) => {
      if (!isFavorite(movie)) {
          dispatch(addToFavorites(movie));
      } else {
          dispatch(removeFromFavorites(movie));
      }
  }; 
  return (
    <>
      <div className='container'>
      <div className='row'>
        {movies.map((movie, index) => {
          return<Card key={index} className='col-2 m-2 movies_card p-0'>
              <Card.Img className='rounded-top' variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <Card.Body>
                <Card.Title className='cardTitle'><Link to={`/movies/${movie.id}`}>{movie.title}</Link> </Card.Title>
                <Card.Text>
                 {movie.release_date}
                </Card.Text>
            {(isFavorite(movie)) ? <AiFillHeart className='fs-2 position-absolute top-0 end-0 text-danger' onClick={() => { handleAddToFavorites(movie) }} /> : <AiOutlineHeart className='fs-2 position-absolute top-0 end-0 ' onClick={() => { handleAddToFavorites(movie) }} />
                }
              </Card.Body>
            </Card>
        
        })}
        
        </div>
        <div className='d-flex justify-content-center'>
        <button className='btn btn-primary me-2' onClick={previousPage}>Previous</button>
      <button className='btn btn-primary' onClick={nextPage}>Next</button>
        </div>
      </div>
    
    </>
  )
}


