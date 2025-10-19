import React from 'react'

function PageNotFound() {
  return (
       <div className="flex justify-center items-center h-screen bg-white">
      <video
        src="/Page not found.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg h-130"
      />
    </div>
  )
}

export default PageNotFound