import React from "react";
import "./home.scss";
import Post from "../../Components/post/Post";
import Share from "../../Components/share/Share";

const Home = () => {
  return (
    <div className="home">
      <Share />
      <Post />
    </div>
  );
};

export default Home;
