import axios from "axios";
import toastr from "toastr";

const baseURL = "http://localhost:3000";

export const getWordVerification = word => dispatch => {
  const url = `${baseURL}/word/search?word=${word}`;
  return axios
    .get(url)
    .then(response => {
      dispatch({
        type: "GET_WORD_SEARCH_SUCCESS",
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      toastr.options = {
        positionClass: "toast-top-center"
      };
      toastr.error("Word Not Found");
    });
};

export const getUserResponse = name => dispatch => {
  const url = `${baseURL}/user`;
  return axios
    .post(url, {
      userName: name
    })
    .then(response => {
      dispatch({
        type: "GET_USER_DETAIL_SUCCESS",
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: "GET_USER_DETAIL_ERROR"
      });
    });
};

export const postUserHighScore = scoreDetails => dispatch => {
  const url = `${baseURL}/user/highscore`;
  return axios
    .post(url, scoreDetails)
    .then(response => {
      dispatch({
        type: "GET_HIGHSCORE_POST_SUCCESS",
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: "GET_HIGHSCORE_POST_ERROR"
      });
    });
};

export const resetWordList = () => ({
  type: "RESET_WORDLIST"
});
