import React from 'react'
import axios from "axios"

export default function Rover() {
    const[data,setData] = useState([]);  

  const retrieveData = () => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${import.meta.env.VITE_apikey}`).then((res)=>{
        setData(res.data);
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
  }
  
  useEffect(()=>{
    retrieveData()
  },[])

  return (
    <div class="grid grid-cols-3 gap-4">
        
    </div>
  )
}
