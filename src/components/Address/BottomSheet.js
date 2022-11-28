import React, { useEffect, useState } from "react";
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
  getBookmarks,
} from "../../actions/action";

function BottomSheet({}) {
  const currentLocation = useGeoLocation();
  const [market, setMarket] = useState("");
  const [error, setError] = useState(null);

  const onClickCurrent = () => {
    dispatch(MoveMap());
  };

  const clickMarker = useSelector((state) => state.clickMarkerReducer);
  // const selectedMarket = useSelector((state) => state.selectMarketReducer);
  const move = useSelector((state) => state.BookMarkOrMapReducer);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.authToken);

  const [bookmarks, setBookmarks] = useState([]);
  const fetchBookmarks = async () => {
    await axios
      .get(`/bookmark`, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((response) => {
        setBookmarks(response.data.data.marekt);
        dispatch(getBookmarks(response.data.data.market));
      })
      .catch((error) => console.log("Network Error : ", error));
  };

  useEffect(() => {
    if (move == 0) {
      fetchBookmarks();
      console.log("fetch됨");
    }
  }, [move]);

  const setBookmark = async (selected_market) => {
    try {
      await axios.post(
        `/bookmark`,
        {
          market: selected_market,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
          },
        }
      );
      dispatch(MoveBookMark());
    } catch (error) {
      setError(error);
      console.log(error.response);
    }
  };
  const onClickChoice = () => {
    dispatch(selectMarket(clickMarker[0], clickMarker[1]));

    setMarket(clickMarker[0]);
    console.log("selectMarket 35", clickMarker[0]);

    setBookmark(clickMarker[0]);
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
      <Button
        onClick={onClickChoice}
        sx={{
          fontSize: "16px",
          fontWeight: "800",
          color: pointColor,
          float: "right",
          background: "#ffdeca",
          borderRadius: "14px",
          boxShadow: "2px 2px 4px #b3b3b3",
          padding: "2px",
        }}
      >
        선택
      </Button>
      {market}
    </>
  );
}

export default BottomSheet;
