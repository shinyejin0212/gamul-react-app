const initialState = 5;

const selectmarkerReducer = (state = 5, action) => {
  switch (action.type) {
    case "마커클릭":
      return state + 1;
    default:
      return state;
  }
};

export default selectmarkerReducer;
