import React from "react";

const PlaylistItem = ({ video, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(video)}
      className={`playlist-item ${isSelected ? "selected" : ""}`}
    >
      <div style={{ width: "100%" }}>
        <h3>{video.title}</h3>
        <p className="description">{video.description}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
