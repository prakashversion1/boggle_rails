import React, { Component } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import {
  getRandomBoard,
  isDiceEqual,
  isAdjacent,
  verifyWord
} from "../utils/StringUtils";
import CurrentWord from "../components/CurrentWord";
import ResetBoard from "../components/ResetBoard";
import Submit from "../components/Submit";
import clonedeep from "lodash/cloneDeep";
import { connect } from "react-redux";
import { getWordVerification, getUserResponse } from "../actions/index";
import Login from "../components/Login";

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.initBoard = getRandomBoard();
    this.state = {
      board: this.initBoard,
      currentWordPosition: [],
      selectedWord: ""
    };
    this.userDetail = null;
  }

  handleDiceClick(rowId, columnId) {
    console.log(`You have clicked ${rowId} and ${columnId}`);
    const newDice = this.state.board[rowId][columnId];
    const lastSelectedDice = this.state.currentWordPosition[
      this.state.currentWordPosition.length - 1
    ];
    // two conditions (1 if selected tile is slected and if new tile is selected)
    if (newDice.selected) {
      console.log("Selected word selected");
      if (isDiceEqual(newDice, lastSelectedDice)) {
        console.log("Same word selected");
        let newBoard = clonedeep(this.state.board);
        newBoard[rowId][columnId].selected = false;
        this.setState({
          selectedWord: this.state.selectedWord.slice(0, -1),
          board: newBoard,
          currentWordPosition: this.state.currentWordPosition.slice(0, -1)
        });
      }
    } else {
      if (!lastSelectedDice || isAdjacent(newDice, lastSelectedDice)) {
        let newBoard = clonedeep(this.state.board);
        newBoard[rowId][columnId].selected = true;
        this.setState({
          selectedWord: this.state.selectedWord.concat(
            newBoard[rowId][columnId].letter
          ),
          board: newBoard,
          currentWordPosition: this.state.currentWordPosition.concat({
            rowId: rowId,
            colId: columnId
          })
        });
      }
    }
  }

  handleScoreVerification() {
    console.log("word verification clicked");
    const word = this.state.selectedWord;
    if (!verifyWord(word)) {
      return;
    }
    this.props.dispatch(getWordVerification(word));
    this.setState({
      board: this.initBoard,
      currentWordPosition: [],
      selectedWord: ""
    });
    console.log(this.state);
  }

  handleBoardReset() {
    this.initBoard = getRandomBoard();
    this.setState({
      board: this.initBoard,
      currentWordPosition: [],
      selectedWord: ""
    });
  }

  getUserDetails(userName) {
    console.log("user details clicked");
    this.props.dispatch(getUserResponse(userName));
  }

  render() {
    console.log(this.props);
    if (this.props.userDetail == null) {
      return <Login getUserDetails={name => this.getUserDetails(name)} />;
    }
    return (
      <div>
        <div className="game-area">
          <GameBoard
            board={this.state.board}
            handleDiceClick={this.handleDiceClick.bind(this)}
          />
          <CurrentWord currentWord={this.state.selectedWord} />
          <div>
            <Submit
              handleScoreVerification={this.handleScoreVerification.bind(this)}
            />
            <ResetBoard handleBoardReset={this.handleBoardReset.bind(this)} />
          </div>
        </div>
        <ScoreBoard
          wordScoreList={this.props.wordScoreList}
          highScore={this.props.userDetail.score}
        />
        <div className="clear" />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  wordScoreList: store.searchReducer.wordScoreList,
  userDetail: store.userReducer.userDetail
});

export default connect(mapStateToProps)(MainBoard);
