import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/LoggedIn";
import Listings from "./Components/Listings";
import AddListing from "./Components/Add";
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
      <Route exact path="/" component={Login} />
      <Route path="/listings" component={Listings} />
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  );
};
export default Router;