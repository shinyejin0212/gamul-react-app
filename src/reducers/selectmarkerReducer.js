const initialState = "";

const selectmarkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "마커클릭":
      state = action.market_title;
      return state;
    case "마켓선택":
      state = action.market_title;
      return state;
    default:
      return state;
  }
};

export default selectmarkerReducer;
