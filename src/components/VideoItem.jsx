import React from "react";
import "./VideoItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useState } from "react";
import ReactPlayer from "react-player";



const VideoItem = ({ video, onVideoSelect }) => {

const [ISplaying, setIsPlaying] = useState(false);

  return (
    <div   >
    
    
    <ReactPlayer  onPlay={() => setIsPlaying(true) }  onStart={() => onVideoSelect(video) }  className= "mt-5"
  width="100%" height="60%" style={ISplaying ? {border: "2px solid red"}:{}}  url={`https://www.youtube.com/embed/${video.id.videoId}`} />
      <div className="content">

      </div>
    </div>
  )
}


export default VideoItem;
