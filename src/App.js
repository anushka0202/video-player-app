import React, { useState } from "react";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/Navbar";
import mediaJSON from "./mediaData";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState(mediaJSON.categories[0].videos);
  const [selectedVideo, setSelectedVideo] = useState(playlist[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  //to autoplay the next video in queue
  const handleVideoEnd = () => {
    // Increment the selected video index
    const currentVideoIndex = playlist.findIndex(
      (video) => video.title === selectedVideo.title
    );
    const nextVideoIndex = (currentVideoIndex + 1) % playlist.length;
    const nextVideo = playlist[nextVideoIndex];
    setSelectedVideo(nextVideo);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <div className="video-player-container">
          <VideoPlayer video={selectedVideo} onEnded={handleVideoEnd} />
        </div>
        <div className="playlist-container">
          <h2>Playlist</h2>
          <Playlist
            playlist={playlist}
            setPlaylist={setPlaylist}
            onVideoSelect={handleVideoSelect}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
