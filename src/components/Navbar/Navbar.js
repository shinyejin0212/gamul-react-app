import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faUser } from "@fortawesome/free-solid-svg-icons";
const NavWrapper = styled.section`
  top: 0;
  width: 100vw;
  max-width: 375px;
  height: 113px;
  z-index: 10;
  background-color: ${pointColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0.1px 0.1px 3px #b3b3b3;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NabLogo = styled.section`
  color: white;
  font-size: 40px;
  // font-family: "Montserrat";
  font-weight: 900;
  font-style: italic;
`;

export default function Nabvar() {
  return (
    <div>
      <NavWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{
              width: "20px",
              height: "20px",
              color: "white",
              // float: "right",
              // align: "right",
              marginRight: "10px",
              marginTop: "12.1px",
            }}
            // onClick = {}
          />
        </div>
        <NabLogo>GAMUL</NabLogo>
      </NavWrapper>
    </div>
  );
}
