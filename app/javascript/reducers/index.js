import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";

export const rootReducer = combineReducers({
  searchReducer,
  userReducer
});
