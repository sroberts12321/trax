import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <h2 className="welcometitle"> Welcome to trax</h2>
          <h4 className="subtitle"> 5e D&D character tracker</h4>
        </div>
        <button className="entrybtn createaccountbtn" onClick="location.href='/accountcreation'" type="button">Create Account</button>
        <button className="entrybtn loginbtn" onClick="location.href='/home'" type="button">Login</button>
      </div>
    );
  }
}

export default LandingPage;
