import React, { Component } from "react";

class ResetBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="reset" onClick={() => this.props.handleBoardReset()}>
        Reset Board
      </button>
    );
  }
}

export default ResetBoard;
