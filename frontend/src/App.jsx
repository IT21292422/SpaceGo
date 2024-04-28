import APOD from "./components/APOD"
import Hero from "./components/Hero"
import Navbar from './components/Navbar'
import Rover from "./components/Rover"

function App() {

  return (
    <>

    <div className="relative">
    <Hero/>
    <div className="absolute inset-x-0 top-0 z-10">
    <Navbar/>
    </div>
    </div>

    <APOD/>
    <Rover/>
    </>
  )
}

export default App
