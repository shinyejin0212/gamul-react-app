import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import selectmarkerReducer from "./selectmarkerReducer";

const rootReducer = combineReducers({
  counterReducer,
  selectmarkerReducer,
});
export default rootReducer;
