import React, { useContext } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello,</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            velit, distinctio nisi totam dolor magni maxime dolorem quia quod
            reiciendis est aliquid alias perferendis commodi a aut. Possimus,
            pariatur ipsum.
          </p>
          <span>Get an immersive experience</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />

            <button onClick={handleLogin}>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
