import React, { useState } from "react";
import { Title } from "../../styles/styles";
import BottomSheet from "../../components/Address/BottomSheet";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

import bag_icon from "../../assets/icons/bag_icon.png";
import cart_icon from "../../assets/icons/cart_icon.png";

//mui
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

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

const Buttonstyle = {
  fontSize: "16p",
  backgroundColor: "white",
  color: pointColor,
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

const Root = styled("div")(() => ({
  height: "100%",
}));

const StyledBox = styled(Box)(() => ({
  backgroundColor: "white",
}));

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: "#dadada",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function Main() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `90%`,
            overflow: "visible",
            maxWidth: "374px",
            margin: "auto",
          },
        }}
      />

      <Title>
        원하는 기능을
        <br />
        선택하세요
      </Title>
      <br></br>
      <Button onClick={toggleDrawer(true)} sx={Buttonstyle}>
        마트 선택하기
      </Button>
      <br></br>
      <OrangeButton
        onClick={() =>
          (window.location.href = "/object_detection")
        } /* 수정필요 */
      >
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

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        //swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -15,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            right: 0,
            left: 0,
            backgroundColor: "white",
          }}
        >
          <Puller />
          <br></br>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            right: 0,
            left: 0,
          }}
        >
          <br></br>
          <BottomSheet open={open} />
          {/* <Skeleton variant="rectangular" height="5px" /> */}
          {/* 여기에 주소 검색이랑 list 등등 */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default Main;
