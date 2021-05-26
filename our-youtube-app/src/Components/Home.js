import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";
require("dotenv").config();

const Home = ({ videos, fetchVideos, defaultMessage, input, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };
  return (
    <div className="home-container">
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="search-input"
              onChange={handleChange}
              value={input}
              placeholder="Search"
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="default-message">
        <ul>
          {videos.map((video) => {
            return (
              <Link to={`/video/${video.id.videoId}`}>
                <li key={video.id.videoId}>
                  <section className="left-side">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="thumbnail"
                    />
                  </section>
                  <section className="right-side">
                    <h3>{video.snippet.title}</h3>
                    <p>Channel: {video.snippet.channelTitle}</p>
                    <p>Description: {video.snippet.description}</p>
                  </section>
                </li>
              </Link>
            );
          })}
        </ul>
        {defaultMessage ? (
          <h3 className="no-search-results">{defaultMessage}</h3>
        ) : (
          <p></p>
        )}
      </section>
    </div>
  );
};

export default Home;
