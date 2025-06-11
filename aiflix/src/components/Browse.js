import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';

const Browse = () => {
  useNowPlayingMovies();
  useUpComingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header /> 
      <VideoContainer />
      <MoviesContainer/>
    </div>
  )
}

export default Browse;
