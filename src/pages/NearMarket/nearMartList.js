import React from "react";
import MartCategory from "../../components/NearMarket/MartCategory";
import FoodCategory from "../../components/NearMarket/FoodCategory";

function nearMartList() {
  const id = 1; //수정하기
  return (
    <div>
      <div style={{ display: "flex" }}>
        <MartCategory key={id} props="마켓1" />
        <MartCategory key={id} props="마켓2" />
        <MartCategory key={id} props="마켓3" />
      </div>
      <div>
        <FoodCategory key={id} props="사과" />
        <FoodCategory key={id} props="사과2" />
        <FoodCategory key={id} props="사과3" />
      </div>
    </div>
  );
}

export default nearMartList;
