import React from 'react'
import MarsHero from './MarsHero'
import Rover from './Rover'
import Navbar from './Navbar'
import Curiosity from './Curiosity'
import Footer from './Footer'

export default function Mars() {
  return (
    <>
    <div className="relative">
        <MarsHero/>
        <div className="absolute inset-x-0 top-0 z-10">
            <Navbar />
        </div>
    </div>
    <Curiosity/>    
    <Rover/>
    <Footer/>
    </>
  )
}
