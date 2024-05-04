import React from 'react'

export default function MarsHero() {
  return (
    <div className="h-screen bg-fixed bg-center" style={{ backgroundImage: 'url("mars.jpg")' }}>
    <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl md:text-7xl font-semibold text-white text-center">Welcome</h1>
        <h1 className="text-4xl md:text-5xl font-medium text-white text-center">To The</h1>
        <h1 className="text-4xl md:text-5xl font-bold text-[#E84D54]">Red Planet</h1>
    </div>
</div>
  )
}
