import React, { Component } from "react";

class CurrentWord extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="word-area">
        <div className="current-header">Current Word</div>
        <div className="current-header">{this.props.currentWord}</div>
      </div>
    );
  }
}

export default CurrentWord;
