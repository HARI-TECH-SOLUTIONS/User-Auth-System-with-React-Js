import React from "react";

import {
  // BrowserRouter as Router,
  // Link,
  NavLink,
  // Redirect,
  // Prompt,
} from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="header">
        <div className="nav">
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>

          <NavLink to="/Login" exact activeStyle={{ color: "red" }}>
            Login
          </NavLink>

          <NavLink to="/signup" exact activeStyle={{ color: "red" }}>
            Register
          </NavLink>
        </div>
      </div>
      <form>
        <div className="box_login">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email Id</label>
              <input type="email" name="email" placeholder="enter email id" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter passwword"
              />
            </div>

            <div className="footer">
              <button type="button" className="btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
