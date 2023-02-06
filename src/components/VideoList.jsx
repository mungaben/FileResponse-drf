import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JSZip from "jszip";
const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/downloads/get_data/",
    {
      urlm:"react.js"
    }, {
      
      responseType: 'arraybuffer'
    })
    .then(res => {
      const zipFile = new Blob([res.data], { type: 'application/zip' });
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const zip = new JSZip();
        zip.loadAsync(e.target.result)
        .then(zip => {
          const videoFiles = [];
          for (const file in zip.files) {
            zip.files[file].async('blob')
            .then(blob => {
              videoFiles.push(blob);
            });
          }
          setVideos(videoFiles);
          setLoading(false);
        });
      };
      fileReader.readAsArrayBuffer(zipFile);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {videos.map((video, index) => (
        <video key={index} controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default VideoList;
