import React from "react";
import "./post.scss";
import SinglePost from "../singlePost/SinglePost";

const Post = () => {
  const posts = [
    {
      id: 1,
      name: "shehani",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "In a futuristic Western-themed amusement park, Westworld, the visitors interact with automatons. ",
      image:
        "https://images.unsplash.com/photo-1709113646175-dac6673b88f7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "kasun",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "In a futuristic Western-themed amusement park, Westworld, the visitors interact with automatons. ",
      image:
        "https://images.unsplash.com/photo-1709082804530-d588656ade88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="post">
      {posts.map((post) => (
        <SinglePost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
