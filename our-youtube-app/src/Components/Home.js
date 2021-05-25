import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
require("dotenv").config();

const Home = ({ videos, fetchVideos, defaultMessage, input, handleChange }) => {
  // const {videoObj, setVideoObj} = useState({});

  // const fetchViews = async (videoId) =>{

  //     try {
  //       const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`)
  //       setVideoObj(res.data.items[0].statistics)
  //       debugger
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };

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
            // fetchViews(video.id.videoId)
            return (
              <Link to={`/Video/${video.id.videoId}`}>
                <li key={video.id.videoId}>
                  <section className="left-side">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="thumbnail"
                    />
                  </section>
                  <section className="right-side">
                    <h3>{video.snippet.title}</h3>
                    {/* <h1>{videoObj.viewCount}</h1> */}
                    <p>Channel: {video.snippet.channelTitle}</p>
                    {/* // views , name of channel, description */}
                    <p>Description: {video.snippet.description}</p>
                    {/* // views , name of channel, description */}
                  </section>
                </li>
              </Link>
            );
          })}
        </ul>
        <h3 className="no-search-results">{defaultMessage}</h3>
      </section>
    </div>
  );
};

export default Home;
