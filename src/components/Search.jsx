import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Displayvideo from "./Displayvideo";

const Search = () => {
  const [search, setsearch] = useState("futa");
  const [reload, setreload] = useState(true);
  const [mydata, setdata] = useState(["dNbDUhzW6gg", "SCoUCIVicVs"]);
  const get_data = () => {
    const search_video = axios
      .post("http://localhost:8000/downloads/get_videos/", {
        urlm: search,
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  mydata.map((dats, ind) => {
    console.log(dats);
  });

  const handle_form = (e) => {
    e.preventDefault();
    setreload(false);
  };
  useEffect(() => {
    get_data();
  }, [reload]);
  console.log(mydata.length);

  return (
    <div>
      <div>
        <form action="" method="post" onSubmit={handle_form}>
          <input
            type="text"
            name="search"
            id="serbtn"
            placeholder=" search videos"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
      <div>{<Displayvideo mydata={mydata} />}</div>
    </div>
  );
};

export default Search;
