import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";


const Displayvideo = ({ data ,setdownload}) => {
  console.log("data", data);
  const [reload, setReload] = useState(true);
  const[homedata,sethomedata]=useState()




  const homepage_data=()=>{
    const hompage=axios.get("http://localhost:8000/downloads/get_videos/").then((res)=>{
      console.log("datasss",res.data)
      sethomedata(res.data)
    }).catch((errors)=>{
      console.log(errors)
    })

    
  }
  useEffect(() => {homepage_data()}, [reload]);

  if (data) {
   
    const mydatas=data.slice(1-6)
    console.log(mydatas)
    return (
      <div>
        <div>
          {mydatas.map((ids, index) => {
            const urls=`https://www.youtube.com/watch?v=${ids}`
            console.log(urls)
            return (
              <div key={index}>
                <ReactPlayer
                  className="react-player"
                  url={urls}
                  controls
                  width="100%"  
                />
                <button onClick={
                    () => {setReload(false)
                        setdownload(ids)
                    }
                    
                    }>
                  reload
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div>
        {/* if no data fallback homepage */}
        { homepage_data &&
          homepage_data.map((datas, index) => {
            <div key={index}>
              
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${datas}`}
              controls
              width="100%"  
            />
            <button onClick={
                () => {setReload(false)
                    setdownload(ids)
                }
                
                }>
              reload
            </button>
          </div>
            
          })}
      </div>
    
    </div>
  );
};
export default Displayvideo;
