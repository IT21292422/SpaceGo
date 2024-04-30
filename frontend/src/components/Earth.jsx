import React from 'react'
import EarthHero from './EarthHero'
import EPIC from './EPIC'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Earth() {
  return (
    <>
    <div className="relative">
        <EarthHero/>
        <div className="absolute inset-x-0 top-0 z-10">
            <Navbar />
        </div>
    </div>
    <EPIC/>
    <Footer/>
    </>
  )
}
