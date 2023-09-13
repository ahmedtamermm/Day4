import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/FavoritesSlice";
import { Link } from "react-router-dom";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.movies);
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (movie) => {
        dispatch(removeFromFavorites(movie));
    };

    return (
        <div className="container">
            <h1 className="text-center mt-3 mb-3">Favorite Movies</h1>
            <div className="row">
                {favorites.map((movie) => (
                    <div className="col-4 p-3" key={movie.id}>
                        <div className="card">
                            <div className="row m-0 p-0">
                                <div className="col-4 p-0">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        className="img-fluid rounded-start"
                                        alt={movie.title}
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <Link className="text-decoration-none" to={`/movie/${movie.id}`}>
                                            <h6 className="card-title">{movie.title}</h6>
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm mx-1"
                                            onClick={() => handleRemoveFromFavorites(movie)}
                                        >
                                            Remove from Favorites
                                        </button>
                                        <p className="card-text">Release Date: {movie.release_date}</p>
                                        <p className="card-text">Rating: {movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
