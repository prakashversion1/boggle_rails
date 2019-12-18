import React, { Component } from "react";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.board
    };
  }

  generateTiles(side) {
    return <button className="Tile"> {side} </button>;
  }

  render() {
    const tiles = this.generateTiles();
    return (
      <div className="game-board-area">
        {this.state.board.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map(side => {
                return this.generateTiles(side);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameBoard;
