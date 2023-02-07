import React, { useEffect, useState } from "react";




import axios from "axios";
// import Store from "./Mystore";

const Searchtab = ({setdata}) => {
  // console.log(data)
  const [search, setsearch] = useState("futa");
  const [reload, setreload] = useState(true);
  // const [data, setdata] = useState();

// get video ids from django based on search inputs
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
  const handle_form = (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
    get_data();
  },[reload]);

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
          <button type="submit" onClick={()=>setreload(!reload)}>search</button>
        </form>
      </div>
      
    </div>
  );
};

export default Searchtab;
