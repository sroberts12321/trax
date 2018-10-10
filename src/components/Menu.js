import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="nav-collapse" role="navigation">
          <ul className="tabs primary-nav">
            <li className="tabs__item">
              <a href="/home" className="tabs__link">Home</a>
            </li>
            <li className="tabs__item">
              <a href="/characters" className="tabs__link">Characters</a>
            </li>
            <li className="tabs__item">
              <a href="/dmtools" className="tabs__link">DM Tools</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;


{/* <a href="/home">
  <div className="menuItem">Home</div>
</a>
<a href="/characters">
  <div className="menuItem">Characters</div>
</a>
<a href="/tools">
  <div className="menuItem">DM Tools</div>
</a> */}