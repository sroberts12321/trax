import React, { Component } from "react";

class LandingPage extends Component {
  componentWillUnmount() {

  }

  render() {
    return (
      <div className="landing">
        <div className="container">
          <h2 className="welcometitle"> Welcome to trax</h2>
          <h4 className="subtitle"> 5e D&D character tracker</h4>
        </div>
        <form method="get" action="/accountcreation">
          <button className="entrybtn createaccountbtn" type="submit">Create Account</button>
        </form>
        <form method="get" action="/home">
          <button className="entrybtn loginbtn" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LandingPage;
