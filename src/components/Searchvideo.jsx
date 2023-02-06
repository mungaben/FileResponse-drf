import { useEffect, useRef, useState } from "react";

import axios from "axios";
import ReactPlayer from "react-player";

const Searchvideo = () => {
  const [data, setdata] = useState();
  const [reload, setReload] = useState(0);
  const videoref = useRef();
  const get_video = () => {
    axios
      .post(
        "http://localhost:8000/downloads/play/",
        {
          urlm: "https://www.youtube.com/watch?v=xjMP0hspNLE&t=4931s",
        },
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        // console.log((res.data) )
        const datas = URL.createObjectURL(res.data);
        setdata(datas);
        console.log(datas);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    get_video();
  }, [reload]);
  const handleReload = () => {
    if (data) {
      URL.revokeObjectURL(data);
    }
    setReload((prevReload) => prevReload + 1);
  };
  return (
    <div>
      <div className="App">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xjMP0hspNLE&t=4931s"
          className="react-player"
          controls
          width="320px"
          height="180px"
        />
        <button onClick={handleReload}> reload</button>
        <ReactPlayer
          url={data}
          className="react-player"
          controls
          width="320px"
          height="180px"
        />
      </div>
    </div>
  );
};

export default Searchvideo;
