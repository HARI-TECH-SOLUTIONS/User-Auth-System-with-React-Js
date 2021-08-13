import React from "react";
import SignupForm from "./SignupForm";
import Home from "./Home";
import Login from "./Login";

const signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

const home = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const login = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Form;
