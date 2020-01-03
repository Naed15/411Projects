import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions";
import { Link, withRouter } from "react-router-dom";
import LoggedIn from "./LoggingIn";



const Nav = ({ user, logout, history }) => {
      console.log(user);
    
      const handleSubmit = e => {
        e.preventDefault();
    
        document.cookie = "loggedIn=false;expires=Thu, 18 Dec 2013 12:00:00 UTC";
        logout();
    
        history.push("/");
      };
    
      return (
        <>
          <AppBar position="relative" className={AppBar}>
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: "1" }}>
                Austin Small Business
              </Typography>
    
              <ul className="nav-list">
                {user.isAuthenticated ? (
                  <>
                    {" "}
                    <li>
                      <Link className="nav-list-item" to="/Lists">
                        Listings
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-list-item" to="/Additions">
                        Add
                      </Link>
                    </li>{" "}
                  </>
                ) : null}
                <li>
                  {user.isAuthenticated ? (
                    <Link onClick={handleSubmit} className="nav-list-item" to="/">
                      Logout
                    </Link>
                  ) : (
                    <Link className="nav-list-item" to="/">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </Toolbar>
          </AppBar>
          {user.isAuthenticated ? <LoggedIn /> : null}
        </>
      );
    };
    
    const mapStateToProps = state => ({
      user: state.user
    });
    export default withRouter(connect(mapStateToProps, { logout })(Nav));
    