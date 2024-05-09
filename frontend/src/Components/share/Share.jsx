import React, { useContext, useState } from "react";
import "./share.scss";
import { AuthContext } from "../../context/AuthContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useMutationState,
} from "@tanstack/react-query";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const [desc, setDesc] = useState();
  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const fromData = new FormData();
      fromData.append("file", file);
      const res = await axios.post(
        "http://localhost:3001/api/upload",
        fromData
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      await axios.post("http://localhost:3001/api/post", newPost);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imageUrl = "";
    if (file) imageUrl = await upload();
    mutation.mutate({ desc, user, img: imageUrl });
    // console.log({ desc, user, img: imageUrl })
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={"/upload/"+user.profilepic} />
            <input
              type="text"
              placeholder={`What's on your mind ${user.name}`}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="right">
            {file && <img src={URL.createObjectURL(file)} className="file" />}
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src="/assests/img.png" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="/assests/location.webp" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="/assests/friendsIco.png" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
