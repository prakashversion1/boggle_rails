import React, { Component } from "react";

class CurrentWord extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="word-area">
        <div>Current Word</div>
        <div>{this.props.currentWord}</div>
      </div>
    );
  }
}

export default CurrentWord;
