import { useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [defaultMessage, setDefaultMessage] = useState("There are no videos");
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${input}&videoTypeUnspecified=videoT&key=${process.env.REACT_APP_API_KEY}`
      );
      debugger;
      setVideos(res.data.items);
      setDefaultMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home-container">
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={input} placeholder="Search" />
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
