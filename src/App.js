import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Login from "./components/Login";

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignupForm} />
          <Route exact component={NoMatchPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
