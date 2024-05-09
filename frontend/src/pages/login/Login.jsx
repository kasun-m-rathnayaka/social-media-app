import React, { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error);
    }
  };
  // console.log(err.response.data);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <div className="line"></div>
          <h1>Login to Find a Job,</h1>
          <p>
            Login to Genic to get your gateway to job opportunities. Connect,
            apply, succeed. Join the Genic today!
          </p>
        </div>
        <div className="right">
          <h1>Log in</h1>
          <form>
            <div className="input">
              <EmailRoundedIcon />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <KeyRoundedIcon />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            {err ? <div className="error"> {err.response.data}</div> : <span />}
            <button onClick={handleLogin}>Log in</button>
            <span>Fogot password ?</span>
            <div className="or">or</div>
            <img src="/assests/google.png" alt="" srcset="" />
            <div>
              Don’t have an account ?
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span> Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
