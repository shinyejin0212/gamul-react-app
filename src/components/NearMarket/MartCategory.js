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

  width: "78px",
  height: "44px",
  // calc(var(--vh, 1vh) * 40)
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "12px",

  textAlign: "center",
  padding: "12px",
};

function MartCategory({ props }) {
  return (
    <div>
      <div style={Marketstyle}>{props}</div>
    </div>
  );
}

export default MartCategory;
