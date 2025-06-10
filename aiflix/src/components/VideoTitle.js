import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 pt-64 px-20 text-white h-full w-full z-20">
      <h1 className="text-5xl font-bold mb-6 drop-shadow">{title}</h1>
      <p className="w-1/3 mb-6 text-lg drop-shadow">{overview}</p>
      <div>
        <button className="bg-white text-black font-semibold py-2 px-6 text-lg rounded hover:bg-opacity-80 mr-4">▶️ Play</button>
        <button className="bg-gray-700 text-white font-semibold py-2 px-6 text-lg rounded bg-opacity-70 hover:bg-opacity-50">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
