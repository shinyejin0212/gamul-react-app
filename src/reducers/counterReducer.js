const initialState = 5;

const counterReducer = (state = initialState, action) => {
  //새로운 상태를 만드는 로직
  switch (action.type) {
    case "증가":
      return state + 1;
    case "감소":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
