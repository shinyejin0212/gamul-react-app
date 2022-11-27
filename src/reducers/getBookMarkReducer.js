const initialState = null;

const getBookMarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "북마크가져오기":
      state = action.bookmarks;
      console.log("getBookMarkReducer", state);
      return [...state];
    // case "북마크저장하기":
    //   return {...state, action.bookmark};
    default:
      return state;
  }
};
export default getBookMarkReducer;
