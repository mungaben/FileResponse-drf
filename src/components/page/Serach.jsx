import React, { useEffect, useState } from "react";
import Displayvideo from "../Displayvideo";
import axios from "axios";
import Searchtab from "../Searchtab";

const Serach = () => {
  const [data, setdata] = useState([]);
  const [download, setdownload] = useState();
  console.log(download);
  if (download) {
    console.log("hello");
    const get_video = () => {
      axios
        .post(
          "http://localhost:8000/downloads/video/",
          {
            urlm: `${download}`,
          },
          {
            responseType: "blob",
          }
        )
        .then((res) => {
          console.log("res data yt",res.data);
          console.log(download);
          setdownload();
          const datas = URL.createObjectURL(res.data);
          const link = document.createElement("a");
          link.href = datas;
          link.setAttribute("download","download.mp4");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // console.log(datas);
        })
        .catch((errors) => {
          console.log(errors);
        });
    };
    get_video();
  }

  return (
    <div>
       <Searchtab setdata={setdata} data={data} />
       

      <Displayvideo setdata={setdata} data={data} setdownload={setdownload} />
      hello
    </div>
  );
};

export default Serach;
