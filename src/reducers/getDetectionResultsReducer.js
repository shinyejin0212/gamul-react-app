const initialState = [];

const getDetectionResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "인식결과가져오기":
      state = action.results;
      console.log("인식결과가져오기", action.results);
      return [state];
    default:
      return state;
  }
};
export default getDetectionResultsReducer;
