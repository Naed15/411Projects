import React from "react";
import { connect } from "react-redux";

const LoggingIn = ({ user }) => {
    return (
      <div style={{ background: "blue", marginTop: "-27px" }}>
        <p style={{ paddingLeft: "25px" }}>Logged In As: {user.username}</p>
      </div>
    );
  };
  
  const mapStateToProps = state => ({
    user: state.user
  });



export default connect(mapStateToProps, null)(LoggingIn);







