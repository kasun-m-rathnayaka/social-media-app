import React, { useState } from "react";
import "./update.scss";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({ setOpenUpdate, user }) => {
  const [text, setText] = useState({
    name: "",
    dsc: "",
  });
  const [profile, setProfile] = useState();
  const [cover, setCover] = useState();

  const queryClient = useQueryClient();
  const handleChange = (e) => {
    setText((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const upload = async (file) => {
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
    mutationFn: async (newUpdate) => {
      await axios.put("http://localhost:3001/api/user", newUpdate);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverpic;
    coverUrl = cover && (await upload(cover));
    let profileUrl = user.profilepic;
    profileUrl = profile && (await upload(profile));

    mutation.mutate({
      ...text,
      coverpic: coverUrl,
      profilepic: profileUrl,
      user: user,
    });
    
    setOpenUpdate(false);
  };

  return (
    <div className="update">
      <span>
        <button
          onClick={(e) => {
            setOpenUpdate(false);
          }}
        >
          X
        </button>
      </span>
      <div className="topic">Update</div>
      <form>
        Add new profile image<input type="file" name="" id="" onChange={(e) => setProfile(e.target.files[0])}/>
        Add new cover image <input type="file" name="" id="" onChange={(e) => setCover(e.target.files[0])}/>
        <input type="text" placeholder="New Name" name="name" id="" onChange={handleChange} />
        <input type="text" placeholder="New Description" name="dsc" id="" onChange={handleChange} />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default Update;
