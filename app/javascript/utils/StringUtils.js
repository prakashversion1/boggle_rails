//Function to generate a random 4*4 array with letters. This is a respresentation of a board
export const getRandomBoard = () => {
  let counter = 0;
  let gameBoard = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      const dice = dices[counter];
      const side = getRandomSide(dice);
      row[j] = side;
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
