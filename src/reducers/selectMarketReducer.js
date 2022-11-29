const initialState = "";

const selectMarketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "마켓선택":
      // state = action.market_title;
      return [action.market_title, action.market_address];
    default:
      return state;
  }
};
export default selectMarketReducer;
