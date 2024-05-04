import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function APOD() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const retrieveData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_apikey}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
      .catch((error) => {
        console.log(error.response.data);
      })
  }

  useEffect(() => {
    retrieveData()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white mb-8 mt-8">Picture Of The <span className="text-[#E84D54]">Day</span></h1>
      <div className="grid gap-5 lg:grid-cols-2 justify-items-center items-center lg:pr-20">
        {
          isLoading ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : (
            <div>
              <img src={data.url} className="h-[600px] object-cover p-10" />
            </div>
          )
        }
        {
          isLoading ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : (
            <div className="card bg-gradient-to-r from-[#c04e64] to-[#7F3547] mx-5 p-4 mb-3 h-fit">
            <h1 className="text-2xl text-center font-semibold text-white mb-2">{data.title}</h1>
            <p className="text-md text-center text-white">{data.explanation}</p>
            </div>
          )
        }
      </div >
    </>
  )
}
