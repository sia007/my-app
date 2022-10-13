import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
    {videos.map((video,index) => {

        return <PhotoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />

      
            })}

    </div>
  )
}

export default PhotoList;
