import React, { useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import {addTrailerVideo} from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoBackGround = ({movieId}) => {
    const [trailerId, setTrailerId] = useState(null);

    const dispatch = useDispatch();
    const trailerVideo = useSelector((state) => state.movies.movieTrailer);

    const getMovieVideo = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const videos = json.results.filter((video) => video.type === "Trailer");
        const trailer = videos.length ? videos[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        setTrailerId(trailer.key);
    };

    useEffect(()=>{
        getMovieVideo();
    },[])
    return (
    <div className="relative w-full aspect-video overflow-hidden scale-150">
        <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=fbddYji1F8s`}
        title="YouTube trailer"
        allow="autoplay;"
        />
    </div>
    )

}

export default VideoBackGround
