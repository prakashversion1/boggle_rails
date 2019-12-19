import React, { Component } from "react";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleDiceClick: this.props.handleDiceClick
    };
  }

  generateTiles(side) {
    return (
      <button
        className={side.selected ? "tile-selected" : "tile"}
        key={side.colId + side.rowId}
        onClick={() => this.state.handleDiceClick(side.rowId, side.colId)}
      >
        {side.letter}
      </button>
    );
  }

  render() {
    return (
      <div className="game-board-area">
        {this.props.board.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map(dice => {
                return this.generateTiles(dice);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameBoard;
