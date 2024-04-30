import React from 'react'

export default function EarthHero() {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("earth.jpg")' }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-6xl font-semibold text-white text-center">Welcome</h1>
                <h1 className="text-4xl font-medium text-white text-center">To a New Space</h1>
                <h1 className="text-4xl font-bold text-[#E84D54]">Experience</h1>
            </div>
        </div>
    )
}
