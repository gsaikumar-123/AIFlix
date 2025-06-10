import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const trailerId = trailerVideo?.key;

  if (!trailerId) return

  return (
    <div className="relative w-full aspect-video overflow-hidden scale-150">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`}
        title="YouTube trailer"
        allow="autoplay;"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackGround;
