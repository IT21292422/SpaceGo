import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        <img src="hero.jpg" className="absolute inset-0 object-cover w-full h-full" />
        <div className="z-10">
          <h1 className="text-6xl md:text-7xl font-semibold text-white text-center">Welcome</h1>
          <h1 className="text-4xl md:text-5xl font-medium text-white text-center">To a New Space</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E84D54] text-center">Experience</h1>
        </div>
      </div>
    </>
  )
}
