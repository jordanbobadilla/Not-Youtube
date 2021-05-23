import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios"


const Video = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [videoObj, setVideoObj] = useState({});
  // dont need show list anymore unless we want to toggle between show list and not show

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

  useEffect(() => {
    setCommentList((prevCommentList) => [...prevCommentList, comments]);
  }, [comments]);

  const { id } = props.match.params;

  const fetchViews = async () => {
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`)
        setVideoObj(res.data.items[0])
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
      fetchViews()
  }, [])

  
  return (
    <main>
      <section>
        <Link to="/Home">
          <button>Go Back</button>
        </Link>
        <YouTube videoId={id} />
        <div>
            <h3>{videoObj.snippet&& videoObj.snippet.title}</h3>
            <p>{videoObj.statistics&& videoObj.snippet.viewCount} views</p>
        </div>
        <div>
            <p>{videoObj.snippet&& videoObj.snippet.channelTitle}</p>
            <p>{videoObj.snippet&& videoObj.snippet.description}</p>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="comment">Comment</label>
        <input
          id="comment"
          type="text"
          placeholder="..."
          value={comment}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
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
    </main>
  );
};

export default Video;
