import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const Video = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({
  });
  const [commentList, setCommentList] = useState([]);
  const [showComments, setshowComments] = useState(false);

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
    setshowComments(true);
    setComments({
      name: name,
      comment: comment,
    });
  };

  useEffect(() => {
    setCommentList( prevCommentList => [...prevCommentList, comments]);
  }, [comments]);

  const { id } = props.match.params;

  return (
    <main>
      <div>
        <button>Go Back</button>
        <YouTube videoId={id} />
      </div>
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
        { showComments ? commentList.map((comment) => {
          return (
            <li>
              <h3>{comment.name}</h3>
              <p>{comment.comment}</p>
            </li>
          );
        }) : <ul></ul>}
      </ul>
    </main>
  );
};

export default Video;
