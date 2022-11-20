import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import clickMarkerReducer from "./clickMarkerReducer";
import selectMarketReducer from "./selectMarketReducer";

const rootReducer = combineReducers({
  counterReducer,
  clickMarkerReducer,
  selectMarketReducer,
});
export default rootReducer;
