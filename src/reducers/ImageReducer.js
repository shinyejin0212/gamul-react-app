const initialState = null;

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "base24이미지저장":
      state = action.imagebase24;
      return state;
    case "Form이미지저장":
      state = action.imageform;
      return state;

    default:
      return state;
  }
};
export default ImageReducer;
