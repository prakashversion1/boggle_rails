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
        title="Reset"
      >
        <i className="fas fa-redo" />
      </button>
    );
  }
}

export default ResetBoard;
