const initialState = {
  userDetail: null
};

const userReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_USER_DETAIL_SUCCESS":
      const userData = action.payload;
      newState.userDetail = {
        userName: userData.data.userName,
        highScore: userData.data.highScore
      };
      return newState;
    case "GET_HIGHSCORE_POST_SUCCESS":
      const userInfo = action.payload;
      newState.userDetail = {
        userName: userInfo.data.userName,
        highScore: userInfo.data.highScore
      };
      return newState;
    default:
      return state;
  }
};

export default userReducer;
