const initialState = {
  wordScoreList: []
};

const searchReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_WORD_SEARCH_SUCCESS":
      const searchData = action.payload;
      newState.wordScoreList.push({
        word: searchData.data.word,
        score: searchData.data.score
      });
      return newState;
    case "RESET_WORDLIST":
      console.log("resetting wordscore list");
      newState.wordScoreList = [];
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
