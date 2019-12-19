import React, { Component } from "react";
class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  calculateTotalScore() {
    let totalScore = 0;
    if (this.props.wordScoreList.length > 0) {
      totalScore = this.props.wordScoreList
        .map(o => o.score)
        .reduce((a, c) => {
          return a + c;
        });
    }
    return totalScore;
  }

  generateWordList() {
    const wordList = this.props.wordScoreList.map((obj, key) => {
      return <li key={key}>{obj.word}</li>;
    });
    return wordList;
  }

  generateScoreList() {
    const scoreList = this.props.wordScoreList.map((obj, key) => {
      return <li key={key}>{obj.score}</li>;
    });
    return scoreList;
  }

  render() {
    const wordlist = this.generateWordList();
    const scoreList = this.generateScoreList();
    const totalScore = this.calculateTotalScore();
    return (
      <div className="score-box">
        <div>
          <div className="word-list">
            <div className="words">
              <h2>WORD</h2>
              {wordlist}
            </div>
            <div className="scores">
              <h2>SCORE</h2>
              {scoreList}
            </div>
          </div>
          <div className="total-score">
            <h2>Total Score</h2>
            <span>{totalScore}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
