import React from "react";
import KakaoMap from "../../components/Address/KakaoMap";
import useGeoLocation from "../../hooks/useGeolocation.tsx";

function SelectStoreMap() {
  const currentLocation = useGeoLocation();

  return (
    <div>
      <KakaoMap location={currentLocation} />
    </div>
  );
}

export default SelectStoreMap;
