# Video Player Application

Link: [https://video-player-anushka.netlify.app/](https://video-player-anushka.netlify.app/)

This is a simple video player application built with React. It allows users to play videos from a playlist, search for videos, reorder the playlist, and autoplay the next video after the current one finishes.

## Features

- Play/pause toggle
- Volume control
- Seeking
- Timer displaying current playback time and duration
- Autoplay
- Fullscreen mode
- Speed selector for playback speed adjustment
- Playlist reordering
- Video search functionality
- Autoplay for the next video after the current one finishes
- Responsive design for different screen sizes
- Hosted on Netlify for easy access

## Running the Application Locally

To run this application locally, follow these steps:

- Clone the repository to your local machine: `git clone https://github.com/your-username/video-player-app.git`
- Navigate to the project directory: `cd video-player-app`
- Install the dependencies: `npm install react-player`
- Start the development server: `npm start`
- Open your browser and go to http://localhost:3000 to view the application.

## Project Structure

The project structure is organized as follows:

video-player-app/\
  ├── public/\
  ├── src/\
  │   ├── components/\
  │   │   ├── Playlist.jsx\
  │   │   ├── PlaylistItem.jsx\
  │   │   ├── VideoPlayer.jsx\
  │   │   └── Navbar.jsx\
  │   ├── index.js\
  │   ├── index.css\
  │   ├── App.js\
  │   ├── App.css\
  │   └── mediaData.js\
  ├── README.md\
  └── package.json

- public: Contains static assets like images or favicon.
- src: Holds all source code.
  - components: Contains React components like Playlist, PlaylistItem, VideoPlayer, and Navbar.
      - Playlist.jsx: This component renders the playlist, allowing users to search for videos, reorder them, and select a video to play.
      - PlaylistItem.jsx: Represents a single item in the playlist. It displays video information and handles selection and drag-and-drop functionality.
      - VideoPlayer.jsx: Displays the video player interface, including controls for play/pause, seeking, volume, fullscreen mode, and speed selector. It also handles autoplay functionality and triggers the next video in the playlist when the current one ends.
      - Navbar.jsx: Renders a navigation bar at the top of the page.
  - index.js: Entry point of the application.
  - index.css: Global styles for the application.
  - App.js: Main component that orchestrates the application.
  - App.css: Component-specific styles.
  - mediaData.js: External file containing media information.
- README.md: Instructions and overview of the project.
- package.json: File containing project dependencies and scripts.

