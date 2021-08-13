import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
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
      <div>
        <h1>This is Home Page</h1>
      </div>
    </>
  );
};

export default Home;
