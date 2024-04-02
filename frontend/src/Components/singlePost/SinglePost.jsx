import React, { useContext, useState } from "react";
import "./singlePost.scss";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import Comments from "../comments/Comments";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import moment from "moment";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useMutationState,
} from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const SinglePost = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["likes"],
    queryFn: () =>
      axios
        .get("http://localhost:3001/api/likes?postId=" + post.postId)
        .then((res) => {
          return res.data;
        }),
  });
  const liked = false;

  return (
    <div className="singlePost">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilepic} />
          <div className="details">
            <Link
              to={`/profile/:${post.userId}`}
              style={{ textDecoration: "none" }}
            >
              <span>{post.name}</span>
            </Link>
            <span className="date">{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>

        <MoreVertIcon />
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={"upload/" + post.img} />
      </div>
      <div className="info">
        <div className="left">
          <div className="item">
            {liked ? (
              <FavoriteRoundedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderRoundedIcon />
            )}
            <span>{data}</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <CommentRoundedIcon />
          </div>
          <div className="item">
            <ShareRoundedIcon />
          </div>
        </div>
        <div className="right">
          <BookmarkAddRoundedIcon />
        </div>
      </div>
      {commentOpen && <Comments postId={post.postId} />}
    </div>
  );
};

export default SinglePost;
