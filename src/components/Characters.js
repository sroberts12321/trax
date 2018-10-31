import React, { Component } from "react";
import CharacterMenu from './CharacterMenu'
import SideBar from "./SideBar";
import CharacterList from "./CharacterList";

class Characters extends Component {
  render() {
    return (
      <div className="characters">
        <div className="menu">
          <SideBar />
          <CharacterList />
          <CharacterMenu />
        </div>
      </div>
    );
  }
}

export default Characters;
