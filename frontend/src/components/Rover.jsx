import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Rover() {
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState('');

  const retrieveData = () => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=${import.meta.env.VITE_apikey}`).then((res) => {
      const photos = res.data.photos.slice(0, 20);
      setData(photos);
      console.log(data);
    })
      .catch((error) => {
        console.log(error.response.data);
      })
  }

  useEffect(() => {
    retrieveData()
  }, [camera])

  return (
    <>
    <div className="flex justify-center items-center mt-20 mb-20">
      <h1 className="text-3xl font-bold text-white mx-20">Select Mars Rover <span className="text-[#E84D54]">Camera</span></h1>
      <select className="select select-info w-full max-w-xs" onChange={(e) => setCamera(e.target.value)} defaultValue="fhaz">
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="mast">Mast Camera</option>
        <option value="chemcam">Chemistry and Camera Complex</option>
        <option value="mahli">Mars Hand Lens Imager</option>
        <option value="mardi">Mars Descent Imager</option>
        <option value="navcam">Navigation Camera</option>
        <option value="pancam">Panoramic Camera</option>
        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
      </select>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
      {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          data.map((photo) => (
            <div key={photo.id}>
              <img src={photo.img_src} alt={`Mars Rover Photo - ${photo.id}`} />
            </div>
          ))
        )}
      </div>
    </>
  )
}
