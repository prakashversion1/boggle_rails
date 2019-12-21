import React, { Component } from "react";

class ResetBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="submit-reset"
        onClick={() => this.props.handleBoardReset()}
      >
        Reset
      </button>
    );
  }
}

export default ResetBoard;
