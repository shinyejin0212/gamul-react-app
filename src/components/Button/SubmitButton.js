import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

const Button = styled.button`
  font-size: 16px;
  background-color: ${pointColor};
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 354px;
  height: 40px;
  border-radius: 12px;
`;
export default function SubmitButton(props) {
  return (
    <div>
      <Button>{props.title}</Button>
    </div>
  );
}
