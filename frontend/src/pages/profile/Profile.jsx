import React, { useContext } from "react";
import "./profile.scss";
import Post from "../../Components/post/Post";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = new useContext(AuthContext);
  console.log(user);
  return (
    <div className="profile">
      <div className="images">
        <img src={user.coverpic} alt="" className="cover" />
        <img src={user.profilepic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <div className="info"></div>
            <span>{user.name}</span>
            <div className="desc">{user.desc}</div>
            <button>follow</button>
          </div>
        </div>
      </div>
      <div className="post">
        <Post userId={user.id} />
      </div>
    </div>
  );
};

export default Profile;
