import React, { useState } from "react";
import { Title } from "../../styles/styles";
import BottomSheet from "../../components/Address/BottomSheet";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

import bag_icon from "../../assets/icons/bag_icon.png";
import cart_icon from "../../assets/icons/cart_icon.png";
import bag_icon_disable from "../../assets/icons/bag_icon_disable.png";
import cart_icon_disable from "../../assets/icons/cart_icon_disable.png";

//mui
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

// redux
import { useSelector, useDispatch } from "react-redux";
import { MoveBookMark, MoveMap, getBookmarks } from "../../actions/action";
import axios from "../../api/axios";

function Main() {
  const [open, setOpen] = useState(false);
  const selectedMarket = useSelector((state) => state.selectMarketReducer);
  const position = selectedMarket ? selectedMarket : "마트 선택하기";
  const disabled = selectedMarket ? false : true;
  const dispatch = useDispatch();
  const [flag, setflag] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const token = useSelector((state) => state.authToken);

  const toggleDrawer = (newOpen) => () => {
    fetchBookmarks();

    setflag(false);
    setOpen(newOpen);
    newOpen ? dispatch(MoveBookMark()) : dispatch(MoveMap());
  };

  const fetchBookmarks = async () => {
    await axios
      .get(`/bookmark`, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((response) => {
        console.log("여기임Main", response.data.data.market);
        setBookmarks(response.data.data.marekt);
        dispatch(getBookmarks(response.data.data.market));
      })
      .catch((error) => console.log("Network Error : ", error));
  };

  const fetchNearMarkets = async () => {
    console.log(selectedMarket);
    await axios
      .get(`/market`, {
        params: {
          market: selectedMarket,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((response) => {
        console.log("fetchNearMarkets", response.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Root>
      <div>
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

        <Title style={{ marginTop: "113px" }}>
          원하는 기능을
          <br />
          선택하세요
        </Title>
        <br></br>
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            backgroundColor: selectedMarket ? "white" : pointColor,
            color: selectedMarket ? pointColor : "white",
            fontWeight: "900",
            fontSize: "16px",
            fontStyle: "italic",

            borderRadius: "12px",
            border: "0",
            outline: "0",
            boxShadow: "2px 2px 4px #b3b3b3",

            marginTop: "12px",
            marginBottom: "12px",
            width: "162px",
            height: "30px",
          }}
        >
          {position}
        </Button>
        <br></br>
        <Button
          sx={{
            fontSize: "16px",
            backgroundColor: selectedMarket ? "#ffdeca" : "white",
            color: pointColor,
            fontWeight: "600",

            borderRadius: "12px",
            border: "0",
            outline: "0",
            boxShadow: "2px 2px 4px #b3b3b3",
            marginTop: "12px",
            width: "70vw",
            maxWidth: "254px",
            height: "254px",
            maxHeight: "25vh",
            textDecoration: "underline",
          }}
          disabled={disabled}
          onClick={() =>
            (window.location.href = "/object_detection")
          } /* 수정필요 */
        >
          <div>
            {selectedMarket ? (
              <CartIcon alt="cart_icon" src={cart_icon} />
            ) : (
              <CartIcon alt="cart_icon_disable" src={cart_icon_disable} />
            )}
            <div>
              Go {">"}
              {">"}
              {">"}
            </div>
          </div>
        </Button>
        <br />
        <br />
        <Button
          sx={{
            fontSize: "16px",
            backgroundColor: selectedMarket ? "#f9f7f5" : "white",
            color: "#828282",
            fontWeight: "600",
            borderRadius: "12px",
            border: "0",
            outline: "0",
            boxShadow: "2px 2px 4px #b3b3b3",
            marginTop: "12px",
            width: "70vw",
            maxWidth: "254px",
            height: "150px",
            maxHeight: "15vh",

            textDecoration: "underline",
          }}
          disabled={disabled}
          onClick={() =>
            fetchNearMarkets()((window.location.href = "/near_market_list"))
          }
        >
          <div>
            {selectedMarket ? (
              <BagIcon alt="bag_icon" src={bag_icon} />
            ) : (
              <BagIcon alt="bag_icon_disable" src={bag_icon_disable} />
            )}
            <div>
              Go {">"}
              {">"}
              {">"}
            </div>
          </div>
        </Button>

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
            <BottomSheet />
            {/* <Skeleton variant="rectangular" height="5px" /> */}
            {/* 여기에 주소 검색이랑 list 등등 */}
          </StyledBox>
        </SwipeableDrawer>
      </div>
    </Root>
  );
}

export default Main;

export const BagIcon = styled.img`
  width: 50px;
  margin: 0px;
`;

export const CartIcon = styled.img`
  width: 80px;
  margin: 10px;
`;

const Root = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
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
