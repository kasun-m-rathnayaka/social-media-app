import React, { useContext, useState } from "react";
import "./profile.scss";
import Post from "../../Components/post/Post";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Update from '../../Components/Update/Update'

const Profile = () => {
  const { user } = new useContext(AuthContext);
  const [openUpdate,setOpenUpdate]=useState(false)

  const userId = useLocation().pathname.split("/")[2]
  
  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios
        .get("http://localhost:3001/api/user/"+userId[1])
        .then((res) => {
          return res.data;
        }),
  });

  // console.log(data)

  return (
    <div className="profile">
      {isPending ? (<div>Loading</div>) : 
      <>
      <div className="images">
        <img src={"/upload/" +data.coverpic} alt="" className="cover" />
        <img src={"/upload/" +data.profilepic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <div className="info"></div>
            <span>{data.name}</span>
            <div className="desc">{data.desc}</div>
            {data && data.id == data.id ? (<button onClick={(e)=>setOpenUpdate(!openUpdate)}>Update</button>): <button>follow</button>}
          </div>
        </div>
      </div>
      <div className="post">
        <Post userId={data.id} />
      </div></>
      }
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  );
};

export default Profile;
