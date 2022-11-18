// store 폴더 안에 store.js => 스토어를 생성한 후 리듀서를 등록한다.
import { legacy_createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = legacy_createStore(rootReducer);

const store = legacy_createStore(() => {
  return 7;
});
export default store;
