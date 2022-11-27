const initialState = null;

const getBookMarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "북마크가져오기":
      state = action.market_title;
      console.log("getBookMarkReducer", state);
      return [...state];
    case "북마크저장하기":
      console.log("북마크 저장하기", state, [
        { name: action.market_title, region: action.market_address },
      ]);

      return [
        ...state,
        { name: action.market_title, region: action.market_address },
      ];
    default:
      return state;
  }
};
export default getBookMarkReducer;
