import React, { useContext } from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { DarkModeContext } from "../../context/DarkModeContext";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to={"/"}>
          <img src="/assests/logo.png" />
        </Link>

        {darkMode ? (
          <LightModeRoundedIcon onClick={toggle} />
        ) : (
          <DarkModeRoundedIcon onClick={toggle} />
        )}
        <WidgetsRoundedIcon />
      </div>
      <div className="middle">
        <span className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search ..." />
        </span>
      </div>
      <div className="right">
        <PersonRoundedIcon />
        <EmailRoundedIcon />
        <NotificationsRoundedIcon />
        <Link to={"/profile/:" + user.id} style={{ textDecoration: "none" }}>
          <div className="user">
            <img src={"/upload/"+user.profilepic} />
            <span>{user.name}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
