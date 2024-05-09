import React, { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useMutationState,
} from "@tanstack/react-query";
import moment from "moment";

const Comments = ({ postId }) => {
  const { user } = useContext(AuthContext);
  const [desc, setDesc] = useState();
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios
        .get("http://localhost:3001/api/comments?postId=" + postId)
        .then((res) => {
          return res.data;
        }),
  });

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      await axios.post("http://localhost:3001/api/addcomment", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries();
    },
  });
  const handleClick = async (e) => {
    e.preventDefault();
    await mutation.mutate({ desc, user, postId });
    setDesc("");
  };
  console.log(mutation.error);

  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/"+user.profilepic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isPending
        ? "loading"
        : data.map((item) => (
            <div key={item.id} className="item">
              <div className="image">
                <img src={item.profilepic} />
              </div>
              <div className="desc">
                <div>{item.name}</div>
                <p>{item.desc}</p>
              </div>
              <div className="date">{moment(item.createdAt).fromNow()}</div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
