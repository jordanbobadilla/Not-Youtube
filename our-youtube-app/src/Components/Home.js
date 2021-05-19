import { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [defaultMessage, setDefaultMessage] = useState("There are no videos");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // const res = await axios.get("https://www.googleapis.com/youtube/v3/search")
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
        <h3>{defaultMessage}</h3>
      </section>
    </div>
  );
};

export default Home;
