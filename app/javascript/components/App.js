import React, { Component } from "react";
import MainBoard from "../components/MainBoard";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <span>
            <h1>Boggle</h1> <h2>Game of the year edition</h2>
          </span>
        </div>
        <MainBoard />
      </div>
    );
  }
}

export default App;
