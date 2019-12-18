import React, { Component } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import { getRandomBoard } from "../utils/StringUtils";

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.initBoard = getRandomBoard();
    this.state = {
      board: this.initBoard
    };
  }

  render() {
    return (
      <div>
        <GameBoard board={this.state.board} />
        <ScoreBoard />
      </div>
    );
  }
}

export default MainBoard;
