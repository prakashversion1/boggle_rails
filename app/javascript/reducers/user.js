const initialState = {
  userDetail: null
};

const userReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_USER_DETAIL_SUCCESS":
      const userData = action.payload;
      newState.userDetail = {
        word: userData.data.userName,
        score: userData.data.highScore
      };
      return newState;
    default:
      return state;
  }
};

export default userReducer;
