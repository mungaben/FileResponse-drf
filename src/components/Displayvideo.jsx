import React from "react";
import ReactPlayer from "react-player";

const Displayvideo = async ({ mydata }) => {
    console.log(mydata)
  return (
    <div>
      {mydata.map((dats, idx) => {
       

          <ReactPlayer
            url="https://www.youtube.com/watch?v=xjMP0hspNLE&t=4931s"
            className="react-player"
            controls
            width="320px"
            height="180px"
          />
     
      
      })}
    </div>
  );
};

export default Displayvideo;
