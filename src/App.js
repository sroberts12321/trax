import React, { Component } from "react";
import LandingPage from "./components/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
