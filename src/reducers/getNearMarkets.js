const initialState = "-";

const getNearMarkets = (state = initialState, action) => {
  switch (action.type) {
    case "가까운마트가격가져오기":
      state = action.results;
      return state;
    default:
      return state;
  }
};
export default getNearMarkets;
