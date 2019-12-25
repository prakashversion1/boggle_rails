import searchReducer from "../../app/javascript/reducers/search";

const state = { wordScoreList: [] };
describe("Search Reducer", () => {
  describe("GET_WORD_SEARCH_SUCCESS", () => {
    const payloadData = [{ word: "got", score: 1 }];

    const getWords = {
      type: "GET_WORD_SEARCH_SUCCESS",
      payload: { message: "Word Found", data: { word: "got", score: 1 } }
    };

    it("should fetch correct word", () => {
      const newState = searchReducer(state, getWords);
      console.log(newState);
      expect(newState.wordScoreList).toEqual(payloadData);
    });
  });
});
