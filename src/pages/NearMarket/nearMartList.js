import React from "react";
import MartCategory from "../../components/NearMarket/MartCategory";
import FoodCategory from "../../components/NearMarket/FoodCategory";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";

function nearMartList() {
  const id = 1; //수정하기
  const token = useSelector((state) => state.authToken);
  console.log(token);

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
          <MartCategory key={id} props="롯데백화점 명동본점" />
          <MartCategory key="2" props="롯데백화점마켓2" />
          <MartCategory key="3" props="마켓3" />
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
          <SwiperSlide>
            <FoodCategory key="1" props="고등어" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default nearMartList;
