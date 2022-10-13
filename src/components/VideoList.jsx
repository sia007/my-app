import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {

  return (
    <div className="ui relaxed divided list">
      {videos.map((video,index) => {
      if (index < 2){
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        }
      })}
    </div>
  )
}

export default VideoList;
