import React, { useEffect } from "react";
import { marketdata } from "../../data/MarketInfo";

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    mapscript();
  }, []);
  const mapscript = () => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.57096169, 126.9984922), // 지도 중심 좌표
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    for (let i = 0; i < marketdata.length; i++) {
      let gu = marketdata[i];
      for (let j = 0; j < 1; j++) {
        let market = gu.market[j];
        console.log(market.latitude);
      }
    }
  };
  return (
    <div
      id="map"
      style={{ width: "349px", height: "298px", borderRadius: "12px" }}
    ></div>
  );
}

export default KakaoMap;
