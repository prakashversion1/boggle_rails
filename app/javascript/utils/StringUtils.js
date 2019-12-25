//Function to generate a random 4*4 array with letters. This is a respresentation of a board
import DiceData from "./DiceData";
import Axios from "axios";

export const getRandomBoard = () => {
  let counter = 0;
  let gameBoard = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      const dice = dices[counter];
      const side = getRandomSide(dice);
      const diceData = new DiceData(side, i, j);
      row[j] = diceData;
      counter += 1;
    }
    gameBoard[i] = row;
  }
  return gameBoard;
};

// probable dices in a board. Source : http://www.bananagrammer.com/2013/10/the-boggle-cube-redesign-and-its-effect.html
const dices = [
  "AAEEGN",
  "ABBJOO",
  "ACHOPS",
  "AFFKPS",
  "AOOTTW",
  "CIMOTU",
  "DEILRX",
  "DELRVY",
  "DISTTY",
  "EEGHNW",
  "EEINSU",
  "EHRTVW",
  "EIOSST",
  "ELRTTY",
  "HIMNUQ",
  "HLNNRZ"
];

// Gets a random side from the dice string
const getRandomSide = dice => {
  const randomIndex = Math.floor(Math.random() * dice.length);
  return dice[randomIndex];
};

export const isDiceEqual = (dice1, dice2) => {
  if (!dice1 || !dice2) return false;
  return dice1.rowId === dice2.rowId && dice2.colId === dice1.colId;
};

export const isAdjacent = (dice1, dice2) => {
  if (!dice1 || !dice2) return false;
  const colDiff = Math.abs(dice1.colId - dice2.colId);
  const rowDiff = Math.abs(dice1.rowId - dice2.rowId);
  if (colDiff <= 1 && rowDiff <= 1) {
    return true;
  } else {
    return false;
  }
};

export const copyBoard = board => {
  const copiedBoard = board.map(row => {
    return row.map(tile => {
      return tile.clone();
    });
  });
  return copiedBoard;
};

//temporary word calculator. Need to reset it with proper api
export const verifyWord = word => {
  if (word.length < 3) {
    return false;
  } else {
    return true;
  }
};

export const checkIfWordExists = (word, wordScoreList) => {
  const redundantWord = wordScoreList.filter(
    wordObject => wordObject.word === word
  );
  if (redundantWord) {
    return false;
  } else {
    return true;
  }
};

export const getConfirmationMessage = (newScore, oldScore) => {
  let message = "";
  if (newScore == oldScore) {
    message = "Congrats you've outdone yourself with new high score. ";
  } else {
    message = "Better luck next time. ";
  }
  message = message + "Do you want to continue free play or Start a new game ?";
  return message;
};
