import React, { Component } from "react";
import SideBar from "./SideBar";

class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <SideBar />
        <h1 className="tools-title">Tools page</h1>
      </div>
    );
  }
}

export default Tools;
