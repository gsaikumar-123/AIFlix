import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name : 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        removeNowPlayingMovies : (state) => {
            state.nowPlayingMovies = [];
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, removeNowPlayingMovies,addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;