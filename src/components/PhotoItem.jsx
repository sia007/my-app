import React from "react";
import "./VideoItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";



const PhotoItem = ({ video, onVideoSelect }) => {
  const [selectedDiv, setSelectedDiv] = useState(false);
  return (
    <div onClick={() => onVideoSelect(video)}  >
 <div
        className={`section-divs ${
          selectedDiv === "div1" ? " selected" : undefined
        }`}
        onClick={() => setSelectedDiv("div1")}
      >
      <div class = "container-photo ">
      <img  className= "img2 center-block" alt= {video.description}  width="100%" height="40%" style= {{marginBottom: "10px"}} src={video.urls.small} />
      </div>
      <div className="content">
        <div className="header"></div>
      </div>
      </div>
    </div>
  )
}

export default PhotoItem;
