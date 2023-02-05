import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import ReactPlayer from 'react-player'
// import js-file-download from 'js-file-download'
// var fileDownload = require('js-file-download');


function App() {
  const [data, setdata] = useState()
  const [reload, setReload] = useState(0);
  const videoref=useRef()
  const get_video=()=>{
    axios.post("http://localhost:8000/downloads/play/",{},{
      responseType: 'blob',
    }
   ,{
      body:{
        urlm:"https://www.youtube.com/watch?v=xjMP0hspNLE&t=4931s"
      }
    }).then((res)=>{
      // console.log((res.data) )
      const datas= URL.createObjectURL(res.data)
      setdata(datas)
      console.log(datas)
     
      // if(!data){
      //   URL.revokeObjectURL(res.data)
      //    console.log(data)

      //  const datas= URL.revokeObjectURL(res.data)
      //  setdata(datas)
      // }else{
      //   URL.revokeObjectURL(data)
      //   setdata(null)
      //   console.log(data)
      // }
     
    
    }).catch((errors)=>{
      console.log(errors)

    });
    
     
  }
  useEffect(()=>{
    get_video()

  },[reload])
  const handleReload = () => {
    if(data){
      URL.revokeObjectURL(data);
      // console.log(videoref.current)
    }
    setReload(prevReload => prevReload + 1);
 
    // console.log(URL.revokeObjectURL(videoref.current))
  };

  return (
    <div className="App">
     <ReactPlayer url={data}   className='react-player'
          playing
          controls
          width='320px'
          height='180px' />
     <button onClick={handleReload}> reload</button>
     {/* <input type="file" name="kamu" id=""  value={data}/> */}
     
 




     
      

     
    </div>
  )
}

export default App
