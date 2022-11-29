const initialState = [];

const getDetectionResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "인식결과가져오기":
      state = action.results;
      return state;
    // case "북마크저장하기":
    //   return {...state, action.bookmark};
    default:
      return { name: state.name, confidence: state.confidence };
  }
};
export default getDetectionResultsReducer;
