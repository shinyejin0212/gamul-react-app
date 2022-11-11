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
        clickable: true, //마커 클릭시 지도의 클릭 이벤트 발생하지 않게
      });
      marker.setMap(kakaoMap);

      //인포 윈도우
      let infowindow = new kakao.maps.InfoWindow({
        content: market.address, //
      });
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(kakaoMap, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );

      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
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
