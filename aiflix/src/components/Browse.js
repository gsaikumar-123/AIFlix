import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoContainer from './VideoContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header /> 
      <VideoContainer />
    </div>
  )
}

export default Browse;
