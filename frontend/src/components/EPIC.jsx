import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function EPIC() {
    const [data, setData] = useState([""]);
    const [isLoading, setIsLoading] = useState(true);

    const retrieveData = () => {
        axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${import.meta.env.VITE_apikey}`)
            .then((res) => {
                const photos = res.data.map(photo => ({
                    image: `https://epic.gsfc.nasa.gov/archive/natural/${photo.date.slice(0, 4)}/${photo.date.slice(5, 7)}/${photo.date.slice(8, 10)}/png/${photo.image}.png`,
                    date: photo.date,
                    caption: photo.caption
                }));
                setData(photos);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    useEffect(() => {
        retrieveData();
    }, []);

    const renderImages = data.map((photo, index) => {
        return (
            <>
            {
            isLoading ? (
                <span className="loading loading-bars loading-lg"></span>
            ) : (
                <img key={index} src={photo.image} />
                )
            }    
            </>
        )
    })



    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white mb-8 mt-8">Images From<span className="text-[#E84D54]">&nbsp;EPIC</span></h1>
            <div className="grid justify-items-center lg:grid-cols-2 items-center">
                <img src="epic.png" className="h-[500px] object-cover p-10" />
                <div className="card bg-gradient-to-r from-[#c04e64] to-[#7F3547] mx-5 p-4 mb-3 h-fit lg:mr-10">
                    <p className="text-lg text-center text-white">Some of the daily images collected by DSCOVER's Earth Polychromic Imaging Camera(EPIC) instrument are shown below. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD(Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope</p>
                </div>
            </div>
            <h1 className="text-yellow-300 text-center"> Swipe to see some of the cool photos taken by EPIC</h1>
            <div className="carousel rounded-box h-96">
                <div className="carousel-item">
                    {renderImages}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-gray-300 text-center pb-10">
                <h1>{data[0].caption}</h1>
                <h1>{data[0].date}</h1>
            </div>
        </>
    )
}
