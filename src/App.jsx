import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setdata] = useState()
  const get_video=()=>{
    axios.post("http://localhost:8000/downloads/play/"
   ,{
      body:{
        urlm:"https://www.youtube.com/watch?v=xjMP0hspNLE&t=4931s"
      }
    }).then((res)=>{
      console.log((res.data) )
      setdata(res.data)
      const blob = new Blob([response.data], {type: 'video/mp4'});
      console.log(blob)
      const url = URL.createObjectURL(blob);
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      document.body.appendChild(video);


    }).catch((errors)=>{
      console.log(errors)

    })
  }
  useEffect(()=>{
    get_video()
  },[])

  return (
    <div className="App">
      

     
    </div>
  )
}

export default App
