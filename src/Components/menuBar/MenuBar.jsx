import React from "react";
import "./menuBar.scss";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="container">
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&usqp=CAU" />
          <span>Shehani</span>
        </div>
        <div className="item">
          <img src="assests/friends.png" />
          <span>Friends</span>
        </div>
        <div className="item">
          <img src="assests/groups.jpeg" />
          <span>Groups</span>
        </div>
        <div className="item">
          <img src="assests/market.png" />
          <span>Marketplace</span>
        </div>
        <div className="item">
          <img src="assests/clock.png" />
          <span>Memories</span>
        </div>
        <div className="item">
          <img src="assests/watch.jpeg" />
          <span>Watch</span>
        </div>
        <hr />
        <span>Your shortcuts</span>
        <div className="item">
          <img src="assests/events.png" />
          <span>Events</span>
        </div>
        <div className="item">
          <img src="assests/gaming.png" />
          <span>Watch</span>
        </div>
        <div className="item">
          <img src="assests/gallery.jpeg" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src="assests/messages.png" />
          <span>Messages</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
