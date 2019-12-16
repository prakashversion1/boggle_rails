import React, { Component } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";

class MainBoard extends Component {
  render() {
    return (
      <div>
        <GameBoard />
        <ScoreBoard />
      </div>
    );
  }
}

export default MainBoard;
