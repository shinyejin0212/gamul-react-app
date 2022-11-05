import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

//mui
import Button from "@mui/material/Button";

const style = {
  fontSize: "16p",
  backgroundColor: "white",
  // color: ${"pointColor"},
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",

  borderRadius: "12px",
  border: "0",
  outline: "0",
  boxShadow: "2px 2px 4px #b3b3b3",

  marginTop: "12px",
  marginBottom: "12px",
  width: "162px",
  height: "30px",
  borderRadius: "12px",
};

export default function SelectButton(props) {
  return (
    <div>
      <Button sx={style}>{props.title}</Button>
    </div>
  );
}
