import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
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
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Contact Number" />
            <Link to="/login">
              <button>Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
