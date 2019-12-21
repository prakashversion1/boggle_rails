import React, { Component } from "react";

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="submit-button"
        onClick={() => this.props.handleScoreVerification()}
      >
        Submit
      </button>
    );
  }
}

export default Submit;
