import React, { forwardRef } from "react";
import styled from "styled-components";

const InputBlank = styled.input`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 354px;
  height: 50px;
  border-radius: 12px;
  border-style: solid;
  border-color: #dadada;
  padding: 10px;
  ::placeholder {
    color: #dadada;
  }
`;

const InputButton = forwardRef((props, ref) => {
  return (
    <div>
      {console.log(props.register)}
      <InputBlank placeholder={props.placeholder} {...props.register} />
    </div>
  );
});
export default InputButton;
