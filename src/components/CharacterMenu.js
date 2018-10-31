import React, { Component } from "react";

class CharacterMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: "equipment"
    }
  }

  onSelect = (e) => {
    var title = e.target.id
    console.log(e.target)
    this.setState({ selectedItem: title })
  }
  render() {
    const { selectedItem } = this.state
    return (
      <div className="menu">
        <ul className="menuItems">
          <li id="spells" onClick={this.onSelect}>Spells</li>
          <li id="equipment" onClick={this.onSelect}>Equipment</li>
          <li id="features" onClick={this.onSelect}>Features & Traits</li>
          <li id="description" onClick={this.onSelect}>Description</li>
          <li id="notes" onClick={this.onSelect}>Notes</li>
        </ul>
        <div>
          {selectedItem === 'spells' && <div><p>Spells</p></div>}
          {selectedItem === 'equipment' && <div><p>Equipment</p></div>}
          {selectedItem === 'features' && <div><p>Features</p></div>}
          {selectedItem === 'description' && <div><p>Description</p></div>}
          {selectedItem === 'notes' && <div><p>Notes</p></div>}
        </div>
      </div >
    );
  }
}

export default CharacterMenu;