const initialState = [];

const clickMarkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "마커클릭":
      state = action.market_title;
      console.log(action);
      return [action.market_title, action.market_address];

    default:
      return state;
  }
};
export default clickMarkerReducer;
