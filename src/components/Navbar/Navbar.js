import React from "react";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavWrapper = styled.section`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  width: 100vw;
  max-width: 375px;
  height: 113px;
  z-index: 10;
  background-color: ${pointColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0.1px 0.1px 3px #b3b3b3;

  // flex-direction: column;
  // display: absolute;
`;

const NabLogo = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 900;
  font-style: italic;
  padding-top: 33px;
`;

export default function Nabvar() {
  return (
    <div>
      <Link to="/" style={{ textDecorationLine: "none" }}>
        <NavWrapper>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              width: "20px",
              height: "20px",
              color: "white",
              float: "right",
              // align: "right",
              // marginTop: "12.1px",
              // marginRight: "10vw",
              paddingTop: "10px",
              paddingRight: "15px",
            }}
            // onClick = {}
          />

          <NabLogo>GAMUL</NabLogo>
        </NavWrapper>{" "}
      </Link>
    </div>
  );
}
