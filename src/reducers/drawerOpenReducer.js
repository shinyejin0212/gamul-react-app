const initialState = false;

const drawerOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "drawer열고닫기":
      state = action.newopen;
      return state;

    default:
      return state;
  }
};
export default drawerOpenReducer;
