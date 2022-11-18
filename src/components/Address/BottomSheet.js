import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KakaoMap from "./KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";
import AddressList from "./AddressList";

const { kakao } = window;

function BottomSheet(open) {
  const currentLocation = useGeoLocation();
  const [flag, setflag] = useState(!open);
  const [market, setMarket] = useState(null);

  const onClickCurrent = () => {
    setflag(1);
  };

  const onClickChoice = (choice_market) => {
    setMarket(choice_market);
  };

  return flag == 1 ? ( //0으로 바꿔야함
    <>
      <div>주소설정</div>
      <Button onClick={onClickCurrent}>현재 위치로 설정</Button>
      <hr></hr>
      <AddressList />
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
