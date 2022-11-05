import React from "react";
import { Title } from "../../styles/styles";
import SelectButton from "../../components/Button/SelectButton";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

import bag_icon from "../../assets/icons/bag_icon.png";
import cart_icon from "../../assets/icons/cart_icon.png";

const OrangeButton = styled.button`
  font-size: 16px;
  background-color: #ffdeca;
  color: ${pointColor};
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin-top: 12px;
  width: 70vw;
  max-width: 254px;
  height: 254px;
  max-height: 25vh;
  border-radius: 12px;

  text-decoration: underline;
`;

const GrayButton = styled.button`
  font-size: 16px;
  background-color: #f9f7f5;
  color: #828282;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin-top: 12px;
  width: 70vw;
  max-width: 254px;
  height: 111px;
  max-height: 15vh;
  border-radius: 12px;

  text-decoration: underline;
`;

export const BagIcon = styled.img`
  width: 40px;
  margin: 10px;
`;

export const CartIcon = styled.img`
  width: 80px;
  margin: 10px;
  //   flex-direction: column;
  //   max-width: 313px;
  //   height: auto;
  //   margin-top: 44px;
`;

function main() {
  return (
    <div>
      <Title>
        원하는 기능을
        <br />
        선택하세요
      </Title>
      <SelectButton title="마트 선택하기" />
      <OrangeButton onClick={() => (window.location.href = "/")} /* 수정필요 */>
        <CartIcon alt="cart_icon" src={cart_icon} />
        <br />
        Go {">"}
        {">"}
        {">"}
      </OrangeButton>
      <br />
      <br />
      <GrayButton onClick={() => (window.location.href = "/")} /* 수정필요 */>
        <BagIcon alt="bag_icon" src={bag_icon} />
        <br />
        Go {">"}
        {">"}
        {">"}
      </GrayButton>
    </div>
  );
}

export default main;
