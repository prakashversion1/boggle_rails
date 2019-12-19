import React, { Component } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import { getRandomBoard, isDiceEqual, isAdjacent } from "../utils/StringUtils";
import CurrentWord from "../components/CurrentWord";
import clonedeep from "lodash/cloneDeep";

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.initBoard = getRandomBoard();
    this.state = {
      board: this.initBoard,
      currentWordPosition: [],
      selectedWord: ""
    };
  }

  handleDiceClick = (rowId, columnId) => {
    console.log(`You have clicked ${rowId} and ${columnId}`);
    const newDice = this.state.board[rowId][columnId];
    const lastSelectedDice = this.state.currentWordPosition[
      this.state.currentWordPosition - 1
    ];
    // two conditions (1 if selected tile is slected and if new tile is selected)
    if (isDiceEqual(newDice, lastSelectedDice)) {
      let newBoard = clonedeep(this.state.board);
      newBoard[rowId][columnId].selected = false;
      this.setState({
        currentWordPosition: this.state.currentWordPosition.slice(0, -1),
        board: newBoard,
        currentWordPosition: this.state.currentWordPosition.slice(0, -1)
      });
    } else {
      if (!lastSelectedDice || isAdjacent(newDice, lastSelectedDice)) {
        let newBoard = clonedeep(this.state.board);
        newBoard[rowId][columnId].selected = true;
        this.setState({
          selectedWord: this.state.selectedWord.concat(
            newBoard[rowId][columnId].letter
          ),
          board: newBoard,
          currentWordPosition: this.state.currentWordPosition.concat({
            rowId: rowId,
            colId: columnId
          })
        });
      }
    }
  };

  render() {
    return (
      <div>
        <GameBoard
          board={this.state.board}
          handleDiceClick={this.handleDiceClick}
        />
        <CurrentWord />
        <ScoreBoard />
      </div>
    );
  }
}

export default MainBoard;
