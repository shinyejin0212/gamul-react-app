import React from "react";
import MartCategory from "../../components/NearMarket/MartCategory";
import FoodCategory from "../../components/NearMarket/FoodCategory";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";

function NearMartList() {
  const id = 1; //수정하기
  const token = useSelector((state) => state.authToken);
  const first = useSelector((state) => state.getNearMarkets.first);
  const second = useSelector((state) => state.getNearMarkets.second);
  const third = useSelector((state) => state.getNearMarkets.third);
  const tables = useSelector((state) => state.getNearMarkets.table);
  const markets = [first, second, third];
  console.log("tables", tables);

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "113px",
      }}
    >
      <div style={{ backgroundColor: "black" }}>
        <div
          style={{
            display: "flex",
            marginLeft: "60px",
            float: "right",
            padding: "5px",
            overflow: "hidden",
            position: "fixed",
          }}
        >
          {markets &&
            markets.map((market) => (
              <MartCategory key={market} props={market} />
            ))}
        </div>
      </div>

      <div style={{ clear: "both", marginTop: "85px" }}>
        <Swiper
          direction={"vertical"}
          slidesPerView={6}
          slidesPerGroup={3}
          spaceBetween={1}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel]}
          //   Pagination
          className="mySwiper"
          loopFillGroupWithBlank={true}
          height="360"
        >
          {tables &&
            tables.map((table, idx) => (
              <SwiperSlide>
                <FoodCategory key={idx} title={table.name} prices={table.row} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NearMartList;
