export const increment = () => {
  return {
    type: "증가",
  };
};

export const decrement = () => {
  return {
    type: "감소",
  };
};

export const sendMarket = (market_title) => {
  return {
    type: "마커클릭",
    market_title,
  };
};

export const selectMarket = (market_title) => {
  return {
    type: "마켓선택",
    market_title,
  };
};
