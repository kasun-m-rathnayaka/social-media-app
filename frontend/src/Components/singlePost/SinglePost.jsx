import React, { useState } from "react";
import "./singlePost.scss";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Comments from "../comments/Comments";

const SinglePost = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  //temp
  const liked = false;

  return (
    <div className="singlePost">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} />
          <div className="details">
            <Link
              to={`/profile/:${post.userId}`}
              style={{ textDecoration: "none" }}
            >
              <span>{post.name}</span>
            </Link>
            <span className="date">1 min ago</span>
          </div>
        </div>

        <MoreVertIcon />
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.image} />
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
          <span>12 Likes</span>
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <CommentRoundedIcon />2
        </div>
        <div className="item">
          <SendRoundedIcon />
          <span>share</span>
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
};

export default SinglePost;
