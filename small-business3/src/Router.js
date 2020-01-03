import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/LoggingIn";
import Listings from "./Components/Lists";
import AddListing from "./Components/Additions";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);

  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/Login" component={Login} />
      <Route path="/Lists" component={Listings} />
      <ProtectedRoute path="/Addition" component={AddListing} />
    </Switch>
  );
};
export default Router;