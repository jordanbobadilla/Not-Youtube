import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Video.css";

const Video = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [videoObj, setVideoObj] = useState({});
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "comment") {
      setComment(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments({
      name: name,
      comment: comment,
    });
  };

  const handleClick1 = () => {
    if (name && comment) {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    setCommentList((prevCommentList) => [...prevCommentList, comments]);
  }, [comments]);

  const { id } = props.match.params;

  const fetchViews = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`
      );
      if (res.data.items[0]) {
        setVideoObj(res.data.items[0]);
      } else {
        alert("THIS IS A CHANNEL, PLEASE GO BACK AND PICK A VIDEO");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchViews();
  }, []);

  return (
    <main className="Video">
      <section className="Youtube-sec">
        <div className="Youtube">
          <Link to="/">
            <button>Go Back</button>
          </Link>
          <YouTube className="video-box" videoId={id} />
        </div>
        <div className="title">
          <h3>{videoObj.snippet && videoObj.snippet.title}</h3>
          <p>
            {videoObj.statistics &&
              Number(videoObj.statistics.viewCount).toLocaleString()}{" "}
            Views
          </p>
        </div>
        <hr />
        <div className="description">
          <p>{videoObj.snippet && videoObj.snippet.channelTitle}</p>
          <p>{videoObj.snippet && videoObj.snippet.description}</p>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <div className="comments">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name..."
              value={name}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              id="comment"
              type="text"
              placeholder="..."
              value={comment}
              required
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick1}>Submit</button>
        </div>
        <h3>{counter} Comments</h3>
        <ul className="comment-sec">
          {commentList.map((comment) => {
            if (comment.name) {
              return (
                <li>
                  <h3>{comment.name}</h3>
                  <p>{comment.comment}</p>
                </li>
              );
            } else {
              return <ul></ul>;
            }
          })}
        </ul>
      </form>
    </main>
  );
};

export default Video;
