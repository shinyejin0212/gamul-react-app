import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import KakaoMap from "./KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";
import AddressList from "./AddressList";

import { increment, decrement, selectMarket } from "../../actions/action";

function BottomSheet(open) {
  const currentLocation = useGeoLocation();
  const [flag, setflag] = useState(!open);
  const [market, setMarket] = useState(null);

  const onClickCurrent = () => {
    setflag(1);
  };

  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const onClickChoice = () => {
    dispatch(selectMarket());
  };

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };

  return flag == 1 ? ( //0으로 바꿔야함
    <>
      <div>주소설정</div>
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
      {market}
      <Button onClick={onClickChoice}>선택</Button>
    </>
  );
}

export default BottomSheet;
