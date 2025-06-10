import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'

const VideoContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies)
  if (!movies || movies.length === 0) return null

  const mainMovie = movies[0]
  const { original_title, overview, id } = mainMovie

  return (
    <div className="relative overflow-x-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  )
}

export default VideoContainer
