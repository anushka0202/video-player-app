import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video, onEnded }) => {
  return (
    <div>
      <ReactPlayer
        url={video.sources}
        playing={true}
        controls
        width="100%"
        height="auto"
        autoPlay
        onEnded={onEnded}
      />

      <div>
        <h3 style={{ color: "#1b2021" }}>{video.title}</h3>
        <p style={{ color: "#30343f" }}>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
