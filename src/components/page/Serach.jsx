import React, { useEffect, useState } from "react";
import Displayvideo from "../Displayvideo";
import axios from "axios";
import Searchtab from "../Searchtab";
import jwtDecode from "jwt-decode";
import { redirect } from "react-router-dom";

const Serach = () => {
  const [data, setdata] = useState([]);
  const [download, setdownload] = useState();

  const [access, setaccess] = useState(
    JSON.parse(localStorage.getItem("access"))
  );
  const local_access = JSON.parse(localStorage.getItem("access"));

  const decoded_token = jwtDecode(local_access);
  const refresh_token = JSON.parse(localStorage.getItem("refresh"));

  let isExpired = decoded_token.exp * 1000 < Date.now();


  // !isExpired && setaccess(local_access)

  const check_expirely = () => {
    if (isExpired) {
      axios
        .post("http://localhost:8000/api/token/refresh/", {
          refresh: refresh_token,
        })
        .then((res) => {
          setaccess(res.data.access);
        })
        .catch((errors) => {
          console.log("errors incl", errors);
        });
    }
  };
  useEffect(() => {
    // first_set()
    check_expirely();
  }, []);

  if (download) {
    // redirect("http://localhost:8000/downloads/video/");

 
    const get_video = () => {
      axios
        .post(
          "http://localhost:8000/downloads/video/",
          {
            urlm: `${download}`,
          },
          {
            headers: { Authorization: `Bearer ${access}` },
            responseType: "blob",
          },
          {}
        )
        .then((res) => {
          // low quality

          // console.log(download);
          setdownload();
          const datas = URL.createObjectURL(res.data);
          const link = document.createElement("a");
          link.href = datas;
          link.setAttribute("download", "download.mp4");
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
      <Searchtab setdata={setdata} data={data} access={access} />
      <Displayvideo
        setdata={setdata}
        data={data}
        setdownload={setdownload}
        access={access}
      />
    </div>
  );
};

export default Serach;
