import React, { useContext } from "react";
import "./menuBar.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="menuBar">
      <div className="container">
        <Link to={"/profile/:" + user.id} style={{ textDecoration: "none" }}>
          <div className="user">
            <img src={"/upload/"+user.profilepic} />
            <span style={{ fontWeight: "600" }}>{user.name}</span>
          </div>
        </Link>
        <div className="item">
          <img src="/assests/friends.png" />
          <span>Your Friends</span>
        </div>
        <div className="item">
          <img src="/assests/groups.png" />
          <span>Your Groups</span>
        </div>
        <div className="item">
          <img src="/assests/market.png" />
          <span>Marketplace</span>
        </div>
        <div className="item">
          <img src="/assests/clock.png" />
          <span>My Memories</span>
        </div>
        <div className="item">
          <img src="/assests/watch.jpeg" />
          <span>Watch Now</span>
        </div>
        <hr />
        <span className="topic">Your shortcuts</span>
        <div className="item">
          <img src="/assests/events.png" />
          <span>Reacent Events</span>
        </div>
        <div className="item">
          <img src="/assests/gallery.jpeg" />
          <span>Photo Gallery</span>
        </div>
        <div className="item">
          <img src="/assests/messages.png" />
          <span>New Messages</span>
        </div>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <div className="item logout">
            <img src="/assests/logout.png" />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
