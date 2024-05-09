import React, { useState } from "react";
import "./register.scss";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });
  const [err, setErr] = useState();
  const [res, setRes] = useState();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        inputs
      );
      setRes(response.data);
      console.log(response);
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            Unlock endless
            <br /> opportunities for growth
            <br /> and success in the creative
            <br /> industry
          </h1>
        </div>
        <div className="right">
          <h1>Create account</h1>
          <p>For business, band or celebrity.</p>
          <form>
            <div className="fields">
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
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="remember" />
              Remember me
              <br />
              <input type="checkbox" name="" id="terms" />I agree to all the{" "}
              <span>Terms</span>
              and <span>Privacy policy</span>
            </div>

            <div className="buttons">
              <div>
                <Link to="/login">
                  <button onClick={handleClick}>Create account</button>
                </Link>
              </div>

              <div className="goolge">
                <img src="/assests/google.webp" />
                Sign-in with google
              </div>
            </div>
            <p>
              Don’t have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span>Log In</span>
              </Link>
            </p>
            {/* {err ? <span className="error"> {err}</span> : <span />}
            {res ? <span className="success"> {res}</span> : <span />} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
