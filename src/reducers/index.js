import { combineReducers } from "redux";
import characterReducer from "./eventReducer";

export default combineReducers({
  character: characterReducer
});
