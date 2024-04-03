import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://social-media-app-ygkk.onrender.com/api/auth/register",
        inputs
      );
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);
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
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
            />
            <input type="password" placeholder="Password" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <Link to="/login">
              <button onClick={handleClick}>Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
