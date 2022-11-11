import React, { useEffect, useRef, useState } from "react";
import { marketdata } from "../../data/MarketInfo";

function KakaoMap(props) {
  const { kakao } = window;
  const [kakaoMap, setKakaoMap] = useState(null);
  const mapContainer = useRef(null);

  const current_position = () => {
    console.log(props.location.coordinates.lat, props.location.coordinates.lng);
    // 지도에 표시할 원을 생성합니다
    var circle = new kakao.maps.Circle({
      center: props.location.loaded
        ? new kakao.maps.LatLng(
            props.location.coordinates.lat,
            props.location.coordinates.lng
          )
        : new kakao.maps.LatLng(37.57096169, 126.9984922),

      radius: 1500, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: "#75B8FA", // 선의 색깔입니다
      strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "dashed", // 선의 스타일 입니다
      fillColor: "#CFE7FF", // 채우기 색깔입니다
      fillOpacity: 0.2, // 채우기 불투명도 입니다
    });

    // 지도에 원을 표시합니다
    circle.setMap(kakaoMap);
  };

  // useEffect(() => {
  //   current_position();
  // });

  const initMap = () => {
    const center = props.location.loaded
      ? new kakao.maps.LatLng(
          props.location.coordinates.lat,
          props.location.coordinates.lng
        )
      : new kakao.maps.LatLng(37.57096169, 126.9984922);

    const options = {
      center,
      level: 7,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);
    setKakaoMap(map);

    marketdata.forEach((gu) => {
      gu.market.forEach((market) => {
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
        marker.setMap(map);

        //인포 윈도우
        let infowindow = new kakao.maps.InfoWindow({
          content: market.address, //
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
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
  };

  useEffect(() => {
    initMap();
  }, [props.location.loaded]);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "349px", height: "298px", borderRadius: "12px" }}
    >
      {current_position()}
    </div>
  );
}

export default KakaoMap;
