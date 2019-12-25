import React, { Component } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import {
  getRandomBoard,
  isDiceEqual,
  isAdjacent,
  verifyWord,
  getConfirmationMessage
} from "../utils/StringUtils";
import CurrentWord from "../components/CurrentWord";
import ResetBoard from "../components/ResetBoard";
import Submit from "../components/Submit";
import clonedeep from "lodash/cloneDeep";
import { connect } from "react-redux";
import {
  getWordVerification,
  getUserResponse,
  postUserHighScore,
  resetWordList
} from "../actions/index";
import Login from "../components/Login";
import Timer from "../components/Timer";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.initBoard = getRandomBoard();
    this.state = {
      board: this.initBoard,
      currentWordPosition: [],
      selectedWord: "",
      resetTimerkey: 1
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

  handleTimeUp() {
    console.log("time up beep beep");
    let newScore = 0;
    const userName = this.props.userDetail.userName;
    if (this.props.wordScoreList.length < 1) {
      newScore = 0;
    } else
      newScore = this.props.wordScoreList
        .map(o => o.score)
        .reduce((a, c) => {
          return a + c;
        });
    console.log(`Posting data for ${userName} with score ${newScore}`);
    const scoreObject = { userName: userName, newScore: newScore };
    this.props.dispatch(postUserHighScore(scoreObject));
    confirmAlert({
      title: "BEEP BEEP Time's UP",
      message: getConfirmationMessage(
        newScore,
        this.props.userDetail.highScore
      ),
      buttons: [
        {
          label: "Free Play",
          onClick: () => this.continue()
        },
        {
          label: "New Game",
          onClick: () => this.resetGame()
        }
      ],
      closeOnClickOutside: false
    });
  }

  continue() {
    this.continue;
  }

  resetGame() {
    const newKey = this.state.resetTimerkey + 1;
    this.handleBoardReset();
    this.setState({
      resetTimerkey: newKey
    });
    this.props.dispatch(resetWordList());
  }

  render() {
    console.log(this.props);
    if (this.props.userDetail == null) {
      return <Login getUserDetails={name => this.getUserDetails(name)} />;
    }
    return (
      <div>
        <div className="game-area">
          <Timer
            startCount={10}
            handleTimeUp={() => this.handleTimeUp()}
            key={this.state.resetTimerkey}
          />
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
          highScore={this.props.userDetail.highScore}
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
