//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dumdata from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dumdata);

  return (
    <div className="posts-container-wrapper">
      {data.map(post => (
        <Post key={post.id} post={post}/> 
      ))}
    </div>
  );
};

export default PostsPage;

