import React from "react";
import MartCategory from "../../components/NearMarket/MartCategory";
import FoodCategory from "../../components/NearMarket/FoodCategory";

function nearMartList() {
  const id = 1; //수정하기
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          marginLeft: "40px",
          float: "right",
          padding: "5px",
          overflow: "hidden",
        }}
      >
        <MartCategory key={id} props="롯데백화점 명동본점" />
        <MartCategory key="2" props="롯데백화점마켓2" />
        <MartCategory key="3" props="마켓3" />
      </div>

      <div style={{ clear: "both" }}>
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />{" "}
        <FoodCategory key="1" props="고등어" />
        <FoodCategory key="2" props="사과2" />
        <FoodCategory key="3" props="사과3" />
      </div>
    </div>
  );
}

export default nearMartList;
