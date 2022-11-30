import React, { useState } from "react";
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
  display: "flex",
};

const MoneyStyle = {
  fontSize: "15px",
  backgroundColor: "white",
  height: "45px",
  fontWeight: "600",
  fontSize: "14px",
  width: "85px",
  marginTop: "2px",
  marginRight: "10px",
  marginLeft: "10px",
};

const UnitStyle = {
  fontSize: "12px",
  fontWeight: "500",
  fontSize: "12px",
};
function FoodCategory({ title, prices }) {
  // const savePrices = () => {
  //   let prices_arr = [];
  //   let unit = null;
  //   prices.map((items, idx) => {
  //     prices_arr.push(items.price);
  //     unit = items.unit;
  //   });
  //   let minValue = prices_arr.reduce((max, curr) => (max > curr ? curr : max));
  //   console.log("minValue", minValue);
  // };

  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        width: "95vw",
        maxWidth: "335px",
      }}
    >
      <div style={FoodStyle}>{title}</div>
      <div style={BOxStyle}>
        {prices.map((items) => (
          <li style={MoneyStyle}>
            {items.price}원<br></br>
            <a style={UnitStyle}>({items.unit})</a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default FoodCategory;
