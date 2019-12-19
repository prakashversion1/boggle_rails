import React, { Component } from "react";

class CurrentWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: this.props.currentWord
    };
  }

  render() {
    return (
      <div className="word-area">
        <div>Current Word</div>
        <div>{this.state.currentWord}</div>
      </div>
    );
  }
}

export default CurrentWord;
