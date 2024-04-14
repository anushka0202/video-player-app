import React, { useState, useRef } from "react";
import PlaylistItem from "./PlaylistItem";

const Playlist = ({ playlist, setPlaylist, onVideoSelect, selectedVideo }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState(playlist);
  const [searchTerm, setSearchTerm] = useState("");
  const dragStartPosition = useRef(null);
  const dragOverPosition = useRef(null);

  //search logic
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredPlaylist(playlist);
    } else {
      const filtered = playlist.filter((video) =>
        video.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPlaylist(filtered);
    }
  };


  //logic for reordering the playlist
  const handleDragStart = (position) => {
    dragStartPosition.current = position;
  };

  const handleDragEnter = (position) => {
    dragOverPosition.current = position;
    const newPlaylist = [...playlist];
    const draggingVideo = newPlaylist[dragStartPosition.current];
    if (!draggingVideo) return;

    newPlaylist.splice(dragStartPosition.current, 1);
    newPlaylist.splice(dragOverPosition.current, 0, draggingVideo);

    const reorderedPlaylist = newPlaylist.map((video, index) => ({
      ...video,
      order: index,
    }));

    dragStartPosition.current = position;
    dragOverPosition.current = null;

    setPlaylist(reorderedPlaylist);
    setFilteredPlaylist(reorderedPlaylist);
  };

  return (
    <div className="playlist">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      {filteredPlaylist.map((video, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragOver={(e) => e.preventDefault()}
        >
          <PlaylistItem
            video={video}
            onClick={onVideoSelect}
            isSelected={video.title === selectedVideo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
