import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import * as actions from "../../app/javascript/actions/index";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Action Specs", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("Get word api", () => {
    const store = mockStore({ wordScoreList: [] });

    it("Should get word if it matches dictionary", () => {
      moxios.wait(() => {
        const request = moxios.requests.at(0);
        request.respondWith({
          status: 200,
          response: {
            data: {
              message: "Word Found",
              data: {
                word: "donkey",
                score: 5
              }
            }
          }
        });
      });

      return store.dispatch(actions.getWordVerification("donkey")).then(() => {
        expect(store.getActions()[0]).toEqual({
          type: "GET_WORD_SEARCH_SUCCESS",
          payload: {
            data: {
              message: "Word Found",
              data: {
                word: "donkey",
                score: 5
              }
            }
          }
        });
      });
    });

    it("Should get word if it matches dictionary", () => {});

    it("Should get word if it matches dictionary", () => {});
  });
});
