const initialState = [];

const setGraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case "그래프 Value 가져오기":
      state = action.priceHistories;
      return [state];
    default:
      return state;
  }
};
export default setGraphReducer;
