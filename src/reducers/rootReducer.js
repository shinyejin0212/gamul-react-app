import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import clickMarkerReducer from "./clickMarkerReducer";
import selectMarketReducer from "./selectMarketReducer";
import BookMarkOrMapReducer from "./BookMarkOrMapReducer";
import ImageReducer from "./ImageReducer";
import getBookMarkReducer from "./getBookMarkReducer";
import getDetectionResultsReducer from "./getDetectionResultsReducer";
import drawerOpenReducer from "./drawerOpenReducer";
import tokenReducer from "../storage/Auth";

const rootReducer = combineReducers({
  counterReducer,
  clickMarkerReducer,
  selectMarketReducer,
  BookMarkOrMapReducer,
  ImageReducer,
  authToken: tokenReducer,
  getBookMarkReducer,
  getDetectionResultsReducer,
  drawerOpenReducer,
});
export default rootReducer;
