import React from "react";
import KakaoMap from "../../components/Address/KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";

const { kakao } = window;

function SelectStoreMap() {
  const currentLocation = useGeoLocation();

  return (
    <div>
      <br></br>
      <KakaoMap location={currentLocation} />
    </div>
  );
}

export default SelectStoreMap;
