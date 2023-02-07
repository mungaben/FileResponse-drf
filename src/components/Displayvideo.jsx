import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Displayvideo = ({ data, setdownload }) => {
  console.log("data", data);
  const [reload, setReload] = useState(true);
  const [homedata, sethomedata] = useState();

  const homepage_data = () => {
    const hompage = axios
      .get("http://localhost:8000/downloads/get_videos/")
      .then((res) => {
        console.log("datasss", res.data);
        sethomedata(res.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    homepage_data();
  }, [reload]);

  if (data) {
    const mydatas = data.slice(1 - 13);
    console.log(mydatas);
    return (
      <div className=" mt-2 bg-slate-300  p-2 overflow-x-scroll">
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
          {mydatas.map((ids, index) => {
            const urls = `https://www.youtube.com/watch?v=${ids}`;
            console.log(urls);
            return (
              <div key={index}>
                <div>
                  <ReactPlayer
                    className=" p-2 bg-slate-400 m-3"
                    url={urls}
                    controls
                    width="100%"
                  />
                </div>
                <button
                  className=" rounded-lg hover:ring-1 shadow-lg ring-slate-100 text-slate-900 w-full  m-3 p-2 pt-0.5 mt-0 font-black capitalize text-xl"
                  onClick={() => {
                    setReload(false);
                    setdownload(ids);
                  }}
                >
                  &#10167;
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
        {homepage_data &&
          homepage_data.map((datas, index) => {
            <div key={index}>
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${datas}`}
                controls
                width="100%"
              />
              <button
                onClick={() => {
                  setReload(false);
                  setdownload(ids);
                }}
              >
                reload
              </button>
            </div>;
          })}
      </div>
    </div>
  );
};
export default Displayvideo;
