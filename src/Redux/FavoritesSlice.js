// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        movies: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.movies.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;