import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles.js";

export const HomeAlign = styled.div`
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
`;
export const MainLogo = styled.img`
  flex-direction: column;
  width: 80vw;
  max-width: 313px;
  height: auto;
`;

export const StartButton = styled.button`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 44px;
  max-width: 200px;
  font-size: 22px;
  background-color: ${pointColor};
  color: white;
  font-weight: 900;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 4px 4px 8px #b3b3b3;
  margin: 44px;
`;
