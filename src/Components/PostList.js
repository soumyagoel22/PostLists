import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters?limit=9&offset=50")
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error in Retreiving Data");
      });
  }, []);

  return (
    <>
      <h3 className="header">List Of Posts</h3>
      <div style={{ color: "red", fontSize: "20px" }}>{error}</div>
      <div className="wrapper">
        {post.length
          ? post.map((post) => (
              <div key={post.char_id}>
                <img className="img1" src={post.img} alt={post.nickname} />
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  {post.name}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default PostList;
