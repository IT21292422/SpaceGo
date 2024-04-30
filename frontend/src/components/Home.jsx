import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import APOD from './APOD'
import Footer from './Footer'

export default function Home() {
    return (
        <>
            <div className="relative">
                <Hero />
                <div className="absolute inset-x-0 top-0 z-10">
                    <Navbar />
                </div>
            </div>
            <APOD />
            <Footer/>
        </>
    )
}
