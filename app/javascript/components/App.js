import React, { Component } from "react";
import MainBoard from "../components/MainBoard";
import logo from "../images/logo.png";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        <MainBoard />
      </div>
    );
  }
}

export default App;
