
import "./Home.css";
import { Link } from "react-router-dom";
import React from 'react';
require("dotenv").config()

const Home = ({videos, fetchVideos, defaultMessage,input, handleChange}) => {
  
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };
  return (
    <div className="home-container">
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <input className="search-input" onChange={handleChange} value={input} placeholder="Search" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="default-message">
        <ul>
          {videos.map((video) => {
            return (
              <Link to={`/Video/${video.id.videoId}`}>
                <li key={video.id.videoId}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                  />
                  <h3>{video.snippet.title}</h3>
                  {/* // views , name of channel, description */}
                </li>
              </Link>
            );
          })}
        </ul>
        <h3>{defaultMessage}</h3>
      </section>
    </div>
  );
};

export default Home;
