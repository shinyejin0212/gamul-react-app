import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import clickMarkerReducer from "./clickMarkerReducer";
import selectMarketReducer from "./selectMarketReducer";
import BookMarkOrMapReducer from "./BookMarkOrMapReducer";
import ImageReducer from "./ImageReducer";

const rootReducer = combineReducers({
  counterReducer,
  clickMarkerReducer,
  selectMarketReducer,
  BookMarkOrMapReducer,
  ImageReducer,
});
export default rootReducer;
