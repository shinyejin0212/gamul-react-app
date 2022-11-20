import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import selectmarkerReducer from "./selectmarkerReducer";
import selectMarketReducer from "./selectMarketReducer";

const rootReducer = combineReducers({
  counterReducer,
  selectmarkerReducer,
  selectMarketReducer,
});
export default rootReducer;
