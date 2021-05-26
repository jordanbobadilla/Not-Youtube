import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Video from "./Components/Video";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");
  const [defaultMessage, setDefaultMessage] = useState(
    "No Search Results Yet! Please Submit Your Search Above!"
  );

  const fetchVideos = async () => {
    if (input) {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&videoTypeUnspecified=videoT&key=${process.env.REACT_APP_API_KEY}`
        );
        setVideos(res.data.items);
        setDefaultMessage("");
        setInput("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/video/:id"} component={Video} />
        <Route exact path={"/"}>
          {" "}
          <Home
            handleChange={handleChange}
            input={input}
            defaultMessage={defaultMessage}
            fetchVideos={fetchVideos}
            videos={videos}
          />{" "}
        </Route>
        <Route path={"/about"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
