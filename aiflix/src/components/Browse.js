import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  useNowPlayingMovies();
  useUpComingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const gptSearchView = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div>
      <Header /> 
      {gptSearchView ? <GPTSearch/> : 
      <>
      <VideoContainer />
      <MoviesContainer/>
      </>}
    </div>
  )
}

export default Browse;
