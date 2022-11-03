import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

const Button = styled.button`
  font-size: 16px;
  background-color: white;
  color: ${pointColor};
  font-weight: 900;
  font-size: 14px;
  font-style: italic;

  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;

  margin-top: 12px;
  margin-bottom: 12px;
  width: 162px;
  height: 30px;
  border-radius: 12px;
`;

export default function SelectButton(props) {
  return (
    <div>
      <Button>{props.title}</Button>
    </div>
  );
}
