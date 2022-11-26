const initialState = "";

const getBookMarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "북마크가져오기":
      state = action.bookmarks;
      return state;
    default:
      return state;
  }
};
export default getBookMarkReducer;
