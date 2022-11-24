import React from "react";
import styled from "styled-components";

const Marketstyle = {
  fontSize: "16px",
  backgroundColor: "#F0F0F0",

  color: "black",
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",

  border: "0",
  outline: "0",
  boxShadow: "0.5px 0.5px 0.5px 0.1px #b3b3b3",

  width: "85px",
  height: "60px",
  alignItems: "center" /* 가로 - 중앙으로 */,
  justifyContent: "center" /* 세로 - 상단으로 */,
  // calc(var(--vh, 1vh) * 40)
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "12px",

  textAlign: "center",
  //   padding: "5px",
  //   paddingTop: "12px",
  //   paddingBottom: "12px",
  margin: "5px",
};

function MartCategory({ props }) {
  return (
    <div>
      <button style={Marketstyle}>{props}</button>
    </div>
  );
}

export default MartCategory;
