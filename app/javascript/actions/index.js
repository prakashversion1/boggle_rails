import axios from "axios";

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
      dispatch({
        type: "GET_WORD_SEARCH_ERROR"
      });
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
