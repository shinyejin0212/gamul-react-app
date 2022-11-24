const initialState = false;

const BookMarkOrMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "북마크":
      state = action.flag;
      return state;
    case "지도":
      state = action.flag;
      return state;

    default:
      return state;
  }
};
export default BookMarkOrMapReducer;
