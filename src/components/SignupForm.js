import React from "react";
import { NavLink } from "react-router-dom";

const SignupForm = () => {
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
      <div className="box_register">
        <div className="form">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="fname" placeholder="enter last name" />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lname" placeholder="enter last name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input type="email" name="email" placeholder="enter email id" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter passwword"
            />
          </div>

          <div className="form-group">
            <label htmlFor="repassword">Confirm Password</label>
            <input
              type="password"
              name="repassword"
              placeholder="re type passwword"
            />
          </div>

          <div className="footer">
            <button type="button" className="btn">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
