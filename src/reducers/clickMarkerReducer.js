const initialState = "";

const clickMarkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "마커클릭":
      state = action.market_title;
      return state;

    default:
      return state;
  }
};
export default clickMarkerReducer;
