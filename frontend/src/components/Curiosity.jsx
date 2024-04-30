import React from 'react'

export default function Curiosity() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-white mb-8 mt-8">Curiosity<span className="text-[#E84D54]">&nbsp;Rover</span></h1>
    <div className="grid justify-items-center lg:grid-cols-2 items-center">
        <img src="rover.jpg" className="h-[500px] object-cover p-10" />
        <div className="card bg-gradient-to-r from-[#c04e64] to-[#7F3547] mx-5 p-4 mb-3 h-fit lg:mr-10">
            <p className="text-lg text-justify text-white mb-5">Curiosity, was the largest and most capable rover ever sent to Mars when it launched in 2011. Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.</p>
            <p className="text-lg text-justify text-white">Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance, and a drill to collect powdered rock samples. It hunts for special rocks that formed in water and/or have signs of organics.</p>
        </div>
    </div>
    <h1 className="text-yellow-300 text-center"> Select a camera from below to view some of the pictures taken by Curiosity Rover</h1>
    </>
  )
}
