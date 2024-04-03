import React, { useContext } from "react";
import "./post.scss";
import SinglePost from "../singlePost/SinglePost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ userId }) => {
  const { user } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://social-media-app-ygkk.onrender.com/api/posts", {
          params: user,
        })
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <div className="post">
      {data && data.map((post) => <SinglePost post={post} key={post.id} />)}
    </div>
  );
};

export default Post;
