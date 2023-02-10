import React, { useEffect, useState } from "react";

import { CgSearch } from "react-icons/cg";
import axios from "axios";
// import Store from "./Mystore";

const Searchtab = ({ setdata, access }) => {
  const [search, setsearch] = useState("Benito");
  const [reload, setreload] = useState(true);

  // get video ids from django based on search inputs
  const get_data = () => {
    const search_video = axios
      .post(
        "http://localhost:8000/downloads/get_videos/",
        {
          urlm: search,
        },
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      )
      .then((res) => {
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
  }, [reload]);

  return (
    <div className=" fixed  p-5 w-full rounded-lg    bg-transparent">
      <div className=" flex justify-center items-center mt-2  bg-right-bottom  ">
        <form
          action=""
          method="post"
          onSubmit={handle_form}
          className="bg-transparent p-2"
        >
          <input
            className=" outline-none hover:rounded-xl rounded-md hover:shadow-xl text-center text-lg font-black capitalize hover:bg-slate-300"
            type="text"
            name="search"
            id="serbtn"
            placeholder=" search videos"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => setreload(!reload)}
            className="text-center  text-lg hover:bg-slate-200 rounded-lg  scale-125 "
          >
            {" "}
            &#128073;{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchtab;
