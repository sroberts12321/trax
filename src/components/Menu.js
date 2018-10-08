import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/home">
          <div className="menuItem">Home</div>
        </a>
        <a href="/characters">
          <div className="menuItem">Characters</div>
        </a>
        <a href="/tools">
          <div className="menuItem">DM Tools</div>
        </a>
      </div>
    );
  }
}

export default Menu;
