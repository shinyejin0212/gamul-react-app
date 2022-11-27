import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import KakaoMap from "./KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";
import AddressList from "./AddressList";
import { pointColor } from "../../styles/GlobalStyles";
import axios from "../../api/axios";
import {
  selectMarket,
  MoveBookMark,
  MoveMap,
  addBookmarks,
} from "../../actions/action";

function BottomSheet({}) {
  const currentLocation = useGeoLocation();
  const [market, setMarket] = useState("");

  const onClickCurrent = () => {
    dispatch(MoveMap());
  };

  const clickMarker = useSelector((state) => state.clickMarkerReducer);
  const selectedMarket = useSelector((state) => state.selectMarketReducer);
  const move = useSelector((state) => state.BookMarkOrMapReducer);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.authToken);
  const onClickChoice = async () => {
    dispatch(selectMarket(clickMarker));
    dispatch(MoveBookMark());
    setMarket(selectedMarket);
    dispatch(addBookmarks(selectedMarket));

    try {
      await axios.post(
        `/bookmark`,
        {
          market: market,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return move === false ? (
    <>
      <div
        style={{
          fontWeight: "900",
          fontSize: "20px",
          textAlign: "center",
          fontStyle: "oblique",
        }}
      >
        주소설정
      </div>
      {/* {market} 수정 해야함  */}
      <Button
        onClick={onClickCurrent}
        sx={{
          fontSize: "16p",
          backgroundColor: pointColor,
          color: "white",
          fontWeight: "900",
          fontSize: "14px",

          borderRadius: "12px",
          border: "0",
          outline: "0",
          boxShadow: "2px 2px 4px #b3b3b3",

          marginTop: "12px",
          marginBottom: "12px",
          width: "130px",
          height: "30px",
          borderRadius: "12px",
        }}
      >
        현재 위치로 설정
      </Button>
      <hr style={{ backgroundColor: "#E2E2E2", height: 10, border: 0 }} />
      <br></br>
      <AddressList />
    </>
  ) : (
    <>
      <KakaoMap location={currentLocation} />
      <br></br>
      <Button onClick={onClickChoice}>선택</Button>
      {market} 이 선택되었습니다.
    </>
  );
}

export default BottomSheet;
