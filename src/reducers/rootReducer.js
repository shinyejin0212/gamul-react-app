import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import clickMarkerReducer from "./clickMarkerReducer";
import selectMarketReducer from "./selectMarketReducer";
import BookMarkOrMapReducer from "./BookMarkOrMapReducer";

const rootReducer = combineReducers({
  counterReducer,
  clickMarkerReducer,
  selectMarketReducer,
  BookMarkOrMapReducer,
});
export default rootReducer;
