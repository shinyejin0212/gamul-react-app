import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import KakaoMap from "./KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";
import AddressList from "./AddressList";

import {
  increment,
  decrement,
  selectMarket,
  MoveBookMark,
  MoveMap,
} from "../../actions/action";

function BottomSheet(open) {
  const currentLocation = useGeoLocation();
  const [market, setMarket] = useState(null);

  const onClickCurrent = () => {
    dispatch(MoveMap());
  };

  const counter = useSelector((state) => state.counterReducer);
  const clickMarker = useSelector((state) => state.clickMarkerReducer);
  const selectedMarket = useSelector((state) => state.selectMarketReducer);
  const move = useSelector((state) => state.BookMarkOrMapReducer);

  const dispatch = useDispatch();

  const onClickChoice = () => {
    dispatch(selectMarket(clickMarker));
    dispatch(MoveBookMark());
    setMarket(selectedMarket);
  };

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };

  return move == false ? (
    <>
      <div>주소설정</div>
      {market} {/*수정 해야함  */}
      <Button onClick={onClickCurrent}>현재 위치로 설정</Button>
      <hr></hr>
      <AddressList />
      {counter}
      <Button onClick={onIncrease}>+1</Button>
      <Button onClick={onDecrease}>-1</Button>
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
