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

export const selectMarket = () => {
  return {
    type: "마트 지도 선택",
  };
};

export const sendMarket = () => {
  return {
    type: "마커클릭",
  };
};
