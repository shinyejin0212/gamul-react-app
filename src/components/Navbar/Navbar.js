import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

const NavWrapper = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 113px;
  z-index: 10;
  background-color: ${pointColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0.1px 0.1px 3px #b3b3b3;
  justify-content: center;
  align-items: center;
`;

const NabLogo = styled.section`
  color: white;
  font-size: 23px;
`;

export default function Nabvar() {
  return (
    <div>
      <NavWrapper>
        <NabLogo>GAMUL</NabLogo>
      </NavWrapper>
    </div>
  );
}
