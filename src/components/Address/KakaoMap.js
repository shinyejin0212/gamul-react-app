import React, { useEffect, useRef, useState } from "react";
import { marketdata } from "../../data/MarketInfo";

function KakaoMap() {
  const { kakao } = window;
  const [kakaoMap, setKakaoMap] = useState(null);
  const mapContainer = useRef(null);

  const initMap = () => {
    const center = new kakao.maps.LatLng(37.57096169, 126.9984922);
    const options = {
      center,
      level: 8,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);
    setKakaoMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  marketdata.forEach((gu) => {
    gu.market.forEach((market) => {
      console.log(market.latitude, market.longitude);

      let marker_position = new kakao.maps.LatLng(
        market.latitude,
        market.longitude
      );

      let marker = new kakao.maps.Marker({
        position: marker_position,
        title: market.marekt_name,
        image: null,
        clickable: true,
      });
      marker.setMap(kakaoMap);
    });
  });

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "349px", height: "298px", borderRadius: "12px" }}
    ></div>
  );
}

export default KakaoMap;
