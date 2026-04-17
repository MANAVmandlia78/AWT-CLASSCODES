import React, { useState } from "react";
import "./App.css";

function App() {
  const videos = [
    {
      id: 1,
      title: "React Tutorial",
      url: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      url: "https://www.youtube.com/embed/W6NZfCO5SIk",
    },
    {
      id: 3,
      title: "Node JS Crash Course",
      url: "https://www.youtube.com/embed/fBNz5xF-Kx4",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="container">
      <h1>🎬 YouTube Clone</h1>

      <div className="main">
        {/* Video Player */}
        <div className="player">
          <iframe
            width="100%"
            height="400"
            src={currentVideo.url}
            title={currentVideo.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <h3>{currentVideo.title}</h3>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <h3>📃 Videos</h3>

          {videos.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => setCurrentVideo(video)}
            >
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;