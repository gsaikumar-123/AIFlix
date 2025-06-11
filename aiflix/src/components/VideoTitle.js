import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-16 text-white bg-gradient-to-r from-black via-transparent to-transparent z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">{title}</h1>
      <p className="text-base md:text-lg max-w-xl mb-6 drop-shadow">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-opacity-80 transition">▶️ Play</button>
        <button className="bg-gray-700 bg-opacity-70 text-white font-bold py-2 px-6 rounded hover:bg-opacity-50 transition">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
