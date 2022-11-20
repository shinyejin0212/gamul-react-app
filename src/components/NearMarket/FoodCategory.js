import React from "react";
import { pointColor } from "../../styles/GlobalStyles";

const FoodStyle = {
  fontSize: "16px",
  backgroundColor: "#ffdeca",
  color: pointColor,
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",

  border: "0",
  outline: "0",
  boxShadow: "0.5px 0.5px 0.5px 0.1px #b3b3b3",

  width: "50vw",
  maxWidth: "60px",
  height: "49px",

  borderTopLeftRadius: "12px",
  borderBottomLeftRadius: "12px",
  lineHeight: "49px",
  textAlign: "center",
};

const BOxStyle = {
  fontSize: "16px",

  color: "black",
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",
  backgroundColor: "#fcfcfc",
  border: "0",
  outline: "0",
  boxShadow: "0.5px 0.5px 0.5px 0.1px #b3b3b3",

  width: "80vw",
  maxWidth: "275px",
  height: "49px",

  textAlign: "center",
};

const MoneyStyle = {
  fontSize: "16px",
  backgroundColor: "white",
  height: "49px",
  lineHeight: "49px",
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",
  width: "85px",
  textAlign: "center",
};

function FoodCategory({ props }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        width: "95vw",
        maxWidth: "335px",
      }}
    >
      <div style={FoodStyle}>{props}</div>
      <div style={BOxStyle}>
        <div style={MoneyStyle}>50,000원</div>
      </div>
    </div>
  );
}

export default FoodCategory;
