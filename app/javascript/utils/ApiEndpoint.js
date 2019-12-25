import Axios from "axios";

const baseURL = "http://localhost:3000";

const repsonseObject = {
  message: "",
  data: null, // from api
  status: "" // success or failed
};

export const verifyWord = word => {
  let output = {};
  Axios.get(`${baseURL}/word/search?word=${word}`)
    .then(response => {
      data = repsonse.data;
      console.log(data);
      output = { ...data, ...{ status: "Success" } };
    })
    .catch(err => {
      console.log(err);
    });
};
