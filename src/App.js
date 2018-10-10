import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.children}
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
