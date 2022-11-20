import React, { useEffect, useRef, useState } from "react";
import { marketdata } from "../../data/MarketInfo";
import { Button } from "@mui/material";
import { pointColor } from "../../styles/GlobalStyles";

import { useSelector, useDispatch } from "react-redux";
import { sendMarket } from "../../actions/action";

const Buttonstyle = {
  fontSize: "16p",
  backgroundColor: "white",
  color: pointColor,
  fontWeight: "900",
  fontSize: "14px",
  fontStyle: "italic",

  borderRadius: "12px",
  border: "0",
  outline: "0",
  boxShadow: "2px 2px 4px #b3b3b3",

  marginTop: "12px",
  marginBottom: "12px",
  width: "162px",
  height: "30px",
  borderRadius: "12px",
};
const { kakao } = window;
function KakaoMap(position) {
  const [kakaoMap, setKakaoMap] = useState(null);
  const mapContainer = useRef(null);
  const current_position = () => {
    // 지도에 표시할 원을 생성합니다
    var circle = new kakao.maps.Circle({
      center: position.location.loaded
        ? new kakao.maps.LatLng(
            position.location.coordinates.lat,
            position.location.coordinates.lng
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

    var imageSrc =
        "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(
        position.location.coordinates.lat,
        position.location.coordinates.lng
      ),
      title: "내 위치",
      image: markerImage,
      clickable: true, //마커 클릭시 지도의 클릭 이벤트 발생하지 않게
    });
    marker.setMap(kakaoMap);
  };

  const initMap = () => {
    const center = position.location.loaded
      ? new kakao.maps.LatLng(
          position.location.coordinates.lat,
          position.location.coordinates.lng
        )
      : new kakao.maps.LatLng(37.57096169, 126.9984922);

    const options = {
      center,
      level: 7,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);
    setKakaoMap(map);
  };

  const clickMarker = useSelector((state) => state.clickMarkerReducer);
  const dispatch = useDispatch();

  const getMarker = () => {
    marketdata.forEach((market) => {
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

      kakao.maps.event.addListener(marker, "click", function () {
        sendTitle(marker.Gb);
      });
    });
  };

  // const sendTitle = (title) => {
  //   console.log(title); //title임
  //   setTitle(title);
  // };

  const sendTitle = (new_title) => {
    dispatch(sendMarket(new_title));
  };

  useEffect(() => {
    initMap();
  }, [position.location.loaded]);

  useEffect(() => {
    getMarker();
    current_position();
  }, [kakaoMap]);

  return (
    <>
      <Button sx={Buttonstyle} onClick={initMap}>
        현재 위치 설정하기
      </Button>
      <div
        id="map"
        ref={mapContainer}
        style={{ width: "349px", height: "298px", borderRadius: "12px" }}
      ></div>
      {clickMarker}
    </>
  );
}

export default KakaoMap;
