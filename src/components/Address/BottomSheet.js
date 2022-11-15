import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KakaoMap from "./KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";
import AddressList from "./AddressList";

const { kakao } = window;

function BottomSheet() {
  const currentLocation = useGeoLocation();
  const navigate = useNavigate();
  const [flag, setflag] = useState(0);
  const onClickCurrent = () => {
    setflag(1);
  };
  return flag == 0 ? (
    <>
      <div>주소설정</div>
      <Button onClick={onClickCurrent}>현재 위치로 설정</Button>
      <hr></hr>
      <AddressList />
    </>
  ) : (
    <>
      <KakaoMap location={currentLocation} />
    </>
  );
}

export default BottomSheet;
